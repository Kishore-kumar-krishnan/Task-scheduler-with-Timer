// Stop Watch using setInterval  
var sec=''
var s=0;
var m=0;
var h=0;
const start=()=>{
     sec=setInterval(()=>{
        ++s;
        document.querySelector('.sec').textContent=s.toString().padStart(2,"0");
        if(s==60){
            s=0;
            ++m;
            document.querySelector('.min').textContent=m.toString().padStart(2,"0") + ` :`;
            if(m==60){
                m=0;
                ++h;
                document.querySelector('.sec').textContent=s.toString().padStart(2,"0");
                document.querySelector('.min').textContent=m.toString().padStart(2,"0") + ` :`;
                document.querySelector('.hour').textContent=h.toString().padStart(2,"0") + ` :`;
            }
        }
    },1000)
}

const stop=()=>{
    clearTimeout(sec); 
}
const reset=()=>{
    clearTimeout(sec);
    s=0;
    h=0;
    m=0;
    document.querySelector('.sec').textContent=s.toString().padStart(2,"0");
    document.querySelector('.min').textContent=m.toString().padStart(2,"0") + ` :`;
    document.querySelector('.hour').textContent=h.toString().padStart(2,"0") + ` :`;
}



