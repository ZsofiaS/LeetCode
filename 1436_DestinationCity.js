// 1436. Destination City
// https://leetcode.com/problems/destination-city/

let destCity = function(paths) {
    let cityAs = [];
    let cityBs = [];
    let destination = '';
    paths.forEach(path => {
        cityAs.push(path[0]);
        cityBs.push(path[1]);
    });
    cityBs.forEach(city => {
        if (!cityAs.includes(city)) {
            destination = city;
        }
    })
    return destination;
};
