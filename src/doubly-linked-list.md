
# `Doubly linked list`

In computer science, a doubly linked list is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains three fields: two link fields (references to the previous and to the next node in the sequence of nodes) and one data field.

![alt-текст][logo]

[logo]: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Doubly-linked-list.svg/1220px-Doubly-linked-list.svg.png

## Usage
```js
import { createDoublyLinkedList } from "algo-ds";

const doublyLinkedList = createDoublyLinkedList();
```

## API
```ts
interface Node {
  value: any;
  next: Node | null;
  prev: Node | null;
}
```

---

- **`head`**_`: Node | null`_ - A link to the first node
> Time: **O(1)**
```js
doublyLinkedList.addFront(1);
doublyLinkedList.addFront(2);
doublyLinkedList.addFront(3);

doublyLinkedList.head; //-> { value: 1, prev: null, next: Node }
```

---

- **`tail`**_`: Node | null`_ - A link to the last node
> Time: **O(1)**
```js
doublyLinkedList.addFront(1);
doublyLinkedList.addFront(2);
doublyLinkedList.addFront(3);

doublyLinkedList.tail; //-> { value: 3, prev: Node, next: null }
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

- **`addFront(value)`**_`: void`_ - Inserting an element at the front of the list.
> Time: **O(1)**

> Space: **O(1)**
```js
doublyLinkedList.addFront({ name: "Yarik" });
doublyLinkedList.addFront({ name: "Mike" });
doublyLinkedList.addFront({ name: "Alice" });

doublyLinkedList.head; //-> { value: "Yarik", prev: null, next: Node }
```

---

- **`addEnd(value)`**_`: void`_ - Inserting an element at the end of the list.
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

doublyLinkedList.removeFront(); // Removed the first node with value "a"
doublyLinkedList.head.value; //-> "b"
```

---

- **`removeEnd()`**_`: void`_ - Remove the last node
> Time: **O(1)**
```js
doublyLinkedList.addFront("a");
doublyLinkedList.addFront("b");
doublyLinkedList.addFront("c");
doublyLinkedList.addFront("d");

doublyLinkedList.removeEnd(); // // Removed the last node with value "d"
doublyLinkedList.tail.value; //-> "c"
```

---

- **`remove(value: any)`**_`: boolean`_ - Removing given value from the list
> Time: **O(n)** | **n** - number of nodes in the list

> Space: **O(1)**
```js
doublyLinkedList.addFront("a");
doublyLinkedList.addFront("b");
doublyLinkedList.addFront("c");
doublyLinkedList.addFront("d");

doublyLinkedList.remove("a"); //-> Returns `true` because it found a node with this value
doublyLinkedList.remove("f"); //-> Returns `false` because it can't find a node with this value
doublyLinkedList.forEach(v => console.log(v)); // "b" "c" "d"
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
doublyLinkedList.head.value; //-> "a"
doublyLinkedList.tail.value; //-> "d"

doublyLinkedList.clear();

doublyLinkedList.size; //-> 0
doublyLinkedList.head; //-> null
doublyLinkedList.tail; //-> null
```

---

- **`contains(value: any)`**_`: boolean`_ - The method checks to see if a value is in the list
> Time: **O(n)** | **n** - number of nodes
```js
doublyLinkedList.addFront("a");
doublyLinkedList.addFront("b");
doublyLinkedList.addFront("c");

doublyLinkedList.contains("a"); //-> true
doublyLinkedList.contains("h"); //-> false
```

---

- **`forEach(fn: (value: any, index: number) => void)`**_`: void`_ - The method executes a provided function once for each node's value.
> Time: **O(n)** | **n** - number of nodes
```js
doublyLinkedList.addFront("a");
doublyLinkedList.addFront("b");
doublyLinkedList.addFront("c");
doublyLinkedList.forEach((char, i) => console.log(`${i}:${char}`)); // "0:a" "1:b" "2:c"
```

---

- **`copyToArray()`**_`: any[]`_ - Create an array from the linked list
> Time: **O(n)** | **n** - number of nodes

> Space: **O(n)** | **n** - number of nodes
```js
doublyLinkedList.addFront(1);
doublyLinkedList.addFront(2);
doublyLinkedList.addFront(3);

const arr = doublyLinkedList.copyTo(); // [1, 2, 3]
const newArr = arr.map(n => n + 1); // [2, 3, 4]

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

- **`getNodeByValue(value: any)`**_`: Node | null`_ - Checking whether the list is empty
> Time: **O(n)** | **n** - number of nodes
```js
const person = { name: "Yarik" };
doublyLinkedList.getNodeByValue(person); // null
doublyLinkedList.addFront(person);
doublyLinkedList.getNodeByValue(person); // { value: { name: "Yarik" }, prev: null, next: null }
```

---

- **`addBefore(valueBefore: any, value: any)`**_`: boolean`_ - Inserting before given value
> Time: **O(n)** | **n** - number of nodes
```js
doublyLinkedList.addBefore(1, 2); // false
doublyLinkedList.addFront(1);
doublyLinkedList.addBefore(1, 2); // true
doublyLinkedList.copyToArray(); // [2, 1]
```

---

- **`addAfter(valueAfter: any, value: any)`**_`: boolean`_ - Inserting after given value
> Time: **O(n)** | **n** - number of nodes
```js
doublyLinkedList.addAfter(1, 2); // false
doublyLinkedList.addFront(1);
doublyLinkedList.addAfter(1, 2); // true
doublyLinkedList.copyToArray(); // [1, 2]
```

---
