function handleMouseEnter(){
  this.classList.add('s-card--hovered'); /* adiciona o efeito da imagem saltar criado no codigo abaixo */
  document.body.id = `${this.id}-hovered`; /* ${this.id} isso significa que é em JS, pega o id do elemento que o mouse está em cima e contatenar com hovered */
}

function handleMouseLeave(){
  this.classList.remove('s-card--hovered'); /* esse para remover o efeito da função anterior, se não a imagem não volta ao normal*/
  document.body.id ='';
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');  /*  recebe todos os elementos HTML refentes aos cards  */
  /* vamos fazer um looping com for no javaScript */

  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter',handleMouseEnter); 
    /* evento de quando o usuario coloca o mouse em cima, adiona uma função chamando ela de 'handleMouseEnter' para adicinar essa classe no nosso elemento */
    card.addEventListener('mouseleave',handleMouseLeave); /* precisa para chamar a função criada la em cima */
  }
    
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);     
/* fica esperando um evento da pagina HTML acontecer para ele executar alguma função, nesse caso a função DOMContentLoaded" e então chame a que nós criamos getElementsByClassName, false no final porque não quero colocar mais nenhum parametro */

