var DynamicDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  //this.$node.addClass('dynamic');
  this.oldStep = this.step;
  this.step = function(){
    this.oldStep();
    //this.$node.toggle();
    var $body = $('body');
    var randomNumX = Math.random()*$body.width();
    var randomNumY = Math.random()*$body.height();

    var randomColor = function(){
      result = [];
      for (var i = 0; i < 3; i++) {
        result.push( Math.floor(Math.random()*256 ));
      }

      return "rgb(" + result.join(",") + ")";
    };

    this.$node.animate({
      "left": randomNumX,
      "bottom": randomNumY, 
      "opacity": "0.5"
     }, "slow");
    this.$node.css({border: "15px solid " + randomColor()});
    //this.$node.removeClass('dancer');
    var that = this;
    // setTimeout(function(){
    //   //that.$node.removeClass('dancer');
    //   that.$node.addClass('dynamic');
    // }, 3000);
  };
};

DynamicDancer.prototype = Object.create(Dancer.prototype);
DynamicDancer.prototype.constructor = DynamicDancer;

  //$( ".block" ).animate({ "left": "+=50px" }, "slow" );