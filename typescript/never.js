var ne;
var nev;
var an;
// ne = 123; // Error
ne = nev; // OK
// ne = an; // Error
ne = (function () { throw new Error("异常"); })(); // OK
ne = (function () { while (true) { } })(); // OK
