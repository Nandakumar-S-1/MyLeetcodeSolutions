/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let list=new ListNode(0,head)
    let one=list
    let two=list
    for(let i=0;i<=n;i++){
        one=one.next
    }
    while(one){
        one=one.next
        two=two.next
    }
    two.next=two.next.next
    return list.next
};