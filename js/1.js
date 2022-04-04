"use strict";
exports.__esModule = true;
var admin, name;
name = "John";
admin = name;
//console.log(admin);
var PLANET_NAME = "Earth";
var visitorName = "James";
var temp = 1;
var tertiary = -1;
var prefix = ++tertiary; // prefix = 0, tertiary = 0
console.log("tertiary is ".concat(tertiary)); // 0
var postfix = tertiary++; // postfix = 0? tertiary = 1
console.log("tertiary is ".concat(tertiary)); // 0
[prefix, postfix, tertiary].map(function (item) { return console.log(item); });
(prefix = temp++) == 2 ? (tertiary = 2) : (tertiary = 9);
console.log(" tertiary became: ".concat(tertiary));
[temp, tertiary, prefix].map(function (item) {
    console.log(item);
});
