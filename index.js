/* Integre o React ao seu HTML: Você pode adicionar componentes React interativos em qualquer lugar do seu documento HTML. 
Para isso, você precisará configurar um ambiente JavaScript que permita o uso da sintaxe JSX
e divida o seu código em módulos com a sintaxe import/export. */
const linkAnimado = document.querySelectorAll('.link-programa-se');

linkAnimado.forEach(function(link) {
    link.addEventListener('mouseover', function() {
        this.styles.width = '100%';
    });
});


//Efeito de foco


// Primeiro, selecione todas as imagens dentro da div 'images-estreias'
const imagens = document.querySelectorAll('.images-estreias img');

// Adicione um evento 'mouseover' a cada imagem para aplicar o efeito
imagens.forEach(img => {
  img.addEventListener('mouseover', () => {
    // Quando o mouse está sobre uma imagem, diminua a opacidade das outras
    imagens.forEach(i => {
      if (i !== img) i.style.opacity = '0.5';
    });
  });

  // Adicione um evento 'mouseout' para remover o efeito quando o mouse sai
  img.addEventListener('mouseout', () => {
    // Restaure a opacidade de todas as imagens
    imagens.forEach(i => i.style.opacity = '1');
  });
});



function toggleActive(buttonNumber) {
  var container = document.querySelector('.button-container');
  if (buttonNumber === 1) {
    container.classList.remove('second-active');
  } else {
    container.classList.add('second-active');
  }
}