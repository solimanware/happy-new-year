const treesize = 10;
let counter = treesize;
const arr = [];
//tree
for (let i = 0; i < treesize; i++) {
    arr.push(' '.repeat(counter) + '*'.repeat((i*2)+1));
    counter--;
}
//trunk
for (let i = 0; i < treesize/3; i++) {
    arr.push(' '.repeat(treesize-1) + '*'.repeat((3)));
}
console.log(arr.join('\n'));

