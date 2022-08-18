// LINKED-LIST CONSTRUCTOR FOR THIS FILE
function SinglyLinkedListNode(data){
  this.data = data;
  this.next = null;
}

// example of a singly linked list with a no node and of size 0
function SinglyLinkedList(){
  this.head = null;
  this.size = 0;
}

// LINKED-LIST OPERATIONS

// INSERTION
function insertVal(value){
  // check if head is empty
  if(this.head === null){
    this.head = new SinglyLinkedListNode(value);
  }else{
    let temp = this.head;
    this.head = new SinglyLinkedListNode(value)
    this.head.next = temp
  }
  this.size++
}
const sll1 = new SinglyLinkedListNode()
sll1.insert(5);


