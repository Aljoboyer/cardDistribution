function cardDistribution (data) {
    const newarr = []
    for(item of data){
        const cityword = item.district.substring(0,2).toUpperCase();
        const yearnum = item.currentYear.toString().slice(-2);

        const numone = item.postNo.toString().charAt(0)
        const numtwo = item.postNo.toString().charAt(1);
        const postalnum = numone.concat(numtwo);

        const rannum = Math.floor((Math.random() * 10) + 1)
        const numss = `00000${rannum}`
        const cardNumber = `${cityword}${yearnum}${postalnum}${item.birthYear}${numss}`;
        let gift;
        if(rannum % 2 == 0){
            gift = "R"
        }
        else{
            gift = "W"
        }
        const userdata = {cardNumber: cardNumber, gift, priority: rannum};
        newarr.push(userdata)
    }
    console.log(newarr);
}
const userdata = [ {name: "ahan", birthYear: 1997, currentYear: 2022, district: "dhaka", postNo: 1250, priority: 2},
{name: "tanvee", birthYear: 1996, currentYear: 2022, district: "chittagong", postNo: 1270, priority: 2}
];
cardDistribution(userdata)