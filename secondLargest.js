//Given an array Arr of size N, print second largest distinct element from an array.

// N = 6
// Arr[] = {12, 35, 1, 10, 34, 1}
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.
function secondLargest(arr){
    let large=arr[0];
    let second=arr[1];
    let temp=0;
    for(let i=0;i<arr.length;i++){
        if(second>large){
        temp= second;
        second=large;
        large=temp;
        }
     if(arr[i]>second){
        if(arr[i]>=large){
            large=arr[i];
        }else{
            second=arr[i];
        }
     }
    }
    return second;
}

const arr=[12, 35, 1, 10, 34, 1];
let temp= secondLargest(arr);
console.log(temp);
