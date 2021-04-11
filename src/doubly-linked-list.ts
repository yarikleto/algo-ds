export interface Node<NodeValueType> {
  value: NodeValueType;
  next: Node<NodeValueType> | null;
  prev: Node<NodeValueType> | null;
}

export interface IDoublyLinkedList<NodeValueType> {
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

  __proto__: null;
}

export type ForEachFunction<NodeValueType> = (value: NodeValueType, index: number) => void;

export const createNode = <NodeValueType>(value: NodeValueType): Node<NodeValueType> => ({
  value,
  next: null,
  prev: null,
});

export const createDoublyLinkedList = <NodeValueType>(): IDoublyLinkedList<NodeValueType> => {
  let head: Node<NodeValueType> | null = null;
  let tail: Node<NodeValueType> | null = null;
  let size = 0;

  const addFront = (value: NodeValueType) => {
    const node: Node<NodeValueType> = createNode(value);

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

  const addEnd = (value: NodeValueType) => {
    const node: Node<NodeValueType> = createNode<NodeValueType>(value);

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

  const remove = (value: NodeValueType): boolean => {
    let current: Node<NodeValueType> | null = head;

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

  const getNodeByValue = (value: NodeValueType): Node<NodeValueType> | null => {
    let current: Node<NodeValueType> | null = head;

    while (current != null) {
      if (Object.is(current.value, value)) {
        return current;
      }
      
      current = current.next;
    }

    return null;
  }

  const contains = (value: NodeValueType): boolean => {
    return Boolean(getNodeByValue(value));
  };

  const forEach = (fn: ForEachFunction<NodeValueType>) => {
    let current: Node<NodeValueType> | null = head;
    let i = 0;

    while (current != null) {
      fn(current.value, i);
      current = current.next;
      i += 1;
    }
  };

  const copyToArray = (): NodeValueType[] => {
    let current: Node<NodeValueType> | null = head;
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

  const addBefore = (valueBefore: NodeValueType, value: NodeValueType): boolean => {
    const nodeBefore = getNodeByValue(valueBefore);

    if (!nodeBefore) {
      return false;
    }

    if (nodeBefore === head) {
      addFront(value);
      return true;
    }

    const newNode: Node<NodeValueType> = createNode(value);

    nodeBefore!.prev!.next = newNode;
    newNode.prev = nodeBefore.prev;
    nodeBefore.prev = newNode;
    newNode.next = nodeBefore;
    size += 1;

    return true;
  }

  const addAfter = (valueAfter: NodeValueType, value: NodeValueType): boolean => {
    const nodeAfter = getNodeByValue(valueAfter);

    if (!nodeAfter) {
      return false;
    }

    if (nodeAfter === tail) {
      addEnd(value);
      return true;
    }

    const newNode: Node<NodeValueType> = createNode(value);

    nodeAfter!.next!.prev = newNode;
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

    __proto__: null // Delete inherited fields from proto
  };
}

export default createDoublyLinkedList;

