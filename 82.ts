/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
const node_5 = new ListNode(5)
const node_4_1 = new ListNode(4, node_5)
const node_4 = new ListNode(4, node_4_1)
const node_3_1 = new ListNode(3, node_4)
const node_3 = new ListNode(3, node_3_1)
const node_2 = new ListNode(2, node_3)
const node = new ListNode(1, node_2)
function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) {
        return head
    }
    const dummy = new ListNode(0, head)
    let cur = dummy
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            let x = cur.next.val
            while (cur.next && cur.next.val === x) {
                cur.next = cur.next.next
            }
        }else{
            cur = cur.next
        }
    }
    return dummy.next
};

console.log(deleteDuplicates(node));
