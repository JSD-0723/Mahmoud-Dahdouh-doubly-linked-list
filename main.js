import DoublyLinkedList from "./DoublyLinkedList.js"
import Node from "./Node.js"

const list = new DoublyLinkedList()
list.push(5)
list.push(10)

list.print() // 5 10
list.pop()
list.print() // 5

list.unshift(15)
list.print() // 15 5
list.shift()
list.print() // 5

list.set(0, 20)
list.print() // 20
list.insert(0, 25)
list.print() // 25 20
list.insert(1, 30)
list.print() // 25 30 20
list.insert(3, 35) // There is no node at that index
list.print() // 25 30 20
list.remove(1)
list.print() // 25 20
list.remove(0)
list.print() // 20
list.remove(1) // There is no node at that index
list.print() // 20
