

setTimeout(function(){
    alert('Funcionou')
}, 2000);


/*
//setInterval/clearInterval... ex com um relógico, mas pode ser usado para numeros aleatórios e utrs funçõs 
let timer;

function comecar() {
    timer = setInterval(showTime, 1000);
}

function parar() {
    clearInterval(timer);
}

function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+':'+m+':'+s;

    document.querySelector('#demo').innerHTML = txt;
}
*/
