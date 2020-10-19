
# `Doubly linked list`

In computer science, a doubly linked list is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains three fields: two link fields (references to the previous and to the next node in the sequence of nodes) and one data field.

![alt-текст][logo]

[logo]: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Doubly-linked-list.svg/1220px-Doubly-linked-list.svg.png

## Usage
```js
import createDoublyLinkedList from "./doubly-linked-list";

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

- **`head`**_`: Node`_ - todo
```js
doublyLinkedList.addFirst([1, 2, 3]);
doublyLinkedList.head; //-> { value: 1, prev: null, next: {...} }
```

- **`tail`**_`: Node`_ - todo
```js
doublyLinkedList.addFirst([1, 2, 3]);
doublyLinkedList.tail; //-> { value: 3, prev: {...}, next: null }
```

- **`size`**_`: number`_ - todo
```js
doublyLinkedList.addFirst([1, 2, 3]);
doublyLinkedList.size; //-> 3
```

- **`addFirst(value | value[])`**_`: void`_ - todo
```js
doublyLinkedList.addFirst({ name: "Yarik" });
doublyLinkedList.addFirst([1, 2, 3]);
doublyLinkedList.size; //-> 4
```

- **`addLast(value | value[])`**_`: void`_ - todo
```js
doublyLinkedList.addLast("apple");
doublyLinkedList.addLast([{a: 1}, {b: 2}]);
```

- **`removeFirst()`**_`: void`_ - todo
```js
doublyLinkedList.addFirst(["a", "b", "c", "d"]);
doublyLinkedList.removeFirst();
doublyLinkedList.head.value; //-> "b"
```

- **`removeLast()`**_`: void`_ - todo
```js
doublyLinkedList.addFirst(["a", "b", "c", "d"]);
doublyLinkedList.removeLast();
doublyLinkedList.tail.value; //-> "c"
```

- **`remove(value: any)`**_`: boolean`_ - todo
```js
doublyLinkedList.addFirst(["a", "b", "c", "d"]);
doublyLinkedList.remove("a"); //-> true
doublyLinkedList.remove("f"); //-> false
doublyLinkedList.forEach(v => console.log(v)); // "b" "c" "d"
```

- **`clear()`**_`: void`_ - todo
```js
doublyLinkedList.addFirst(["a", "b", "c", "d"]);
doublyLinkedList.size; //-> 4
doublyLinkedList.head.value; //-> "a"
doublyLinkedList.tail.value; //-> "d"
doublyLinkedList.clear();
doublyLinkedList.size; //-> 0
doublyLinkedList.head; //-> null
doublyLinkedList.tail; //-> null
```

- **`contains(value: any)`**_`: boolean`_ - todo
```js
doublyLinkedList.addFirst([1, 2, 3]);
doublyLinkedList.contains(1); //-> true
doublyLinkedList.contains(7); //-> false
```

- **`forEach(fn: value => void)`**_`: void`_ - todo
```js
doublyLinkedList.addFirst([1, 2, 3]);
doublyLinkedList.forEach(v => console.log(v)); // 1 2 3
```

- **`copyTo()`**_`: any[]`_ - todo
```js
doublyLinkedList.addFirst([1, 2, 3]);
doublyLinkedList.copyTo(); //-> [1, 2, 3]
```
