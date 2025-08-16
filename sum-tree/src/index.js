import { tree } from './data/tree.js';

const validateNode = (node) => {
    return node.branches && node.branches.length > 0;
}

const validateTree = (tree) => {
    return tree && tree.branches && tree.branches.length > 0
}

const sumNode = (node) => {
    let totalValue = node.value;

    if (validateNode(node)) {
        node.branches.forEach((branch) => {
            totalValue += sumNode(branch);
        })
    }

    return totalValue;
}

const sumTree = (tree) => {
    let totalValue = 0;

    if (validateTree(tree)) {
        tree.branches.forEach((branch) => {
            totalValue += sumNode(branch);
        });
    }

    return totalValue;
}

console.log(sumTree(tree));