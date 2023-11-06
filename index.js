

const registerBtn = document.querySelector(".info button");

const info = document.querySelector(".info");




let currInfoScrollHeight = 0;

const infoScrollHeight = 560;







const scrollInfo = ()=>{
   
    info.scrollTo(0,currInfoScrollHeight);
    currInfoScrollHeight = (currInfoScrollHeight+1)%(infoScrollHeight+1);
}



let scrollInfoInterval = setInterval(scrollInfo,1000/50);
  














info.addEventListener("scroll",()=>{
   currInfoScrollHeight = info.scrollTop;
   
})


info.addEventListener("mouseover",()=>{
    clearInterval(scrollInfoInterval)
    
})

info.addEventListener("mouseout",()=>{
    scrollInfoInterval = setInterval(scrollInfo,1000/50);
})

registerBtn.addEventListener("click",()=>{
    window.scrollTo(0,document.body.scrollHeight);
})


