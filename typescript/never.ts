let ne: never;
let nev: never;
let an: any;

// ne = 123; // Error
ne = nev; // OK
// ne = an; // Error
ne = (() => { throw new Error("异常"); })(); // OK
ne = (() => { while(true) {} })(); // OK
