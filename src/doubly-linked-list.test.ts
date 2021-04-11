import { createDoublyLinkedList, IDoublyLinkedList } from "./doubly-linked-list";

describe("The doubly linked list is working well", () => {
  let doublyLinkedList: IDoublyLinkedList<number>;

  beforeEach(() => {
    doublyLinkedList = createDoublyLinkedList();
  });

  test("'head' is ok", () => {
    expect(doublyLinkedList.head).toBeNull();
  });

  test("'tail' is ok", () => {
    expect(doublyLinkedList.tail).toBeNull();
  });

  test("'tail' is ok", () => {
    expect(doublyLinkedList.tail).toBeNull();
    doublyLinkedList.addFront(1);
    expect(doublyLinkedList.tail.value).toBe(1);
  });

  test("'addFront' is ok", () => {
    doublyLinkedList.addFront(1);
    doublyLinkedList.addFront(2);
    doublyLinkedList.addFront(3);

    expect(doublyLinkedList.size).toEqual(3);

    expect(doublyLinkedList.head.prev).toBeNull();
    expect(doublyLinkedList.head.value).toEqual(3);
    expect(doublyLinkedList.head.next.value).toEqual(2);

    expect(doublyLinkedList.tail.value).toEqual(1);
    expect(doublyLinkedList.tail.next).toBeNull();
    expect(doublyLinkedList.tail.prev.value).toEqual(2);
  });

  test("'addEnd' is ok", () => {
    doublyLinkedList.addEnd(1);
    doublyLinkedList.addEnd(2);
    doublyLinkedList.addEnd(3);

    expect(doublyLinkedList.size).toEqual(3);

    expect(doublyLinkedList.head.prev).toBeNull();
    expect(doublyLinkedList.head.value).toEqual(1);
    expect(doublyLinkedList.head.next.value).toEqual(2);

    expect(doublyLinkedList.tail.value).toEqual(3);
    expect(doublyLinkedList.tail.next).toBeNull();
    expect(doublyLinkedList.tail.prev.value).toEqual(2);
  });

  test("'removeFront' is ok", () => {
    doublyLinkedList.removeFront();
    doublyLinkedList.addFront(6);
    doublyLinkedList.removeFront();

    expect(doublyLinkedList.size).toEqual(0);
    expect(doublyLinkedList.head).toBeNull();
    expect(doublyLinkedList.tail).toBeNull();

    doublyLinkedList.addFront(1);
    doublyLinkedList.addFront(2);
    doublyLinkedList.addFront(3);
    doublyLinkedList.removeFront();

    expect(doublyLinkedList.size).toEqual(2);
    expect(doublyLinkedList.head.value).toEqual(2);
    expect(doublyLinkedList.head.next.value).toEqual(1);
    expect(doublyLinkedList.head.prev).toBeNull();
    expect(doublyLinkedList.contains(3)).toBeFalsy();
  });

  test("'removeEnd' is ok", () => {
    doublyLinkedList.removeEnd();
    doublyLinkedList.addEnd(1);
    doublyLinkedList.removeEnd();

    expect(doublyLinkedList.size).toEqual(0);
    expect(doublyLinkedList.head).toBeNull();
    expect(doublyLinkedList.tail).toBeNull();

    doublyLinkedList.addEnd(1);
    doublyLinkedList.addEnd(2);
    doublyLinkedList.addEnd(3);
    doublyLinkedList.removeEnd();

    expect(doublyLinkedList.tail.value).toEqual(2);
    expect(doublyLinkedList.tail.prev.value).toEqual(1);
    expect(doublyLinkedList.tail.next).toBeNull();
    expect(doublyLinkedList.contains(3)).toBeFalsy();
  });

  test("'contains' is ok", () => {
    doublyLinkedList.addEnd(1);
    doublyLinkedList.addEnd(2);

    expect(doublyLinkedList.contains(1)).toBeTruthy();
    expect(doublyLinkedList.contains(5)).toBeFalsy();
  });

  test("'remove' is ok", () => {
    doublyLinkedList.addEnd(1);
    doublyLinkedList.addEnd(2);
    doublyLinkedList.addEnd(3);
    doublyLinkedList.addEnd(4);

    expect(doublyLinkedList.remove(2)).toBeTruthy();
    expect(doublyLinkedList.remove(2)).toBeFalsy();
    expect(doublyLinkedList.size).toEqual(3);
    expect(doublyLinkedList.contains(2)).toBeFalsy();
    expect(doublyLinkedList.head.next.value).toEqual(3);
    expect(doublyLinkedList.tail.prev.value).toEqual(3);
    expect(doublyLinkedList.remove(1)).toBeTruthy();
    expect(doublyLinkedList.remove(4)).toBeTruthy();
    expect(doublyLinkedList.remove(3)).toBeTruthy();
    expect(doublyLinkedList.size).toEqual(0);
    expect(doublyLinkedList.head).toBeNull();
    expect(doublyLinkedList.tail).toBeNull();
  });

  test("'forEach' is ok", () => {
    doublyLinkedList.addFront(3);
    doublyLinkedList.addFront(2);
    doublyLinkedList.addFront(1);
    doublyLinkedList.addEnd(4);
    doublyLinkedList.addEnd(5);
    doublyLinkedList.addEnd(6);
    const mockCallback = jest.fn();
    const expectedParamsOfCalls = expect.arrayContaining([[1,0], [2,1], [3,2], [4,3], [5,4], [6,5]]);
    doublyLinkedList.forEach(mockCallback);

    expect(mockCallback.mock.calls.length).toBe(6);
    expect(mockCallback.mock.calls).toEqual(expectedParamsOfCalls);
  });

  test("'clear' is ok", () => {
    doublyLinkedList.addEnd(1);
    doublyLinkedList.addEnd(2);
    doublyLinkedList.addEnd(3);
    doublyLinkedList.clear();

    expect(doublyLinkedList.head).toBeNull();
    expect(doublyLinkedList.tail).toBeNull();
    expect(doublyLinkedList.size).toEqual(0);
  });

  test("'copyToArray' is ok", () => {
    doublyLinkedList.addFront(3);
    doublyLinkedList.addFront(2);
    doublyLinkedList.addFront(1);
    const arr = doublyLinkedList.copyToArray();

    expect(doublyLinkedList.size).toEqual(3);
    expect(arr.length).toEqual(3);
    expect(arr).toEqual(expect.arrayContaining([1, 2, 3]));
  });

  test("'getNodeByValue' is ok", () => {
    expect(doublyLinkedList.getNodeByValue(2)).toBeNull();
    doublyLinkedList.addFront(1);
    doublyLinkedList.addEnd(2);
    expect(doublyLinkedList.getNodeByValue(2)).toStrictEqual(doublyLinkedList.tail);
  });

  test("'isEmpty' is ok", () => {
    expect(doublyLinkedList.isEmpty()).toBeTruthy();
    doublyLinkedList.addFront(1);
    expect(doublyLinkedList.isEmpty()).toBeFalsy();
  });

  test("'addBefore' is ok", () => {
    expect(doublyLinkedList.addBefore(1, 2)).toBeFalsy();
    doublyLinkedList.addFront(1);
    expect(doublyLinkedList.addBefore(1, 2)).toBeTruthy();
    expect(doublyLinkedList.size).toBe(2);
    expect(doublyLinkedList.head.value).toBe(2);
    expect(doublyLinkedList.head.next.value).toBe(1);
    expect(doublyLinkedList.addBefore(1, 3)).toBeTruthy();
    expect(doublyLinkedList.size).toBe(3);
    expect(doublyLinkedList.head.next.value).toBe(3);
    expect(doublyLinkedList.tail.prev.value).toBe(3);
  });

  test("'addAfter' is ok", () => {
    expect(doublyLinkedList.addAfter(1, 2)).toBeFalsy();
    doublyLinkedList.addEnd(1);
    expect(doublyLinkedList.addAfter(1, 2)).toBeTruthy();
    expect(doublyLinkedList.size).toBe(2);
    expect(doublyLinkedList.head.value).toBe(1);
    expect(doublyLinkedList.head.next.value).toBe(2);
    expect(doublyLinkedList.addAfter(1, 3)).toBeTruthy();
    expect(doublyLinkedList.size).toBe(3);
    expect(doublyLinkedList.head.next.value).toBe(3);
    expect(doublyLinkedList.tail.prev.value).toBe(3);
  });
});