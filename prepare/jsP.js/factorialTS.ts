let n: number = Number('0')

if(n < 0) console.log("error")
else {
let res = 1;

for(let i = 2; i <= n; i++){
  res *= i
  }
  console.log(res)
}
