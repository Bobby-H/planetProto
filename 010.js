// -> Create an object called 'robot' using an object literal
var robot = {
	smart: true,
	robot: robot
}
// -> robot should have a property 'smart' with value true
__

// -> Claim the result robot.smart
claim(robot.smart, true);

// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	robot: robot
}
