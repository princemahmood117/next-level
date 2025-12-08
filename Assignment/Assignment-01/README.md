
<!-- ? Answer to the question no. 02 -->
Question : What is the use of the `keyof` keyword in TypeScript? Provide an example.

Answer =>

keyof : 'keyof' হলো টাইপস্ক্রিপ্ট এর একটি টাইপ অপারেটর যা কোনো অবজেক্ট টাইপ এর সকল key গুলোকে একত্রিত করে।

সাধারণত অবজেট key-value pair আকারে থাকে, যা টাইপ চেকিং এও ব্যবহার হয়। সেক্ষেত্রে কোনো অবজেক্ট এ অনেকগুলো প্রোপার্টিস থাকতে পারে যা একটা একটা করে টাইপ ডিফাইন করা কষ্টকর হয়ে যায়। সেক্ষেত্রে 'keyof' keyword অবজেট এর 'key' গুলো কে একত্রিত করার মাধমে  প্রোপার্টি অ্যাক্সেস টাইপ-সেইফ হয় এবং একই সাথে কোডিং কে সহজ করে।

উদাহরন ঃ 

type User = {
    id: number;
    name : string;
    isAvailable : boolean;
    email : string;
    discount? : number;
    quantity : number;
}

<!-- 'keyof' keyword ছাড়া-->

getInfo = (keys : id|name|isAvailable|email|discount|quantity) => {
    return "hello typescript"
} 

<!-- 'keyof' keyword ব্যবহার করে-->
getInfo = (keys : keyof User) => {
 return "hello typescript from keyof keyword"
} 

এক্ষেত্রে দেখা যাচ্ছে একটি একটি করে প্রোপার্টি এক্সেস করে key কে ডিফাইন করার চাইতে keyof ব্যবহার করে একবারেই সব গুলো key এর টাইপ বলে দেওয়া যাচ্ছে।






<!-- ? Answer to the question no. 03 -->
Question : Explain the difference between `any`, `unknown`, and `never` types in TypeScript.
Answer => টাইপস্ক্রিপ্ট এর বিভিন্ন ধরনের types এর মধে স্পেশাল হচ্ছে any, unknwon, never

(1) any : 'any' টাইপ ব্যবহার করলে টাইপস্ক্রিপ্ট আর কোনো ধরনের টাইপ চেক করে না যা খুবই ঝুকিপূর্ন। কারন, যেকোনো টাইপ এর ভ্যালু ই এসাইন করা যাবে যা আসলে কোনো প্রোজেক্ট এর জন্য এরর (error) ডেকে আনবে। উদাহরন দিলে বিষয়টি ভালো বুঝা যাবে ঃ

let age : any
age = 10;
age = '10'

এখানে age এর টাইপ হলো any এতে করে 'age' ভেরিয়েবল এ যেকোনো ধরনের ভ্যালু এসাইন করা যাবে। হোক তা স্ট্রিং অথবা নাম্বার। কিন্তু কোনো ইউজার তার নামের যায়গায় নাম্বার দিলে তা তো ঠিক ইনপুট হবে না, একই ভাবে নাম্বার এর স্থানে কোনো স্ট্রিং ভ্যালু দিলেও হবে না। তাই 'any' টাইপ ব্যবহার করলে নরমাল জাভাস্ক্রিপ্টের মত ই ব্যবহার করবে এবং নাম্বারের ইনপুটে স্ট্রিং অথবা স্ট্রিং এর ইনপুটে নাম্বার দিলেও কোনো এরর দিবে না যাতে করে ফাইনাল আউটপুট এ ভুল হবে। 


(2) unknown : "unknown" টাইপে চাইলে যেকোনো টাইপ রাখা যায় যেমন string | number | object কিন্তু ভ্যালু ব্যবহারের আগে অবশ্যই জোরপূর্বক চেক করে নিতে হবে "typeof" keyword এর মাধমে। উদাহরন দেওয়া যাক-

let data : unknown;
data = 'my name is iftekhar';
data.toUpperCase() ;

এখানে কোড লিখার সময় ই error দিবে কারন টাইপস্ক্রিপ্ট জানে না এই data ভ্যারিয়েবলে আসলেই কি toUpperCase() চালানো যাবে কিনা। তাই আগে টাইপ চেক করে নিতে হবে যে এই ভ্যারিয়েবল এর টাইপ কি ধরনের যার উপর ভিত্তি করে আমাকে বিল্ট-ইন-মেথড ব্যবহার করতে অনুমতি দিবে

correction code :

let data : unknown;
data = 'my name is iftekhat';
if(typeof data === 'string') {
    console.log(data.toUpperCase());
} 


(3) never : never এমন একটি টাইপ যা প্রকৃতপক্ষে কোনো ভ্যালু ই ধারন করবে না। এটি আসলে ব্যবহার হয়ে থাকে যদি কোনো ফাংশন যদি কিছু রিটার্ন না করে এবং এমন কিছু যা কখনোই সম্ভব না। উদাহরন দেওয়া যাক -

const throwError = (message: string) : never => {
  throw new Error(message);
}

এই ফাংশনটির টাইপ হলো never যার অর্থ হলো এই ফাংশন কখনোই কোনো ভ্যালু রিটার্ন করবে না কারন এই ফাংশন শেষ ই হবে না।


