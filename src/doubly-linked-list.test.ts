import createDoublyLinkedList from "./doubly-linked-list";

describe("The doubly linked list is working well", () => {
  let doublyLinkedList;

  beforeEach(() => {
    doublyLinkedList = createDoublyLinkedList();
  });

  test("'addFirst' is ok", () => {
    doublyLinkedList.addFirst(4);
    doublyLinkedList.addFirst([1,2,3]);

    expect(doublyLinkedList.size).toEqual(4);
    expect(doublyLinkedList.head.prev).toBeNull();
    expect(doublyLinkedList.head.value).toEqual(1);
    expect(doublyLinkedList.tail.value).toEqual(4);
    expect(doublyLinkedList.tail.next).toBeNull();
  });

  test("'addLast' is ok", () => {
    doublyLinkedList.addLast(6);
    doublyLinkedList.addLast([7,8,9]);

    expect(doublyLinkedList.size).toEqual(4);
    expect(doublyLinkedList.tail.value).toEqual(9);
  });

  test("'removeFirst' is ok", () => {
    doublyLinkedList.removeFirst();
    doublyLinkedList.addFirst(6);
    doublyLinkedList.removeFirst();

    expect(doublyLinkedList.size).toEqual(0);
    expect(doublyLinkedList.head).toBeNull();
    expect(doublyLinkedList.tail).toBeNull();

    doublyLinkedList.addFirst([1, 2, 3]);
    doublyLinkedList.removeFirst();

    expect(doublyLinkedList.head.value).toEqual(2);
    expect(doublyLinkedList.head.next.value).toEqual(3);
    expect(doublyLinkedList.head.prev).toBeNull();
  });

  test("'removeLast' is ok", () => {
    doublyLinkedList.removeLast();
    doublyLinkedList.addLast(8);
    doublyLinkedList.removeLast();

    expect(doublyLinkedList.size).toEqual(0);
    expect(doublyLinkedList.head).toBeNull();
    expect(doublyLinkedList.tail).toBeNull();

    doublyLinkedList.addFirst([1, 2, 3]);
    doublyLinkedList.removeLast();

    expect(doublyLinkedList.tail.value).toEqual(2);
    expect(doublyLinkedList.tail.prev.value).toEqual(1);
    expect(doublyLinkedList.tail.next).toBeNull();
  });

  test("'contains' is ok", () => {
    doublyLinkedList.addFirst([1, 2]);

    expect(doublyLinkedList.contains(1)).toBeTruthy();
    expect(doublyLinkedList.contains(5)).toBeFalsy();
  });

  test("'remove' is ok", () => {
    doublyLinkedList.addFirst([2, 4, 5, 6, 88]);

    expect(doublyLinkedList.remove(2)).toBeTruthy();
    expect(doublyLinkedList.remove(88)).toBeTruthy();
    expect(doublyLinkedList.remove(5)).toBeTruthy();
    expect(doublyLinkedList.remove(101)).toBeFalsy();
    expect(doublyLinkedList.contains(2)).toBeFalsy();
    expect(doublyLinkedList.contains(5)).toBeFalsy();
    expect(doublyLinkedList.contains(88)).toBeFalsy();
    expect(doublyLinkedList.size).toEqual(2);
  });

  test("'forEach' is ok", () => {
    doublyLinkedList.addFirst([11, 2, 3]);
    doublyLinkedList.addLast([4, 6, 8]);
    const mockCallback = jest.fn();
    const expectedParamsOfCalls = expect.arrayContaining([[11], [2], [3], [4], [6], [8]]);
    doublyLinkedList.forEach(mockCallback);

    expect(mockCallback.mock.calls.length).toBe(6);
    expect(mockCallback.mock.calls).toEqual(expectedParamsOfCalls);
  });

  test("'clear' is ok", () => {
    doublyLinkedList.addLast([4, 6, 8]);
    doublyLinkedList.clear();

    expect(doublyLinkedList.head).toBeNull();
    expect(doublyLinkedList.tail).toBeNull();
    expect(doublyLinkedList.size).toEqual(0);
  });

  test("'copyTo' is ok", () => {
    doublyLinkedList.addFirst([1,2,3,4]);
    const arr = doublyLinkedList.copyTo();

    expect(doublyLinkedList.size).toEqual(4);
    expect(arr.length).toEqual(4);
    expect(arr).toEqual(expect.arrayContaining([1, 2, 3, 4]));
  });
});