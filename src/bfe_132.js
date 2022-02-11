// 132. the angle between hour hand and minute hand of a clock



/**
 * @param {string} time
 * @returns {number} 
 */
function angle(time) {
  // your code here
  const [hours, minutes] = [time.split(":")[0] % 12, time.split(":")[1]];
  const degreeCoveredByMinHandPerMin = 360 / 60;
  const degreeCoveredByHourHandPerhour = 360 / 12;
  const degreeCoveredByByHourHandPerMin = 30 * (minutes / 60); // angle between any consecutive hours is 30 deg.

  const degreeCoveredWRT12ByHour = hours * degreeCoveredByHourHandPerhour;
  const totalDegreeCoveredWRT12ByMin = minutes * degreeCoveredByMinHandPerMin;
  const totalDegreeCoveredWRT12ByHour = degreeCoveredWRT12ByHour + degreeCoveredByByHourHandPerMin;

  const angle = Math.abs(totalDegreeCoveredWRT12ByMin - totalDegreeCoveredWRT12ByHour);
  const smallerAngle = Math.min(360 - angle, angle);
  return Math.round(smallerAngle);
}
// min = 6 * 34 = 204
// 30 * (34/60) = 17

console.log(angle('11:59'));