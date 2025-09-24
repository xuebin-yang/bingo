
        // 创建雨滴效果
        function createRain() {
            const rainContainer = document.getElementById('rainContainer');
            const dropCount = 120; // 增加雨滴数量
            
            // 清除现有雨滴
            rainContainer.innerHTML = '';
            
            for (let i = 0; i < dropCount; i++) {
                const raindrop = document.createElement('div');
                
                // 随机选择雨滴大小
                const sizes = ['small', 'medium', 'large'];
                const size = sizes[Math.floor(Math.random() * sizes.length)];
                raindrop.classList.add('raindrop', size);
                
                // 随机位置
                const left = Math.random() * 100;
                raindrop.style.left = left + 'vw';
                
                // 随机动画延迟和持续时间
                const delay = Math.random() * 5;
                const duration = 1 + Math.random() * 3; // 增加持续时间范围
                raindrop.style.animationDelay = delay + 's';
                raindrop.style.animationDuration = duration + 's';
                
                // 随机水平移动
                const xMovement = Math.random() * 20 - 10;
                raindrop.style.setProperty('--x-move', xMovement + 'px');
                
                rainContainer.appendChild(raindrop);
                
                // 偶尔创建涟漪效果
                if (Math.random() > 0.7) {
                    createRipple(left);
                }
            }
        }
        
        // 创建涟漪效果
        function createRipple(left) {
            const rainContainer = document.getElementById('rainContainer');
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            
            ripple.style.left = left + 'vw';
            ripple.style.top = '95vh'; // 涟漪出现在底部
            
            const delay = Math.random() * 2;
            ripple.style.animationDelay = delay + 's';
            
            rainContainer.appendChild(ripple);
            
            // 移除涟漪元素
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 2000);
        }
        
        // 切换雨滴效果
        function toggleRain() {
            const rainContainer = document.getElementById('rainContainer');
            const toggleBtn = document.getElementById('toggleRain');
            
            if (rainContainer.style.display === 'none') {
                rainContainer.style.display = 'block';
                toggleBtn.textContent = '隐藏雨滴';
            } else {
                rainContainer.style.display = 'none';
                toggleBtn.textContent = '显示雨滴';
            }
        }
        
        // 切换雨滴强度
        function toggleIntensity() {
            const rainContainer = document.getElementById('rainContainer');
            const intensityBtn = document.getElementById('toggleIntensity');
            
            // 切换雨滴数量
            if (rainContainer.classList.contains('intense')) {
                rainContainer.classList.remove('intense');
                intensityBtn.textContent = '增强雨滴';
                createRain(); // 重新创建普通雨滴
            } else {
                rainContainer.classList.add('intense');
                intensityBtn.textContent = '减弱雨滴';
                
                // 增加雨滴数量
                const rainContainer = document.getElementById('rainContainer');
                const dropCount = 200; // 高强度雨滴数量
                
                // 清除现有雨滴
                rainContainer.innerHTML = '';
                
                for (let i = 0; i < dropCount; i++) {
                    const raindrop = document.createElement('div');
                    
                    // 随机选择雨滴大小
                    const sizes = ['small', 'medium', 'large'];
                    const size = sizes[Math.floor(Math.random() * sizes.length)];
                    raindrop.classList.add('raindrop', size);
                    
                    // 随机位置
                    const left = Math.random() * 100;
                    raindrop.style.left = left + 'vw';
                    
                    // 更短的延迟和持续时间，创造密集效果
                    const delay = Math.random() * 2;
                    const duration = 0.5 + Math.random() * 1.5;
                    raindrop.style.animationDelay = delay + 's';
                    raindrop.style.animationDuration = duration + 's';
                    
                    rainContainer.appendChild(raindrop);
                }
            }
        }
        
        // 页面加载完成后初始化
        window.addEventListener('load', function() {
            createRain();
            
            // 添加按钮事件监听
            document.getElementById('toggleRain').addEventListener('click', toggleRain);
            document.getElementById('toggleIntensity').addEventListener('click', toggleIntensity);
            
            // 定期创建涟漪效果
            setInterval(() => {
                const left = Math.random() * 100;
                createRipple(left);
            }, 1000);
        });