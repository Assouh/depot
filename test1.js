const stars = (num) => {
    let c = -1 * num;
    let str = Array(num).fill("* ");
    let space = Array(num).fill(" ");
    for(let i = c; i < num; i++) {
        if(i < 0) console.log(space.slice(0,(i*(-1))).join("")+str.slice(0,i+num).join(''));
        else console.log(space.slice(0,i).join("")+str.slice(0, num -i).join(''));
    }
}
//stars(5)
const dateSelect = (date)=>{
    const dateDetail = date.split("-")
    const moi = dateDetail[0]
    const annee = dateDetail[1]
    const intmoi = parseInt(moi)
    const intannee = parseInt(annee)
    if(intmoi == 9 || intmoi == 11 || intmoi == 6 || intmoi == 4){
        console.log("30 jours");
        return
    }else if(intmoi == 2){
        if(intannee%4 == 0){
            console.log("29 jours")
            return
        }
           console.log("28 jours")
        return
    }else {
        console.log("31 jours")
        return
    }
}
dateSelect("02-2020")