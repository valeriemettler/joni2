//action--add and get
var d = {};
var currentNote;
var highestTime = 5; //
var lowestTime = 0;
var woof = function(action, time, note) {
    if (action === "add") {

        //highestTime = time;
        if (time > highestTime) {
            lowestTime = highestTime;
            highestTime = time; //higesttime is 8
        }

        // if (time <= lowestTime) {
        //     lowestTime = highestTime;
        // }



        d[time];
        d[time] = note;
        currentNote = d[time];
        //console.log("add", d, currentNote);
        return d[time];
    } else if (action === "get") {

        if (d[time] === undefined && time > highestTime) {
            d[time] = "";
            return d[time];
        } else if (d[time] === undefined && time < highestTime) {
            d[time] = currentNote;
            // console.log(d);
            return d[time];
        } else if (d[time] !== undefined && time === highestTime) {
            return d[time];
        } else if (d[time] !== undefined && time < highestTime) {
            d[time] = currentNote;
            return d[time];
        } else if (d[time] !== undefined && time > highestTime) {
            return d[time];
        }
        //console.log("just get", time);
    }
};
var test = function() {
    // debug([-2, woof("get", 5) == ""]);
    // debug([-1, woof("get", 0) == ""]);
    debug([0, woof("add", 5, "hello") == "hello"]);
    debug([1, woof("get", 0) == "hello"]);
    debug([2, woof("get", 1) == "hello"]);
    debug([3, woof("get", 2) == "hello"]);
    debug([4, woof("get", 3) == "hello"]);
    debug([5, woof("get", 4) == "hello"]);
    debug([6, woof("get", 5) == "hello"]);
    debug([7, woof("get", 6) == ""]); //not less than 6 anymore

    debug([8, woof("add", 4, "hi") == "hi"]);

    debug([9, woof("get", 0) == "hi"]);
    debug([10, woof("get", 1) == "hi"]);
    debug([11, woof("get", 2) == "hi"]);
    debug([12, woof("get", 3) == "hi"]);
    debug([13, woof("get", 4) == "hi"]);
    debug([14, woof("get", 5) == "hello"]);
    debug([15, woof("get", 6) == ""]);
    debug([16, woof("add", 2, "meow") == "meow"]);
    debug([17, woof("get", 0) == "meow"]);
    debug([18, woof("get", 1) == "meow"]);
    debug([19, woof("get", 2) == "meow"]);

    debug([20, woof("get", 3) == "hi"]);
    debug([21, woof("get", 4) == "hi"]);

    debug([22, woof("get", 5) == "hello"]);
    debug([23, woof("get", 6) == ""]);
    debug([24, woof("add", 8, "yo") == "yo"]); //

    debug([25, woof("get", 0) == "meow"]);
    debug([26, woof("get", 1) == "meow"]);
    debug([27, woof("get", 2) == "meow"]);
    debug([28, woof("get", 3) == "hi"]);
    debug([29, woof("get", 4) == "hi"]);
    debug([30, woof("get", 5) == "hello"]);

    debug([31, woof("get", 6) == "yo"]);
    debug([32, woof("get", 7) == "yo"]); //
    debug([33, woof("get", 8) == "yo"]);
    debug([34, woof("get", 9) == ""]);
};
test();