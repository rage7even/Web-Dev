let n = Number('5')

let f = 1

if(n === 0 || n === 1) console.log(1)
else{
    while(n > 1){
        f = f * n
        n--;
    }
    console.log(f);
}