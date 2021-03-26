
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

- **`head`**_`: Node`_ - Link to the first node
> Time: **O(1)**
```js
doublyLinkedList.addFirst(1);
doublyLinkedList.addFirst(2);
doublyLinkedList.addFirst(3);

doublyLinkedList.head; //-> { value: 1, prev: null, next: Node }
```

- **`tail`**_`: Node`_ - Link to the last node
> Time: **O(1)**
```js
doublyLinkedList.addFirst(1);
doublyLinkedList.addFirst(2);
doublyLinkedList.addFirst(3);

doublyLinkedList.tail; //-> { value: 3, prev: Node, next: null }
```

- **`size`**_`: number`_ - Number of nodes in the list
> Time: **O(1)**
```js
doublyLinkedList.addFirst(1);
doublyLinkedList.addFirst(2);
doublyLinkedList.addFirst(3);

doublyLinkedList.size; //-> 3
```

- **`addFirst(value)`**_`: void`_ - Insert at the beginning of the list
> Time: **O(1)**

> Space: **O(1)**
```js
doublyLinkedList.addFirst({ name: "Yarik" });
doublyLinkedList.addFirst({ name: "Mike" });
doublyLinkedList.addFirst({ name: "Alice" });

doublyLinkedList.head; //-> { value: "Yarik", prev: null, next: Node }
```

- **`addLast(value | value[])`**_`: void`_ - Insert at the end of the list
> Time: **O(1)**

> Space: **O(1)**
```js
doublyLinkedList.addLast({ age: 12 });
doublyLinkedList.addLast({ age: 23 });
doublyLinkedList.addLast({ age: 45 });

doublyLinkedList.tail; //-> { value: { age: 45 }, prev: Node, next: null }
```

- **`removeFirst()`**_`: void`_ - Remove the first node
> Time: **O(1)**
```js
doublyLinkedList.addFirst("a");
doublyLinkedList.addFirst("b");
doublyLinkedList.addFirst("c");
doublyLinkedList.addFirst("d");

doublyLinkedList.removeFirst(); // Removed the first node with value "a"
doublyLinkedList.head.value; //-> "b"
```

- **`removeLast()`**_`: void`_ - Remove the last node
> Time: **O(1)**
```js
doublyLinkedList.addFirst("a");
doublyLinkedList.addFirst("b");
doublyLinkedList.addFirst("c");
doublyLinkedList.addFirst("d");

doublyLinkedList.removeLast(); // // Removed the last node with value "d"
doublyLinkedList.tail.value; //-> "c"
```

- **`remove(value: any)`**_`: boolean`_ - Remove a node that has this value
> Time: **O(n)** | **n** - number of nodes in the list

> Space: **O(1)**
```js
doublyLinkedList.addFirst("a");
doublyLinkedList.addFirst("b");
doublyLinkedList.addFirst("c");
doublyLinkedList.addFirst("d");

doublyLinkedList.remove("a"); //-> Returns `true` because it found a node with this value
doublyLinkedList.remove("f"); //-> Returns `false` because it can't find a node with this value
doublyLinkedList.forEach(v => console.log(v)); // "b" "c" "d"
```

- **`clear()`**_`: void`_ - Remove all nodes
> Time: **O(1)**
```js
doublyLinkedList.addFirst("a");
doublyLinkedList.addFirst("b");
doublyLinkedList.addFirst("c");
doublyLinkedList.addFirst("d");

doublyLinkedList.size; //-> 4
doublyLinkedList.head.value; //-> "a"
doublyLinkedList.tail.value; //-> "d"

doublyLinkedList.clear();

doublyLinkedList.size; //-> 0
doublyLinkedList.head; //-> null
doublyLinkedList.tail; //-> null
```

- **`contains(value: any)`**_`: boolean`_ - The method checks to see if a value is in the list
> Time: **O(n)** | **n** - number of nodes
```js
doublyLinkedList.addFirst("a");
doublyLinkedList.addFirst("b");
doublyLinkedList.addFirst("c");

doublyLinkedList.contains("a"); //-> true
doublyLinkedList.contains("h"); //-> false
```

- **`forEach(fn: value => void)`**_`: void`_ - The method executes a provided function once for each node's value.
> Time: **O(n)** | **n** - number of nodes
```js
doublyLinkedList.addFirst("a");
doublyLinkedList.addFirst("b");
doublyLinkedList.addFirst("c");
doublyLinkedList.forEach(char => console.log(char)); // "a" "b" "c"
```

- **`copyTo()`**_`: any[]`_ - Create an array from the linked list
> Time: **O(n)** | **n** - number of nodes

> Space: **O(n)** | **n** - number of nodes
```js
doublyLinkedList.addFirst(1);
doublyLinkedList.addFirst(2);
doublyLinkedList.addFirst(3);

const arr = doublyLinkedList.copyTo(); // [1, 2, 3]
const newArr = arr.map(n => n + 1); // [2, 3, 4]

doublyLinkedList.clear();
newArr.forEach(doublyLinkedList.addFirst);

doublyLinkedList.head.value; //-> 2
doublyLinkedList.tail.value; //-> 4
```
