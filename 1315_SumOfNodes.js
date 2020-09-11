// 1315. Sum of Nodes with Even-Valued Grandparent
// https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/

let sumEvenGrandparent = function(root) {
    let sum = 0;
    if (root === null) {
        return sum;
    }
    if (root.val % 2 == 0) {
        if (root.left && root.left.left) {
             sum += root.left.left.val
        }
        if (root.left && root.left.right) {
             sum += root.left.right.val
        }
        if (root.right && root.right.right) {
          sum += root.right.right.val
        }
        if (root.right && root.right.left) {
          sum += root.right.left.val
        }
    }
    sum += sumEvenGrandparent(root.left);
    sum += sumEvenGrandparent(root.right);
    return sum;
};
