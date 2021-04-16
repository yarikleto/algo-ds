
# `Doubly linked list`

In computer science, a doubly linked list is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains three fields: two link fields (references to the previous and to the next node in the sequence of nodes) and one data field.

![alt-текст][logo]

[logo]: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Doubly-linked-list.svg/1220px-Doubly-linked-list.svg.png

## Usage

#### JS Example
```javascript
import { createDoublyLinkedList } from "algo-ds";

const doublyLinkedList = createDoublyLinkedList();
doublyLinkedList.addFront("Yarik");
doublyLinkedList.addFront(10);
```

#### TS Example
```typescript
import { createDoublyLinkedList } from "algo-ds";

type NodeValueType = number | string;

const doublyLinkedList = createDoublyLinkedList<NodeValueType>();
doublyLinkedList.addFront("Yarik");
doublyLinkedList.addFront(10);
doublyLinkedList.addFront(true); // Type error
```

## API
```ts
interface Node<NodeValueType> {
  value: NodeValueType;
  next: Node | null;
  prev: Node | null;
}

interface IDoublyLinkedList<NodeValueType> {
  head: Node<NodeValueType> | null;
  tail: Node<NodeValueType> | null;
  size: number;

  addFront: (value: NodeValueType) => void;
  addEnd: (value: NodeValueType) => void;
  removeFront: () => void;
  removeEnd: () => void;
  remove: (value: NodeValueType) => boolean;
  clear: () => void;
  contains: (value: NodeValueType) => boolean;
  forEach: (fn: ForEachFunction<NodeValueType>) => void;
  copyToArray: () => NodeValueType[];
  isEmpty: () => boolean;
  addBefore: (valueBefore: NodeValueType, value: NodeValueType) => boolean;
  addAfter: (valueAfter: NodeValueType, value: NodeValueType) => boolean;
  getNodeByValue: (value: NodeValueType) => Node<NodeValueType> | null;
}
```

---

- **`head`**_`: Node<NodeValueType> | null`_ - A link to the first node
> Time: **O(1)**
```js
doublyLinkedList.addFront(1);
doublyLinkedList.addFront(2);
doublyLinkedList.addFront(3);

doublyLinkedList.head; //-> { value: 3, prev: null, next: Node }
```

---

- **`tail`**_`: Node<NodeValueType> | null`_ - A link to the last node
> Time: **O(1)**
```js
doublyLinkedList.addFront(1);
doublyLinkedList.addFront(2);
doublyLinkedList.addFront(3);

doublyLinkedList.tail; //-> { value: 1, prev: Node, next: null }
```

---

- **`size`**_`: number`_ - Number of nodes in the list
> Time: **O(1)**
```js
doublyLinkedList.addFront(1);
doublyLinkedList.addFront(2);
doublyLinkedList.addFront(3);

doublyLinkedList.size; //-> 3
```

---

- **`addFront(value: NodeValueType)`**_`: void`_ - Inserting an element at the front of the list.
> Time: **O(1)**

> Space: **O(1)**
```js
doublyLinkedList.addFront({ name: "Yarik" });
doublyLinkedList.addFront({ name: "Mike" });
doublyLinkedList.addFront({ name: "Alice" });

doublyLinkedList.head; //-> { value: "Alice", prev: null, next: Node }
```

---

- **`addEnd(value: NodeValueType)`**_`: void`_ - Inserting an element at the end of the list.
> Time: **O(1)**

> Space: **O(1)**
```js
doublyLinkedList.addEnd({ age: 12 });
doublyLinkedList.addEnd({ age: 23 });
doublyLinkedList.addEnd({ age: 45 });

doublyLinkedList.tail; //-> { value: { age: 45 }, prev: Node, next: null }
```

---

- **`removeFront()`**_`: void`_ - Remove the first node
> Time: **O(1)**
```js
doublyLinkedList.addFront("a");
doublyLinkedList.addFront("b");
doublyLinkedList.addFront("c");
doublyLinkedList.addFront("d");

doublyLinkedList.removeFront(); // Removed the first node with value "d"
doublyLinkedList.head.value; //-> "c"
```

---

- **`removeEnd()`**_`: void`_ - Remove the last node
> Time: **O(1)**
```js
doublyLinkedList.addFront("a");
doublyLinkedList.addFront("b");
doublyLinkedList.addFront("c");
doublyLinkedList.addFront("d");

doublyLinkedList.removeEnd(); // // Removed the last node with value "a"
doublyLinkedList.tail.value; //-> "b"
```

