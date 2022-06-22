// INTERVAL ========================================

// import { interval } from "rxjs";

// const observable = interval(1000);

// let i = 0;

// const observer = observable.subscribe(console.log);

// TIMER ========================================

// import { timer } from "rxjs";

// const observable = timer(0, 1000);

// const subscription = observable.subscribe(console.log);

// DOM EVENT OPERATORS ========================================

// import { fromEvent } from "rxjs";

// const observable = fromEvent(document, "click");

// const subscription = observable.subscribe(console.log);

// from OPERATOR ========================================

// import { from } from "rxjs";

// const observable = from(fetch("https://jsonplaceholder.typicode.com/todos/1"));

// const subscription = observable.subscribe({
//   next(value) {
//     console.log(value);
//   },
//   complete(value) {
//     console.log("complete");
//   },
// });

//* PIPEABLE OPERATORS ========================================
// Functions for transforming, filtering and combining data.

//* most popular one: map operator

import { of } from "rxjs";
import { map } from "rxjs/operators";

const observable = of(1, 2, 3, 4, 5).pipe(map((value) => `$${value}`));

const subscription = observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete(value) {
    console.log("complete");
  },
});
