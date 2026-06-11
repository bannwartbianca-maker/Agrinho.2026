// 1. CONSTRUÇÃO DO GRÁFICO DETALHADO (Utilizando Chart.js)
const canvasGrafico = document.getElementById('graficoProducao').getContext('2d');

const graficoSustentavel = new Chart(canvasGrafico, {
    type: 'bar',
    data: {
        labels: ['Economia de Água', 'Nutrientes do Solo', 'Produção de Soja', 'Redução de Químicos'],
        datasets: [{
            label: 'Melhorias Reais em Porcentagem (%)',
            data: [80, 90, 65, 75],
            backgroundColor: [
                '#0056b3', // Azul escuro sólido para Água
                '#5d4037', // Marrom para o Solo
                '#2e7d32', // Verde soja para Produção
                '#e65100'  // Laranja escuro para redução de Químicos
            ],
            borderColor: ['#002244', '#3e2723', '#1b5e20', '#b33600'],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    font: { size: 18, weight: 'bold' },
                    color: '#111111'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: { font: { size: 16, weight: 'bold' }, color: '#111111' }
            },
            x: {
                ticks: { font: { size: 16, weight: 'bold' }, color: '#111111' }
            }
        }
    }
});

// 2. LOGICA DA CAIXA DE PERGUNTAS E RESPOSTAS (FAQ) ACESSÍVEL
function alternarFaq(botaoClicado) {
    // Verifica se a pergunta clicada já estava expandida
    const estaExpandido = botaoClicado.getAttribute('aria-expanded') === 'true';
    
    // Altera o estado do atributo de acessibilidade ARIA
    botaoClicado.setAttribute('aria-expanded', !estaExpandido);
    
    // Captura a div de resposta associada à pergunta clicada
    const blocoResposta = botaoClicado.nextElementSibling;
    const indicadorVisual = botaoClicado.querySelector('.sinal');
    
    if (!estaExpandido) {
        blocoResposta.style.display = 'block';
        blocoResposta.setAttribute('aria-hidden', 'false');
        indicadorVisual.textContent = '−'; // Altera o sinal para menos
    } else {
        blocoResposta.style.display = 'none';
        blocoResposta.setAttribute('aria-hidden', 'true');
        indicadorVisual.textContent = '+'; // Retorna o sinal para mais
    }
}
