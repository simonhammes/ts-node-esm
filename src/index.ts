// Import .ts file as .js, see https://github.com/TypeStrong/ts-node/issues/1007#issue-598417180
import { foo, numbers } from './lib.js';

console.log(foo(), '\n\n', numbers);
