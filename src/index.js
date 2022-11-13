// import store from "./store";
// import * as act from "./actions";

// console.log(store);

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// });

// store.dispatch(act.bugAdded("Bug 1"));

// // unsubscribe();

// store.dispatch(act.bugResolved(1));

// // unsubscribe();

// store.dispatch(act.bugRemoved(1));

// console.log(store.getState());

//
//
//
//
//
//
//
//

import store from "./customStore";
import * as act from "./actions";

store.subscribe(() => {
  console.log("Store changed!");
});

store.dispatch(act.bugAdded("Bug 1"));

console.log(store.getState());
