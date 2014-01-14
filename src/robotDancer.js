var RobotDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class="whole_robot"></div>');
  this.$node.append('<div class="beep robot_house"></div>');
  this.$node.append('<div class="brain robot_house"></div>');
  this.$node.append('<div class="torso robot_house"></div>');
  this.$node.append('<div class="foot robot_house"></div>');
  console.log(this.$node);
  this.oldStep = this.step;
  this.step = function() {
    this.oldStep();
    this.$node.toggle();
  };
};

RobotDancer.prototype = Object.create(Dancer.prototype);
RobotDancer.prototype.constructor = RobotDancer;