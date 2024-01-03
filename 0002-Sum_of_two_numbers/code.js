class Solution {
    public:
        ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
            int carry = 0;
            ListNode* dummyhead = new ListNode(0);
            ListNode* l3 = dummyhead;
    
            while (l1 != nullptr || l2 != nullptr || carry != 0) {
                int sum = carry + (l1 ? l1->val : 0) + (l2 ? l2->val : 0);
                carry = sum / 10;
    
                l3->next = new ListNode(sum % 10);
                l3 = l3->next;
    
                if (l1) l1 = l1->next;
                if (l2) l2 = l2->next;
            }
    
            return dummyhead->next;
        }
    };