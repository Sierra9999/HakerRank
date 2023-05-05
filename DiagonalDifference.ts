function diagonalDifference(arr: number[][]): number {
    let LeftToRight: number = 0
    let RightToLeft: number = 0

    let topRightCornerIndex = arr.length-1

    for(let o = 0; o < arr.length; o++){
        LeftToRight += arr[o][o]
        RightToLeft += arr[o][topRightCornerIndex]
        topRightCornerIndex -= 1
    }

    return  RightToLeft - LeftToRight 
}


console.log(diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]))