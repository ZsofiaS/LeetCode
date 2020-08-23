// 1108. Defanging and IP Address
// https://leetcode.com/problems/defanging-an-ip-address/

let defangIPaddr = function(address) {
    let addressArray = address.split(".");
    address = addressArray.join("[.]");
    return address;
};
