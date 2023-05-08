// Program Join Array Remove Duplicate

function joinArrayRemoveDuplicate(arrayA, arrayB) {
    // menggabungkan kedua array
    let join = arrayA.concat(arrayB);
    // menampung elemen unik
    let uniqueElement = new Set();
    // iterasi setiap elemen pada gabungan array
    for (let i = 0; i < join.length; i++) {
        if (!uniqueElement.has(join[i])) {
            uniqueElement.add(join[i]);
        }
    }
    // konversi kembali uniqueElement menjadi array
    let result = Array.from(uniqueElement);

    return result;
}

// Test cases
console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]))
// ["apel", "anggur", "lemon", "leci", "nanas"]
console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]))
// ["samsung", "apple", "sony", "xiaomi"]
console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]))
  // [“football”, “basketball”]
