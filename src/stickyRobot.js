var StickyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('sticky');
  this.$node.css({background-image: url('./img/robots.1png')});

  this.oldStep = this.step;
  this.step = function(){
    this.oldStep();
    if (window.stop) return

    this.$node.css({
      border: "15px solid " + randomColor()
    //   transform: 'translate(100px, 50%)',
    //   //left: randomNumX,
    //   bottom: randomNumY,
    //   opacity: 0.5
     });
   }

};


StickyDancer.prototype = Object.create(Dancer.prototype);
StickyDancer.prototype.constructor = DynamicDancer;
