'use strict';

module.exports = class {
  constructor(val) {
    if (!val && val !==0) {
      return new Error('Value must be passed as argument');
    }
    this.val = val;
    this.next = null;
  };
};
