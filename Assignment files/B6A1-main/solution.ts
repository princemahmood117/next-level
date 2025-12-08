/*
- This solution.ts file is an example; replace it with your own code.
- Use the same function names and parameter names as in the problem statement.
- Write only the code inside the function bodies and return the result.
- Do not use any console.log statements or comments.
*/

const getSwallowVelocity = (type: 'african' | 'european'): string => {
  if (type === 'african') {
    return 'Roughly 11 meters per second.';
  }
  return "I... I don't know that!";
};

const isCatLiquid = (isAsleep: boolean, containerShape: string): boolean => {
  return isAsleep && containerShape !== 'none';
};

class Wizard {
  name: string;
  favoriteSpell: string;

  constructor(name: string, favoriteSpell: string) {
    this.name = name;
    this.favoriteSpell = favoriteSpell;
  }

  castSpell(): string {
    return `${this.name} casts ${this.favoriteSpell}!`;
  }
}
