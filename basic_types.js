var age = 34;
var userName = "Manoj kumar";
var isAdult = true;
var tuple;
tuple = [userName, isAdult];
var list = [];
list.push(1);
console.log(typeof list);
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Sunday"] = 0] = "Sunday";
    weekDays[weekDays["Monday"] = 1] = "Monday";
    weekDays[weekDays["Tuesday"] = 2] = "Tuesday";
    weekDays[weekDays["Wednesday"] = 3] = "Wednesday";
    weekDays[weekDays["Thursday"] = 4] = "Thursday";
    weekDays[weekDays["Friday"] = 5] = "Friday";
    weekDays[weekDays["Saturday"] = 6] = "Saturday";
})(weekDays || (weekDays = {}));
;
var day = weekDays.Saturday;
console.log(day);
//any
//void
//unknown
//never
