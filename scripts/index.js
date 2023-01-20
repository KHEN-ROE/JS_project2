//각 이미지 표시 함수
// const showFlower = () =>{
//     const imgView1 = document.querySelector("#imgView1");//img 태그에 있는 src(속성)을 바꿔야 함. innerHTML아님
//     const txtWrap = document.querySelector(".txtWrap");
//     const imgViewText = document.querySelector("#imgViewText");
//     imgView1.setAttribute("src", "./images/cityFlower.png");
//     imgViewText.innerHTML = "동백꽃";
//     txtWrap.style.display = "block";
//     console.log(imgView1);
// }
// const showBird = () =>{
//     const imgView1 = document.querySelector("#imgView1");
//     const txtWrap = document.querySelector(".txtWrap");
//     const imgViewText = document.querySelector("#imgViewText");
//     imgView1.setAttribute("src", "./images/cityBird.png");
//     imgViewText.innerHTML = "갈매기";
//     txtWrap.style.display = "block";
//     console.log(imgView1);
// }
// const showFish = () =>{
//     const imgView1 = document.querySelector("#imgView1");
//     const txtWrap = document.querySelector(".txtWrap");
//     const imgViewText = document.querySelector("#imgViewText");
//     imgView1.setAttribute("src", "./images/cityFish.png");
//     imgViewText.innerHTML = "고등어";
//     txtWrap.style.display = "block";
//     console.log(imgView1);
// }

//하나의 함수로 처리
const show = (idx) => {//idx는 any
    const pngName = ['cityFlower', 'cityBird', 'cityFish'];
    const txt = ['동백꽃', '갈매기', '고등어'];

    console.log(pngName[idx], txt[idx]);

    const imgView1 = document.querySelector("#imgView1");//아이디 호출
    const txtWrap = document.querySelector(".txtWrap");//클래스 호출
    const imgViewText = document.querySelector("#imgViewText");//아이디호출

    imgView1.setAttribute("src", `./images/${pngName[idx]}.png`);
    imgViewText.innerHTML = txt[idx];
    txtWrap.style.display = "block";
}

//DOM 로드 후
document.addEventListener("DOMContentLoaded", ()=>{
    /*
    const imgIcon1 = document.querySelector("#imgIcon1");
    const imgIcon2 = document.getElementById("imgIcon2");//아이디 찾을 땐 #안씀
    const imgIcon3 = document.querySelector("#imgIcon3");

    imgIcon1.addEventListener("mouseover", () => show(0));
    imgIcon2.addEventListener("mouseover", () => show(1));
    imgIcon3.addEventListener("mouseover", () => show(2));//3개의 함수가 필요해짐
    */

    const imgIconItems = document.querySelectorAll(".imgIconItem");
    console.log(imgIconItems);

    for(let [k, item] of imgIconItems.entries()) {//k값은 인덱스? item은 요소
        item.addEventListener("mouseover", () =>show(k));
    }
});