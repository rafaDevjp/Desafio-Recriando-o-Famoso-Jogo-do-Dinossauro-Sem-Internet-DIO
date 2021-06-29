//Elemento dinossauro
const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let pulando = false
let position = 0;

//Função que identifica o evento do botão 
function handleKeyUp(event){
    if (event.keyCode === 32) {
        if (!pulando) {
            jump()
        } 
    }
}
 //Função de movimento do Dinossauro
function jump() {
    
    pulando = true;
    let upInterval = setInterval(() => {
        if (position >= 190) {
            clearInterval(upInterval);

                //descendo
                let downInterval = setInterval(() => {
                    if (position <= 0) {
                        clearInterval(downInterval);
                        pulando = false;
                    } else {
                    position -=20;
                    dino.style.bottom = position + 'px';
                    }
                }, 25)  
        }else{
             //Subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}


//Function criação do Cactus malvado inimigo do dinossauro bonzinho :)
function createCactus() {
    const cactus = document.createElement('div'); //Objeto em HTML (div) criado com a classe cactus
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    console.log(randomTime) ;

    cactus.classList.add('cactus'); 
    cactus.style.left = cactusPosition + 'px';
    background.appendChild(cactus)  // adiciona o objeto cactus (div) dentro do background no HTML

    let leftInterval = setInterval(() => {  //Movimento do elemento cactus para esquerda
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus) //remove o elemento cactus da tela
            
        }else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){

            //Game Over

            clearInterval(leftInterval);
            document.body.innerHTML =  '<h1 class="game-over">Fim de Jogo </h1>';

        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px'
        }

    }, 40)

    setTimeout(createCactus, randomTime)
}

//Chama a função de criação do cactus
createCactus();
// identifica um evento de teclado
document.addEventListener('keyup', handleKeyUp)