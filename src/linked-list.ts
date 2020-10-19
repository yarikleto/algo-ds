interface Node {
  value: any;
  next: Node | null;
  prev: Node | null;
}

type ForEachFunction = (value: any) => void;

const createNode = (value: any): Node => ({
  value,
  next: null,
  prev: null,
});

const createLinkedList = () => {
  let head: Node | null = null;
  let tail: Node | null = null;
  let size = 0;

  const addFirst = (value: any | any[]) => {
    if (Array.isArray(value)) {
      value.reduceRight((_, v) => addFirst(v), null);
      return;
    }

    const node: Node = createNode(value);

    if (head == null) {
      head = node;
      tail = node;
    } else {
      head.prev = node;
      node.next = head;
      head = node;
    }

    size += 1;
  };

  const addLast = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(addLast);
      return;
    }

    const node: Node = createNode(value);

    if (head == null || tail == null) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      node.prev = tail;
      tail = node;
    }

    size += 1;
  };

  const removeFirst = () => {
    if (!head) return;

    if (!head.next) {
      head = null;
      tail = null;
    } else {
      head.next.prev = null;
      head = head.next;
    }

    size -= 1;
  };

  const removeLast = () => {
    if (!tail) return;

    if (!tail.prev) {
      head = null;
      tail = null;
    } else {
      tail.prev.next = null;
      tail = tail.prev;
    }

    size -= 1;
  };

  const remove = (value: any): boolean => {
    let current: Node | null = head;

    while (current != null) {
      if (!Object.is(current.value, value)) {
        current = current.next;
        continue;
      }

      if (!current.prev) removeFirst();
      else if (!current.next) removeLast();
      else {
        current.prev.next = current.next;
        current.next.prev = current.prev;
        size -= 1;
      }

      return true;
    }

    return false;
  };

  const clear = () => {
    head = null;
    tail = null;
    size = 0;
  };

  const contains = (value: any): boolean => {
    let current: Node | null = head;

    while (current != null) {
      if (!Object.is(current.value, value)) {
        current = current.next;
        continue;
      }

      return true;
    }

    return false;
  };

  const forEach = (fn: ForEachFunction) => {
    let current: Node | null = head;

    while (current != null) {
      fn(current.value);
      current = current.next;
    }
  };

  const copyTo = () => {
    let current: Node | null = head;
    let index = 0;
    const result = Array(size);

    while (current != null) {
      result[index] = current.value;
      current = current.next;
      index += 1;
    }

    return result;
  }

  return {
    get head() {
      return head;
    },
    get tail() {
      return tail;
    },
    get size() {
      return size;
    },
    addFirst,
    addLast,
    removeFirst,
    removeLast,
    remove,
    clear,
    contains,
    forEach,
    copyTo,
    __proto__: null
  };
}

export default createLinkedList;

