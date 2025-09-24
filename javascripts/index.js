// 雨滴效果核心代码
function createRain() {
    const rainContainer = document.getElementById('rainContainer');
    if (!rainContainer) return;
    
    rainContainer.innerHTML = '';
    const dropCount = 100;
    
    for (let i = 0; i < dropCount; i++) {
        const raindrop = document.createElement('div');
        const sizes = ['small', 'medium', 'large'];
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        raindrop.classList.add('raindrop', size);
        
        raindrop.style.left = Math.random() * 100 + 'vw';
        raindrop.style.animationDelay = Math.random() * 5 + 's';
        raindrop.style.animationDuration = (1 + Math.random() * 2) + 's';
        
        rainContainer.appendChild(raindrop);
    }
}

function createRipple(left) {
    const rainContainer = document.getElementById('rainContainer');
    if (!rainContainer) return;
    
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = left + 'vw';
    ripple.style.top = '95vh';
    ripple.style.animationDelay = Math.random() * 2 + 's';
    
    rainContainer.appendChild(ripple);
    setTimeout(() => ripple.remove(), 2000);
}

// 强制初始化函数
function forceInitializeRain() {
    const rainContainer = document.getElementById('rainContainer');
    if (rainContainer) {
        rainContainer.style.display = 'block';
        rainContainer.innerHTML = '';
        createRain();
        
        setInterval(() => {
            createRipple(Math.random() * 100);
        }, 1000);
    }
}

// 立即执行并添加多重保险
document.addEventListener('DOMContentLoaded', forceInitializeRain);
window.addEventListener('load', forceInitializeRain);
window.addEventListener('pageshow', function(e) {
    if (e.persisted) forceInitializeRain();
});

// 确保脚本加载后立即执行
setTimeout(forceInitializeRain, 10);