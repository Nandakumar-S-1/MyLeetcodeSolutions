/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let arr=[]
    let curr=head
    while(curr){
        arr.push(curr.val)
        curr=curr.next
    }
    let res=[]
    for(let i=0;i<arr.length;i+=2){
        res.push(arr[i])
    }
    for(let i=1;i<arr.length;i+=2){
        res.push(arr[i])
    }
    curr=head
    for(let i of res){
        curr.val=i
        curr=curr.next
    }
    return head
};