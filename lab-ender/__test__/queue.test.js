'use strict';

const Queue = require('../lib/queue');
require('jest');

describe('Queue Data Structure Module', function () {
  beforeEach(() => this.queue = new Queue());

  describe('default properties', () => {
    it('should create a new instance of a Queue', () => {
      expect(this.queue).toBeInstanceOf(Queue);
    });
    it('should have a default val of null assigned to the front property', () => {
      expect(this.queue.front).toBeNull();
    });
    it('should have a default val of null assigned to the back property', () => {
      expect(this.queue.back).toBeNull();
    });
    it('should have a default val of 0 assigned to the size property', () => {
      expect(this.queue.size).toEqual(0);
    });
    it('should have a maxSize property with a default val of 1048', () => {
      expect(this.queue.maxSize).toEqual(1048);
    });
  });
  describe('.enqueue()', () => {
    it('should have a size of 20', () => {
      [...Array(20)].map((e, i) => this.queue.enqueue(~~(Math.random() * i)));
      expect(this.queue.size).toEqual(20);
    });
    it('should add a new node with the val of 1 to the back/front of an empty queue', () => {
      this.queue.enqueue(1);
      expect(this.queue.front.val).toEqual(1);
      expect(this.queue.back.val).toEqual(1);
    });
    it('should add a new node with the val of 1 to the back of a queue with 1 existing node (val of 0)', () => {
      this.queue.enqueue(0);
      this.queue.enqueue(1);
      expect(this.queue.front.val).toEqual(0);
      expect(this.queue.back.val).toEqual(1);
    });
    it('should throw an error when maxSize is met', () => {
      expect(() => {
        for (let i = 0; i <= 1048; i++) {
          this.queue.enqueue(2);
        }
      }).toThrow(/overflow/);
    });
  });
  describe('.dequeue()', () => {
    it('should remove the front most node from the queue', () => {
      this.queue.enqueue(0);
      this.queue.enqueue(1);
      expect(this.queue.front.val).toEqual(0);
      expect(this.queue.dequeue().val).toEqual(0);
      expect(this.queue.front.val).toEqual(1);
    });
    it('should remove the only node from the queue, setting front and back to null', () => {
      this.queue.enqueue(0);
      expect(this.queue.front.val).toEqual(0);
      this.queue.dequeue();
      expect(this.queue.front).toBeNull();
      expect(this.queue.back).toBeNull();
    });
    it('should throw an error if queue is empty', () => {
      expect(this.queue.front).toBeNull();
      expect(this.queue.back).toBeNull();
      expect(() => {
        this.queue.dequeue();
      }).toThrow(/underflow/);
    });
  });
});
