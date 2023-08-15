/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  _get(idx) {
    let curr = this.head;
    let count = 0;
    while (curr !== null && count != idx) {
      count += 1;
      curr = curr.next;
    }
    return curr;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    if (this.length === 0) {
      this.tail = this.head;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("no");
    }
    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("no");
    }
    let curr = this._get(idx);
    curr.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("no");
    }
    if (idx === 0) {
      return this.unshift(val);
    };
    if (idx === this.length) {
      return this.push(val);
    };
    let last = this._get(idx - 1);
    let newNode = new Node(val);
    newNode.next = last.next;
    last.next = newNode;

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("no");
    }
    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) {
        this.tail = this.head;
      }
      return val;
    }
    let last = this._get(idx - 1);
    if (idx === this.length - 1) {
      let val = last.next.val;
      last.next = null;
      this.tail = last;
      this.length -= 1;
      return val;
    }

    let val = last.next.val;
    last.next = last.next.next;
    this.length -= 1;
    return val;
  }


  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }
    let total = 0;
    let current = this.head;
    while (current) {
      total += current.val;
      current = current.next;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
