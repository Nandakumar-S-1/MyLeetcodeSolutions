/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(!l1 && !l2)return null
    if(!l1)return l2
    if(!l2)return l1

    let val =l1.val+l2.val
    let c =  new ListNode(val%10)
    c.next = addTwoNumbers(l1.next,l2.next)
    
    if(val>=10){
        c.next =  addTwoNumbers(c.next,new ListNode(1))
    }
    console.log(val,c,c.next)
    return c
};