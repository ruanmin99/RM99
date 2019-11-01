var arr = [ [1,2] , 3,[4,[5,[6]] , 7] ]


function even(){
    var newarr = []
  return function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
      Array.isArray(arr[i])
        ? flatten(arr[i])
        : newarr.push(arr[i])
    }
    return newarr
  }

}


console.log(even()(arr));

           