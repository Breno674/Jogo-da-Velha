document.addEventListener('DOMContentLoaded', ()=>{

    let quadrado = document.querySelectorAll('.quadrado');

    quadrado.forEach((quadrado)=>{
        quadrado.addEventListener('click', handleClick);
    })

})

function handleClick(event){

    
    let quadrado = event.target
    let position = quadrado.id;

    if(handleMove(position)){
        updateQuadrado();

        setTimeout(()=>{
            alert('O Jogo Acabou - O Vencedor foi ' + playrtime)
        },10);

    };
   
    updateQuadrado();
   
}

function updateQuadrado(){
    let quadrado = document.querySelectorAll('.quadrado');

     quadrado.forEach((quadrado)=>{
        let position = quadrado.id;
        let simbolos = quadro[position];
        
        if(simbolos != ''){
            quadrado.innerHTML = `<div class='${simbolos}'></div>`
        }
    })
}
