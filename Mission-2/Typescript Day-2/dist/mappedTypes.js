"use strict";
// mapped types
Object.defineProperty(exports, "__esModule", { value: true });
const arrayOfNumbers = [1, 2, 3, 4];
const convertedString = arrayOfNumbers.map((m) => m.toString());
console.log(convertedString);
//  T == {height : string, width : string}
const area1 = {
    height: '50',
    width: 50
};
// creating AreaString manually
// type AreaString = {
//     height : string,
//     width : string
// }
//# sourceMappingURL=mappedTypes.js.map