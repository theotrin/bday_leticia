document.addEventListener('DOMContentLoaded', () => {
    
    // Funny alert on load (very 2000s)
    setTimeout(() => {
        alert('PARABÉNS LETÍCIA!!! VOCÊ É A MAIS GATA! xD');
    }, 1000);

    const marias = ['img/maria.png', 'img/maria2.png', 'img/maria3.png'];

    // Spawn falling Marias on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        let currentScroll = window.scrollY;
        
        // As you scroll down... spawn Marias
        if (currentScroll - lastScroll > 50) {
            spawnFallingMaria();
            lastScroll = currentScroll;
        }

        // Change background color crazily when scrolling deep
        if (currentScroll > 500) {
            document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        }
    });

    function spawnFallingMaria() {
        const container = document.getElementById('mariacorn');
        const img = document.createElement('img');
        
        // Random Maria image
        img.src = marias[Math.floor(Math.random() * marias.length)];
        img.className = 'falling-maria';
        
        // Random values
        const startLeft = Math.random() * window.innerWidth;
        const width = 50 + Math.random() * 80;
        const duration = 2 + Math.random() * 3;

        img.style.left = startLeft + 'px';
        img.style.width = width + 'px';
        img.style.animationDuration = duration + 's';

        container.appendChild(img);

        // Remove after animation finishes
        setTimeout(() => {
            if (img.parentNode) {
                img.parentNode.removeChild(img);
            }
        }, duration * 1000);
    }

});
