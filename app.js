// 1

function validTime(time) {
  let a = time.split(":")
  if(+a[0] > 24 || +a[0] < 0 || +a[1] > 60 || +a[1] < 0 ) {
   return false
  }
  return true

}

validTime("02:2")

// 2

function missingNumber(arr) {
    arr.sort((a,b) => a-b)

  if( arr[0] !== 0) {
    return 0
  }

  for(let i = 1; i < arr.length ; i++) {
    if(arr[i] + 1 !== arr[i +1]){
      return arr[i] + 1
    }
  }
}

console.log(missingNumber([0,1,2]))
