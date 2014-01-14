var StickyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('sticky');
  var imgNum = Math.ceil( Math.random() * 8 );
  this.tribe = imgNum;

  this.$node.css({"background-image": "url('./img/robots/"+imgNum +".png')"});

  this.oldStep = this.step;
  this.step = function(){
    this.oldStep();
    if (window.stop) return;

    // var randomOffset = null;
    // var posOrNeg = Math.floor(Math.random() * 2);
    // if (posOrNeg) {
    //   randomOffset = Math.random() * 200;
    // } else {
    //   randomOffset = -1 * Math.random() * 200;
    // }

    var midX = $("body").width() / 2;
    var midY = $("body").height() / 2;
    var offset = 150;

    var nearMidX = Math.random() * offset + midX - offset/2;
    var nearMidY = Math.random() * offset + midY - offset/2;
    //nearMidX = Math.floor(Math.random()* (midX - (midX - offset) + 1) + (midX - offset));

    var deltaX = null;
    var deltaY = null;
    var increment = 20;

    if (this.left < nearMidX) {
      deltaX = "+="+increment+"px";
      this.left += increment;
    } else {
      deltaX = "-="+increment+"px";
      this.left -= increment;
    }

    // console.log(this.top,'midY',midY);
    if (this.top < nearMidY) {
      deltaY = "+="+increment+"px";
      this.top += increment;
    } else {
      deltaY = "-="+increment+"px";
      this.top -= increment;
    }

    this.$node.animate({
      "left": deltaX,
      "top": deltaY,
      "opacity": "0.5"
     }, "slow");



    // this.$node.css({
    //   border: "15px solid " + randomColor()
    // //   transform: 'translate(100px, 50%)',
    // //   //left: randomNumX,
    // //   bottom: randomNumY,
    // //   opacity: 0.5
    //  });
   }

};


StickyDancer.prototype = Object.create(Dancer.prototype);
StickyDancer.prototype.constructor = DynamicDancer;
