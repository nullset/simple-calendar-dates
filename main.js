import { getMatrix } from "./index";

console.time("perf");
[2022, 2145, 2500, 4578, 3].forEach((year) => {
  console.time("run");
  console.log(year, getMatrix(`${year}-6`));
  console.timeEnd("run");
});
console.timeEnd("perf");
