//action--add and get
var d = {};
var woof = function(action, name, score) {

    //if add and undefined
    // if (action === "add" && d[name] === null) {
    //     debug("first if statement");
    //     d[name];
    //     d[name] = "";
    //     return d[name];
    // }
    //if add and defined
    if (action === "add"){
        d[name] = score;
        return d[name];
    }//if get and undefined
    else if (action === "get" && d[name] === undefined) {
        d[name] = "";
        return d[name];
    }//if get and defined
    else {
        return d[name];
    }
}
var test2 = function() {
    debug("running test2");
    var i = 1;
    debug([i++, woof("add", "", "100") == "100"]);
    debug([i++, woof("add", "leia", "100") == "100"]);
    debug([i++, woof("get", "leia") == "100"]);
};
d={};
test2();

var test1 = function() {
    debug("running test1");
    var i = 1;
    debug([i++, woof("get", "leia") == ""]);
    debug([i++, woof("get", "val") == ""]);
    debug([i++, woof("add", "leia", "100") == "100"]);
    debug([i++, woof("get", "leia") == "100"]);
    debug([i++, woof("get", "val") == ""]);
    debug([i++, woof("add", "val", "105") == "105"]);
    debug([i++, woof("get", "leia") == "100"]);
    debug([i++, woof("get", "val") == "105"]);
    debug([i++, woof("get", "k") == ""]);
};
d={};
test1();

