

var t={
    "hello":"hi my name is threfty and welcome to our online store",
    "hi":"hello my name is threfty how you doing ?",
    "hey":"hello my name is threfty how you doing ?",
    "am fine thnks":"great to hear that",
    "am okay":"m sure you're having a great day",
    "what kind of products you have":"we got everything you may like from accesories to clothes",
    "i can't choose a product can you help me":"ofc i can ! how about we go have a look in the product page tougether",
    "i can't find my size ":"its okay you can contact us by going down to the far bottom of the page",
    "what's your name":"my name is threfty ",
    "what's your role":"my job is to assest you and help you make the right choise",
    "do the store have a real location":"yes this store is not only online its lokated in tunisia the capital",
    "tell me about the store opening and closing time":"our store is opening by 9AM to 5PM",
    "okay":"its been an honor making you satisfied",
    "I need help":"How can I help you?",
    "about the availability of a new product":"Which product ?",
    "clothes":"From winter to summer, you find the top that suits you I'm going!",
    "accessories":"Discover our unique pieces of accessories",
    "shoes":"Discover our current pairs of shoes",
    "am looking for Product returns":"in case of a return, please contact us on: 27 110 088",
    "Can i cancel an order":"please send us an email on maisonduglamou.com@gmail.com",
    "No, thank you":"Ok perfect.",
    "No":"Ok if you have a question I'm here",
};




const btn=document.querySelector(".btna");
const show=document.querySelector(".ania");

const inp=document.querySelector(".input1a");
inp.addEventListener("click",()=>{
    inp.value="";
})

const t1=document.querySelector(".ta1");
const t2=document.querySelector(".ta2");
const t3=document.querySelector(".ta3");
const t4=document.querySelector(".ta4");


t1.style.visibility='hidden';
t2.style.visibility='hidden';
t3.style.visibility='hidden';
t4.style.visibility='hidden';

btn.addEventListener("click",()=>{


    
if((t4.value=="")&&(t3.value=="")){
    if((inp.value.toLowerCase() in t) &&(inp.value!="")){

        console.log(inp.value);
        console.log(t[inp.value]);

    t3.style.visibility='visible';
    t4.style.visibility='visible';

    t3.value=inp.value;

    t4.value=(t[inp.value.toLowerCase()]);
    inp.value="";
}
else{
    if(inp.value!=""){
          t4.style.visibilty='visible';
    t4.value=("reformule ta question svp");
    inp.value="";
    }
  
}
}

else{
    if((inp.value.toLowerCase() in t)&&(inp.value!="")){
        t1.style.visibility='visible';
t2.style.visibility='visible';
        t2.value=t4.value;
        t1.value=t3.value;
        t3.value=inp.value;
        t4.value=(t[inp.value.toLowerCase()]);
        inp.value="";
    }
    else{

      
                   t1.style.visibility='visible';
t2.style.visibility='visible';
        t2.value=t4.value;
        t1.value=t3.value;
        t3.value=inp.value;
        t4.value=("reformule ta question svp");
        inp.value="";
     
 
    }

}
} 
);

let fon=document.querySelector(".ffonta");
let k=1;
fon.addEventListener('click',()=>{
k=k*-1;
    if(k==1)
    {
        show.style.left="-340px";
    }
    if(k==-1)
    {
        show.style.left="10px";
    }

})   


