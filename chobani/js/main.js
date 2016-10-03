var chobani = 0;
var flavour = 'plain';
var moms = 0;
var minivans = 0;

function l(foo) {
    return document.getElementById(foo);
}
function p(input) {
    var output = Math.round(input * 1000000)/1000000;
    return output;
}

function clickChobani(number) {
    chobani = chobani + number;
    l("chobaniamount").innerHTML = p(chobani);
    if (chobani == 1) {
        l("cuporcups").innerHTML = 'cup';
    }
    else {
        l("cuporcups").innerHTML = 'cups';
    }
}

function buyMom(){
    var momscost = Math.floor(10 * Math.pow(1.1, moms));
    if (chobani >= momscost) {
        moms += 1;
        chobani = chobani - momscost;
        l("momsamt").innerHTML = p(moms);
        l("chobaniamount").innerHTML = p(chobani);
    }
    var nextCost = Math.floor(10 * Math.pow(1.1, moms));
    l("momscost").innerHTML = p(nextCost);
}
function buyMinivan(){
    var minivanscost = Math.floor(50 * Math.pow(1.1, minivans));
    if (chobani >= minivanscost) {
        minivans += 1;
        chobani = chobani - minivanscost;
        l("minivansamt").innerHTML = p(minivans);
        l("chobaniamount").innerHTML = p(chobani);
    }
    var nextCost = Math.floor(50 * Math.pow(1.1, minivans));
    l("minivanscost").innerHTML = nextCost;
}

window.setInterval(function(){
    clickChobani(moms);
}, 1000);
window.setInterval(function(){
    clickChobani(minivans);
}, 500);