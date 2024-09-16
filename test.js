const stars = (num) => {
   const start = new Array(num).fill("*").join("")
    for(let i = 0; i <=num; i++){
      console.log(start.slice(0,i)) 
        }
    }
//stars(5)

const print = (n) => {
    const first = new Array(n).fill(" *").join("")
    const space = new Array(n).fill(" ")
  //  console.log(first)
    for (let i = 0; i <= n; i++) {
        console.log(space.join("") + first.slice(0,(i*2)).toString())
        space.pop()
    }
}
print(5)
