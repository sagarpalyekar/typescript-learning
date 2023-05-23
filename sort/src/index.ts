import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumberCollection";
import { StringCollection } from "./StringCollection";

const numberCollection = new NumbersCollection([10, 3, -5, 0, 5]);
numberCollection.sort();
console.log(numberCollection.data);

const charCollection = new CharacterCollection("x-+Xaaa");
charCollection.sort();
console.log(charCollection.data);

const stringCollection = new StringCollection([
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

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(0);
console.log("Print: Linked List");
linkedList.print();

linkedList.sort();
linkedList.print();