---

- **`remove(value: NodeValueType)`**_`: boolean`_ - Removing given value from the list
> Time: **O(n)** | **n** - number of nodes in the list

> Space: **O(1)**
```js
doublyLinkedList.addFront("a");
doublyLinkedList.addFront("b");
doublyLinkedList.addFront("c");
doublyLinkedList.addFront("d");

doublyLinkedList.remove("a"); //-> Returns `true` because it found a node with this value
doublyLinkedList.remove("f"); //-> Returns `false` because it can't find a node with this value
doublyLinkedList.forEach(v => console.log(v)); // "d" "c" "b"
```

---

- **`clear()`**_`: void`_ - Remove all nodes
> Time: **O(1)**
```js
doublyLinkedList.addFront("a");
doublyLinkedList.addFront("b");
doublyLinkedList.addFront("c");
doublyLinkedList.addFront("d");

doublyLinkedList.size; //-> 4
doublyLinkedList.head.value; //-> "d"
doublyLinkedList.tail.value; //-> "a"

doublyLinkedList.clear();

doublyLinkedList.size; //-> 0
doublyLinkedList.head; //-> null
doublyLinkedList.tail; //-> null
```

---

- **`contains(value: NodeValueType)`**_`: boolean`_ - The method checks to see if a value is in the list
> Time: **O(n)** | **n** - number of nodes
```js
doublyLinkedList.addFront("a");
doublyLinkedList.addFront("b");
doublyLinkedList.addFront("c");

doublyLinkedList.contains("a"); //-> true
doublyLinkedList.contains("h"); //-> false
```

---

- **`forEach(fn: (value: NodeValueType, index: number) => void)`**_`: void`_ - The method executes a provided function once for each node's value.
> Time: **O(n)** | **n** - number of nodes
```js
doublyLinkedList.addFront("a");
doublyLinkedList.addFront("b");
doublyLinkedList.addFront("c");
doublyLinkedList.forEach((char, i) => console.log(`${i}:${char}`)); // "0:c" "1:b" "2:a"
```

---

- **`copyToArray()`**_`: NodeValueType[]`_ - Create an array from the linked list
> Time: **O(n)** | **n** - number of nodes

> Space: **O(n)** | **n** - number of nodes
```js
doublyLinkedList.addFront(1);
doublyLinkedList.addFront(2);
doublyLinkedList.addFront(3);

const arr = doublyLinkedList.copyToArray(); // [3, 2, 1]
const newArr = arr.map(n => n + 1); // [4, 3, 2]

doublyLinkedList.clear();
newArr.forEach(doublyLinkedList.addFront);

doublyLinkedList.head.value; //-> 2
doublyLinkedList.tail.value; //-> 4
```

---

- **`isEmpty()`**_`: boolean`_ - Checking whether the list is empty
> Time: **O(1)**
```js
doublyLinkedList.isEmpty(); // true
doublyLinkedList.addFront(1);
doublyLinkedList.isEmpty(); // false
```

---

- **`getNodeByValue(value: NodeValueType)`**_`: Node<NodeValueType> | null`_ - Returns a node of value
> Time: **O(n)** | **n** - number of nodes
```js
const person = { name: "Yarik" };
doublyLinkedList.getNodeByValue(person); // null
doublyLinkedList.addFront(person);
doublyLinkedList.getNodeByValue(person); // { value: { name: "Yarik" }, prev: null, next: null }
```

---

- **`addBefore(valueBefore: NodeValueType, value: NodeValueType)`**_`: boolean`_ - Inserting before given value
> Time: **O(n)** | **n** - number of nodes
```js
doublyLinkedList.addBefore(1, 2); // false
doublyLinkedList.addFront(1);
doublyLinkedList.addBefore(1, 2); // true
doublyLinkedList.copyToArray(); // [2, 1]
```

---

- **`addAfter(valueAfter: NodeValueType, value: NodeValueType)`**_`: boolean`_ - Inserting after given value
> Time: **O(n)** | **n** - number of nodes
```js
doublyLinkedList.addAfter(1, 2); // false
doublyLinkedList.addFront(1);
doublyLinkedList.addAfter(1, 2); // true
doublyLinkedList.copyToArray(); // [1, 2]
```

---
