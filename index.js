// Add your functions here
function map(arr, fn) {
 let r = []
 for (let i = 0; i < arr.length; i++) {
  r.push(fn(arr[i]))
 }
 return r;
}


function reduce(arr, fn, starting) {
    let i;
    if(!starting) {
      starting = arr[0];
     i=1;
    }
    else{
        i=0;
    }
    let r=starting;
  
    for (i; i < arr.length; i++) {
      r = fn(arr[i], r)
    }
  
    return r;
  }

