

const registerBtn = document.querySelector(".info button");

const info = document.querySelector(".info");




let currInfoScrollHeight = 0;

const infoScrollHeight = info.scrollHeight;

const scrollInfo = ()=>{
   
    info.scrollTo(0,currInfoScrollHeight);
    currInfoScrollHeight++;

    if( currInfoScrollHeight>=infoScrollHeight){
        currInfoScrollHeight = 0;
        info.scrollTo(0,0);
       
    }
}



let scrollInfoInterval = setInterval(scrollInfo,1000/50);
  

info.addEventListener("mouseover",()=>{
    clearInterval(scrollInfoInterval)
    
})

info.addEventListener("mouseout",()=>{
    scrollInfoInterval = setInterval(scrollInfo,1000/50);
})

registerBtn.addEventListener("click",()=>{
    window.scrollTo(0,document.body.scrollHeight);
})