function checkspeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedlimit) {
        console.log("ok");
        return;
    }

    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    if (demeritPoints > 12) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${demeritPoints}`);
    }
} // if demerit points exceed 12 one should get the license suspended 