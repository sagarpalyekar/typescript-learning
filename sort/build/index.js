"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterCollection_1 = require("./CharacterCollection");
const LinkedList_1 = require("./LinkedList");
const NumberCollection_1 = require("./NumberCollection");
const StringCollection_1 = require("./StringCollection");
const numberCollection = new NumberCollection_1.NumbersCollection([10, 3, -5, 0, 5]);
numberCollection.sort();
console.log(numberCollection.data);
const charCollection = new CharacterCollection_1.CharacterCollection("x-+Xaaa");
charCollection.sort();
console.log(charCollection.data);
const stringCollection = new StringCollection_1.StringCollection([
    "10",
    "3",
    "aaa",
    "Aa",
    "Sagar",
    "-5",
    "0",
    "5",
]);
stringCollection.sort();
console.log(stringCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(0);
console.log("Print: Linked List");
linkedList.print();
linkedList.sort();
linkedList.print();
