
const jours = (ladate) => {
const day = new Array(12)
for (let i=0;i<=12;i+=2){
        day[i] = "31"
}
for (let i=1;i<=11;i+=2){
    day[i] = "30"
}
day[1] = "29"
console.log(day[ladate])
}
jours(6)