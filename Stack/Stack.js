class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.unshift(item);
  }

  pop(item) {
    if (this.stack.length > 0) {
      return this.stack.shift();
    }
    return undefined;
  }

  peek(item) {
    if (this.stack.length > 0) {
      return this.stack[0];
    }
    return undefined;
  }

  size() {
    return this.stack.length;
  }
}

module.exports = Stack;
