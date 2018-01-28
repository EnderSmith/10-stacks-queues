'use strict';

const Node = require('../models/node');

module.exports = class {
  constructor(maxSize=1048) {
    this.front = null;
    this.back = null;
    this.maxSize = maxSize;
    this.size = 0;
  }
  enqueue(val) {
    if(this.size === this.maxSize) {
      throw new Error('Queue overflow!');
    }

    let node = new Node(val);

    node.next = null;
    this.front = this.front || node;
    if (this.back) {
      this.back.next = node;
    }
    this.back = node;
    this.size++;
    return this.front;
  }

  dequeue() {
    if(this.size === 0) {
      throw new Error('Stack underflow!');
    }

    let temp = this.front;

    this.front = temp.next;
    if (!this.front) {
      this.back = null;
    }
    temp.next = null;
    this.size--;

    return temp;
  }
};
