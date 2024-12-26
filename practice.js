class myclass {
    constructor(standerd,college){
this.standerd=standerd;
this.college =college
}
}
let Ravi = new myclass("8th","college")

console.log(Ravi);

function prop(a,b){
    let c = a+b;
    return(c)
}
console.log(prop(2,5));
 //add button

    function add(){
        let a = document.getElementById("first").value;
        let b = document.getElementById("second").value;
        let c = parseInt(a)+parseInt(b);
        document.getElementById("result").value = c;
    }
    //sub button
    function sub(){
        let a = document.getElementById("first").value;
        let b = document.getElementById("second").value;
        let c = parseInt(a)-parseInt(b);
        document.getElementById("result").value = c;
    }
