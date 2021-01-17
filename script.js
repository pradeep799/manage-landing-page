// console.log("hello");
// const list=document.querySelector(".list");

// let div="";
// let li=document.createElement("li");
// for(i=1;i<5;i++){
//     for(j=1;j<=i;j++){
//        console.log(this.j);
//       div=div+`<li>${j}</li>`
//    }
//    list.innerHTML=div;
// }
const menuBtn = document.querySelector(".menu-btn");
const menuOverlay = document.querySelector(".menu__overlay");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuOverlay.classList.toggle("open");
});
