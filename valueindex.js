// Given an array Arr of N positive integers. Your task is to find the elements whose value is equal to that of its index value ( Consider 1-based indexing ).

// N = 5
// Arr[] = {15, 2, 45, 12, 7}
// Output: 2
// Explanation: Only Arr[2] = 2 exists here.

const valueIndex= (arr)=>{
    let i=0;
    while(i<arr.length){
       if(arr[i]==i+1){
        return arr[i];
       }
       else i++;
    }
    return "not found";
}
const arr=[15, 2, 45, 12, 7];
console.log(valueIndex(arr));
