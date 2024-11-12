let boxes=document.querySelectorAll("#box");
let o=true;
let w=document.querySelector("#win");
const pattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
let sta= document.querySelector("#st");
let rst=document.querySelector("#st1");
let v=document.querySelector(".v");
let game=document.querySelector(".game");
let re=document.querySelector(".res");
let md=document.querySelector("#md");
let lf=document.querySelector(".left")
let but=document.querySelector(".but");
let mode=document.querySelector(".mode");
let count=0;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(o){
            box.innerText='O';
            o=false;
        }
        else{
            box.innerText='X';
            o=true;
        }
        box.disabled=true;
        count++;
        check();
        if((count===9)&&(w.innerText==="Winner")){
            w.innerText="Well Done It's A Draw!";
            v.classList.remove("hi");
            game.classList.add("hi");
            re.classList.add("hi");
            lf.classList.add("hi");
            but.classList.add("hi");
            mode.classList.add("hi");
        }    
    });
});
const check= () =>{ pattern.forEach((pat)=>{
    let pv0=box[pat[0]].innerText;
    let pv1=box[pat[1]].innerText;
    let pv2=box[pat[2]].innerText;
    if((pv0!="")&&(pv1!="")&&(pv2!="")){
        console.log("Pattern checked");
        if((pv0===pv1)&&(pv1===pv2)){
            disable();
            w.innerText=`Congratulations, Winner ${box[pat[0]].innerText}`;
            v.classList.remove("hi");
            game.classList.add("hi");
            re.classList.add("hi");
            lf.classList.add("hi");
            but.classList.add("hi");
            mode.classList.add("hi");
        }
    }
});
};
const disable =()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
};
const enable=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    });
    w.innerText="Winner";
};
const res=()=>{
    count=0;
    o=true;
    enable();
    v.classList.add("hi"); 
    game.classList.remove("hi");
    re.classList.remove("hi");
    lf.classList.remove("hi");
    but.classList.remove("hi");
    mode.classList.remove("hi");
};
sta.addEventListener("click",res);
rst.addEventListener("click",res);
md.addEventListener("click",()=>{
    if(document.getElementById("md").alt==="Dark Mode"){
        document.getElementById("md").src="lightmode.png";
        document.getElementById("md").alt="Light Mode";
        document.querySelector("body").style.backgroundImage='none';
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector(".hd").style.color='white';
        document.querySelector(".left").style.color="white";
        document.querySelector("#win").style.color="white";
        document.querySelector("#win").style.textShadow=" rgba(54, 40, 40, 0.623)";
        sta.style.boxShadow='1px 1px rgba(236, 233, 233, 0.76)';
        rst.style.boxShadow='1px 1px rgba(236, 233, 233, 0.76)';
        md.style.boxShadow='1px 1px rgba(236, 233, 233, 0.76)';
    }else{
        document.getElementById("md").src="Darkmode.png";
        document.getElementById("md").alt="Dark Mode";
        document.querySelector("body").style.backgroundImage='linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)';
        document.querySelector(".hd").style.color='white';
        document.querySelector(".left").style.color="black";
        document.querySelector("#win").style.color="black";
        sta.style.boxShadow='2px 2px rgba(32, 29, 29, 0.628)';
        rst.style.boxShadow='2px 2px rgba(32, 29, 29, 0.628)';
        md.style.boxShadow='2px 2px rgba(32, 29, 29, 0.628)';
    }
});
