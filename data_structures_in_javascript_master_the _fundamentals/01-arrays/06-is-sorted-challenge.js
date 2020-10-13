
// return true if the array is sorted either
// ascending, or descending.
// [] => true
// [42] => true
// [39, 42] => true
// [42, 39] => true
// [1, 2, 3, 4, 5] => true
// [5, 4, 3, 2, 1] => true
// [1, 5, 2] => false
function isSorted(arr) {

    let isAscending = true;
    let isDescending = true
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            isAscending = false;
        } else if ( arr[i-1] < arr[i]){
             isDescending = false;
        }
    }
    return isAscending || isDescending;
}

let cl = console.log;
cl(isSorted([]));
cl(isSorted([39, 42]));
cl(isSorted([1, 2, 3, 4, 5]));
cl(isSorted([5, 4, 3, 2, 1]));
cl(isSorted([1,5,2]));