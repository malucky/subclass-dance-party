window.gather = function() {
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

};