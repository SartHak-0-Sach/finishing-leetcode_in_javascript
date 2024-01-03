function calculateDevices(str) {
    let devices = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "1") {
            devices++;
        }
    }
    return devices;
}

var numberOfBeams = function (bank) {
    let devicesArray = [];
    for (let i = 0; i < bank.length; i++) {
        devicesArray.push(calculateDevices(bank[i]));
    }
    let totalBeams = 0;
    for (let i = 0; i < devicesArray.length - 1; i++) {
        let upcoming = i + 1;
        while (devicesArray[upcoming] === 0 && upcoming < devicesArray.length) {
            upcoming++;
        }
        if (upcoming !== devicesArray.length) {
            totalBeams += devicesArray[i] * devicesArray[upcoming];
        }
    }
    return totalBeams;
}