// Import .ts file as .js, see https://github.com/TypeStrong/ts-node/issues/1007#issue-598417180
import { funci } from "./dep.js";
console.log(funci());

const a = [1, 2, 3];

const b: number|string = a[0];
