

const course1 = { name: "Programming Hero" };
const course2 = { name: "Next Level Web Development" };

const map = new Map();
map.set(course1, {courseId : "Level1"});
map.set(course2, {courseId : "Level2"});

console.log(map.entries());




const obj = {
    nextLevel : {courseId : "level2"},
    "Programming Hero" : {courseId : "level1"},
    true : {courseId : "level23"},
}
// console.log("\nthis is from obj",obj.nextLevel)
// console.log("\nthis is from obj",obj["Programming Hero"].courseId)
console.log("\nthis is from obj",obj['true']) // also works for 'obj.true' to give the same reasult




const lessons = [["ProgrammingHero", "Level1"], ["Next Level Devs", "Level2"]]

const map2 = new Map(lessons)
console.log(map2.entries());
