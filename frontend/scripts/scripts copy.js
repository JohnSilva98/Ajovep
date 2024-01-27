// Espera até que o DOM esteja completamente carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    // Obtém uma referência para o botão "Anterior" e "Próximo"
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    // Obtém uma referência para o container dos slides e para cada slide individual
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    // Calcula o número total de slides
    const totalSlides = slides.length;
    // Inicializa o índice atual do slide como 0
    let currentIndex = 0;
  
    // Função para mostrar os slides a partir de um índice inicial
    function showSlides(startIndex) {
      // Itera sobre cada slide
      slides.forEach((slide, i) => {
        // Verifica se o índice do slide está dentro do intervalo a ser exibido (índice inicial + 3)
        if (i >= startIndex && i < startIndex + 3) {
          // Se estiver dentro do intervalo, exibe o slide
          slide.style.display = 'inline-block';
        } else {
          // Se estiver fora do intervalo, oculta o slide
          slide.style.display = 'none';
        }
      });
    }
  
    // Event listener para o botão "Anterior"
    prevBtn.addEventListener('click', function() {
      // Calcula o novo índice do slide anterior
      currentIndex = (currentIndex === 0) ? totalSlides - 3 : currentIndex - 3;
      // Chama a função para exibir os slides a partir do novo índice
      showSlides(currentIndex);
    });
  
    // Event listener para o botão "Próximo"
    nextBtn.addEventListener('click', function() {
      // Calcula o novo índice do próximo slide
      currentIndex = (currentIndex === totalSlides - 3) ? 0 : currentIndex + 3;
      // Chama a função para exibir os slides a partir do novo índice
      showSlides(currentIndex);
    });
  
    // Mostra os primeiros 3 slides inicialmente
    showSlides(currentIndex);
  });
  