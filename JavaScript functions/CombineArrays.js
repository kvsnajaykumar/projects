function addArrays(...args) {
    return args.reduce((total,arr) => total.concat(arr));
}

console.log(addArrays([2,3,4],[6,4,9],[34,6,4]))