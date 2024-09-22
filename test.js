const 맛집순위 = [
    { name: "빽다방", rank: 45, type: "카페" },
    { name: "롯데리아", rank: 3, type: "패스트푸드점" },
    { name: "이화수육개장", rank: 1, type: "한식점" }
];

맛집순위.push({name: "요거트월드", rank: 2, type:"디저트가게"});

Object.keys(맛집순위).forEach((e)=>{
    console.log(`후보: ${맛집순위[parseInt(e)].name}`)
}
)

const 후보이름 = 맛집순위.map((e) => e.name);
console.log(`\n후보에는 ${후보이름}가 있습니다.\n`);

맛집순위.sort((a,b)=>a.rank-b.rank);

맛집순위.forEach((e) => {
    console.log(`${e.rank}번째로 맛있는 집은 ${e.type}인 ${e.name}입니다.`);
});