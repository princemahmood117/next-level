"use strict";
//  '?' --> ternary operator : decision making
Object.defineProperty(exports, "__esModule", { value: true });
// '??' --> nullish coalescing
// '?.' --> optional chaining
const isEligible = (age) => {
    const result = age >= 20 ? "you are eligible" : "not eligible"; // ternary operation
    return result;
};
console.log(isEligible(11));
// Nullish coalescing is an operator (??) that lets you safely 'provide a default value' only when the left side is null or undefined.
const userTheme = undefined;
const selectedTheme = userTheme ?? "black theme"; // black theme is the default value if the left side is null/undefined
console.log(selectedTheme);
const user = {
    address: {
        city: "dhaka",
        town: "banani",
    },
};
const postalCode = user?.address?.postal;
console.log(postalCode);
//# sourceMappingURL=question.js.map