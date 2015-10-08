console.clear();
var d = {};
var currentNote;
var currentNoteTime;
var woof = function(action, time, note) {
    if (action === "add") {
        currentNoteTime = time;
        d[time];
        d[time] = note;
        currentNote = d[time];
        //console.log("add", d, currentNote);
        return d[time];
    } else if (action === "get") {

        if (d[time] === undefined && time < currentNoteTime){
            d[time] = currentNote;
           // console.log(d);
            return d[time];
        } else {
           d[time] = "";
            return d[time];
        }
         //console.log("just get", time);
    }
};
//console.log([0, woof("add", 5, "hello") == "hello"]);
//console.log([5, woof("get", 4) == "hello"]);
var x = woof("add", 5, "hello")
console.log(x);
var b = woof("get", 0);
console.log(b);
var a = woof("get", 6);
console.log("a", a);
console.log(d);