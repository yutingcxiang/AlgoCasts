// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let pointer1 = list.head;
    let pointer2 = list.head;
    let counter = 0;

    while (counter < n) {
        pointer1 = pointer1.next;
        counter++;
    }

    while (pointer1.next){
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
        counter++
    }

    return pointer2;
}

module.exports = fromLast;
