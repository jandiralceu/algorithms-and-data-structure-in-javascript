// Quickselect is a selection algorithm to find the kth smallest element in an unordered list.
// Quickselect uses the same approach as a quicksort algorithm. A pivot is chosen,
//and the array is partitioned. Instead of recursing both sides like quicksort,
//however, it recurses only the side for the element. This reduces the complexity
// from O(nlog2(n)) to O(n).

import { partition } from "./06_quick_sort"

function quickSelectInPlace(list: number[], l: number, h: number, k: number) {
    const p = partition(list, l, h)

    if (p === (k -1)) return list[p]
    else if (p > (k - 1)) return quickSelectInPlace(list, p - 1, h, k)
    else return quickSelectInPlace(list, p + 1, h, k)
}

function medianQuickSelect(list: number[]) {
    return quickSelectInPlace(list, 0, list.length - 1, 10)
}

const numbersList = [1,3,3,-2,3,14,7,8,1,2,2]
console.log(medianQuickSelect(numbersList))
