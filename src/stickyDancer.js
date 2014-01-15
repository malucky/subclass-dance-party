var StickyDancer = function(top, left, timeBetweenSteps, tribe){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('sticky');
  var imgNum = Math.ceil( Math.random() * 8 );
  // var imgNum = 1;
  this.tribe = tribe || imgNum;

  this.$node.css({"background-image": "url('./img/robots/"+imgNum +".png')"});

  this.oldStep = this.step;
  this.step = function(){
    this.oldStep();
    if (window.stop) return;

    var midX = $("body").width() / 2;
    var midY = $("body").height() / 2;
    var offset = 150;
    if (window.info.gather) {
      this.gather();
    }
    this.interact();
   }

};


StickyDancer.prototype = Object.create(Dancer.prototype);
StickyDancer.prototype.constructor = DynamicDancer;

StickyDancer.prototype.gather = function(){

  var offset = 150;

  var nearMidX = Math.random() * offset + window.info['midX'] - offset/2;
  var nearMidY = Math.random() * offset + window.info['midY'] - offset/2;

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
    "opacity": "0.6"
  }, 1000);
};

StickyDancer.prototype.interact = function() {
  var minimumDistance = 50;
  for (var i = 0; i < window.dancers.length; i++) {
    if (this !== window.dancers[i]) {
      var distance = this.checkDistance(window.dancers[i]);
      if (distance < minimumDistance) {
        this.doInteraction(window.dancers[i], i);
      }
    }
  }

};

StickyDancer.prototype.checkDistance = function(otherDancer) {
  var selfX = this.left;
  var otherX = otherDancer.left;
  var selfY = this.top;
  var otherY = otherDancer.top;
  return Math.sqrt( Math.pow((selfX-otherX), 2) + Math.pow((selfY-otherY), 2) );
};

StickyDancer.prototype.doInteraction = function(neighbor, index) {
  if (this.tribe === neighbor.tribe) {
    console.log('making baby');
    //neighbor.$node.css({'left': 0});
    var offset = 200;
    var leftDelta = Math.random() * offset + this.left - offset/2;
    var topDelta = Math.random() * offset + this.top - offset/2;
    neighbor.$node.animate({
      "left": leftDelta + 'px',
      "top": topDelta + 'px',
      "opacity": "1"
    }, 1000);
    //neighbor.$node.remove(); //css({'left': 1000});
    //window.dancers.splice(index, 1);
    new StickyDancer(Math.random()*window.info['midY']*2, Math.random()*window.info['midX']*2, 2000, this.tribe);
  } else if (Math.abs(this.tribe - neighbor.tribe) > 0 ) {
    neighbor.$node.remove();
    window.dancers.splice(index, 1);
  }

};