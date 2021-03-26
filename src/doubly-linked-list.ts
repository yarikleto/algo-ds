export interface Node {
  value: any;
  next: Node | null;
  prev: Node | null;
}

export interface IDoublyLinkedList {
  head: Node | null;
  tail: Node | null;
  size: number;

  addFront: (value: any) => void;
  addEnd: (value: any) => void;
  removeFront: () => void;
  removeEnd: () => void;
  remove: (value: any) => boolean;
  clear: () => void;
  contains: (value: any) => boolean;
  forEach: (fn: ForEachFunction) => void;
  copyToArray: () => any[];
  isEmpty: () => boolean;
  addBefore: (valueBefore: any, value: any) => boolean;
  addAfter: (valueAfter: any, value: any) => boolean;
  getNodeByValue: (value: any) => Node | null;
}

type ForEachFunction = (value: any, index: number) => void;

export const createNode = (value: any): Node => ({
  value,
  next: null,
  prev: null,
});

export const createDoublyLinkedList = (): IDoublyLinkedList => {
  let head: Node | null = null;
  let tail: Node | null = null;
  let size = 0;

  const addFront = (value: any) => {
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

  const addEnd = (value: any) => {
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

  const removeFront = () => {
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

  const removeEnd = () => {
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

      if (!current.prev) removeFront();
      else if (!current.next) removeEnd();
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

  const getNodeByValue = (value: any): Node | null => {
    let current: Node | null = head;

    while (current != null) {
      if (Object.is(current.value, value)) {
        return current;
      }
      
      current = current.next;
    }

    return null;
  }

  const contains = (value: any): boolean => {
    return Boolean(getNodeByValue(value));
  };

  const forEach = (fn: ForEachFunction) => {
    let current: Node | null = head;
    let i = 0;

    while (current != null) {
      fn(current.value, i);
      current = current.next;
      i += 1;
    }
  };

  const copyToArray = (): any[] => {
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

  const isEmpty = (): boolean => {
    return Boolean(size === 0);
  }

  const addBefore = (valueBefore: any, value: any): boolean => {
    const nodeBefore = getNodeByValue(valueBefore);

    if (!nodeBefore) {
      return false;
    }

    if (nodeBefore === head) {
      addFront(value);
      return true;
    }

    const newNode: Node = createNode(value);

    nodeBefore.prev.next = newNode;
    newNode.prev = nodeBefore.prev;
    nodeBefore.prev = newNode;
    newNode.next = nodeBefore;
    size += 1;

    return true;
  }

  const addAfter = (valueAfter: any, value: any): boolean => {
    const nodeAfter = getNodeByValue(valueAfter);

    if (!nodeAfter) {
      return false;
    }

    if (nodeAfter === tail) {
      addEnd(value);
      return true;
    }

    const newNode: Node = createNode(value);

    nodeAfter.next.prev = newNode;
    newNode.next = nodeAfter.next;
    nodeAfter.next = newNode;
    newNode.prev = nodeAfter;
    size += 1;

    return true;
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
    addFront,
    addEnd,
    removeFront,
    removeEnd,
    remove,
    clear,
    contains,
    forEach,
    copyToArray,
    getNodeByValue,
    isEmpty,
    addBefore,
    addAfter,
    __proto__: null
  };
}

export default createDoublyLinkedList;

