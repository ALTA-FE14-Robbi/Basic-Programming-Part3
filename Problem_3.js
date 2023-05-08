// Program Remove Duplicates

function removeDuplicates(array) {
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf (array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]))    // 4
console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9]))    // 6
console.log(removeDuplicates([2, 2, 2, 11]))            // 2
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4])) // 4
