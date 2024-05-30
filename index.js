/* Integre o React ao seu HTML: Você pode adicionar componentes React interativos em qualquer lugar do seu documento HTML. 
Para isso, você precisará configurar um ambiente JavaScript que permita o uso da sintaxe JSX
e divida o seu código em módulos com a sintaxe import/export. */
const linkAnimado = document.querySelectorAll('.link-programa-se');

linkAnimado.forEach(function(link) {
    link.addEventListener('mouseover', function() {
        this.styles.width = '100%';
    });
});