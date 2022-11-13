import { compose, pipe } from "lodash/fp";

let input = "    JavaScript     ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrap = (type) =>  str => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap('div'));
// pipe() func builds a pipeline. The o/p of each func will be the i/p of next func.
// Every arguments to the pipe() func has to be a function

// Or const transform = compose(wrap, toLowerCase, trim);
// compose() func read from right to left

console.log(transform(input));
