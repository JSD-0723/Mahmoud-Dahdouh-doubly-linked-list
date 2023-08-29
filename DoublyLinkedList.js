import Node from "./Node.js"

export default class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // push
  // add node to the end of the list
  push(val) {
    // Check if there is a value
    if (!val) {
      console.error("Please enter a value")
      return
    }

    // Create a new node
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
  }

  // pop
  // remove the last node
  pop() {
    // check if there is a value
    if (!this.head) {
      console.log("There is no value to pop")
      return
    }

    const temp = this.tail
    // remove last node
    // check if there is only one node
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.tail = temp.prev
      this.tail.next = null
      temp.prev = null
    }
    this.length--
  }

  // shift
  // remove the first node
  shift() {
    // check if there is a value
    if (!this.head) {
      console.log("There is no value to shift")
      return
    }

    const temp = this.head
    // remove first node
    // check if there is only one node
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.prev = null
      temp.next = null
    }
    this.length--
  }

  // unshift
  // add a node to the beginning of the list
  unshift(val) {
    // Check if there is a value
    if (!val) {
      console.error("Please enter a value")
      return
    }

    // Create a new node
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
  }

  // get
  // get a node at a specific position
  get(index) {
    // Check if list is empty
    if (!this.head) {
      console.error("List is empty")
      return
    }

    // Check if there is a value
    if (!index && index !== 0) {
      console.error("Please enter an index")
      return
    }

    // Check if the index is valid
    if (index < 0 || index >= this.length) {
      console.error("Please enter a valid index")
      return
    }

    // Get the node at the index
    let current = this.head
    let count = 0
    while (count < index) {
      current = current.next
      count++
    }
    return current
  }

  // set
  // change the value of a node based on its position in the list
  set(index, val) {
    // Check if there is a value
    if (!val) {
      console.error("Please enter a value")
      return
    }

    // Get the node at the index
    const node = this.get(index)
    // Check if there is a node at the index
    if (!node) {
      console.error("There is no node at that index")
      return
    }

    // Change the value of the node
    node.value = val
  }

  // insert
  // add a node to the list at a specific position
  insert(index, val) {
    // Check if there is a value
    if (!val) {
      console.error("Please enter a value")
      return false
    }

    // Get the node at the index
    const node = this.get(index)
    if (!node) {
      console.error("There is no node at that index")
      return false
    }

    // Create a new node
    const newNode = new Node(val)

    // Check if the index is the first node
    if (index === 0) {
      this.unshift(val)
      return true
    }
    // Check if the index is the last node
    if (index === this.length) {
      this.push(val)
      return true
    }

    // Insert the new node
    const prevNode = node.prev
    prevNode.next = newNode
    newNode.prev = prevNode
    newNode.next = node
    node.prev = newNode

    return true
  }

  // remove
  // remove a node from the list at a specific position
  remove(index) {
    // Check if there is a node at the index
    const node = this.get(index)
    if (!node) {
      console.error("There is no node at that index")
      return
    }

    // Check if the index is the first node
    if (index === 0) {
      this.shift()
      return this
    }
    // Check if the index is the last node
    if (index === this.length - 1) {
      this.pop()
      return this
    }

    // Remove the node
    const prevNode = node.prev
    const nextNode = node.next
    prevNode.next = nextNode
    nextNode.prev = prevNode
    node.prev = null
    node.next = null
  }

  //   print all the values in the list
  print() {
    const arr = []
    let current = this.head
    while (current) {
      arr.push(current.value)
      current = current.next
    }
    console.log(arr)
  }
}
