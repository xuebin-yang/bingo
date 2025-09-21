// 切换标签页功能
        document.querySelectorAll('.life-nav-btn').forEach(button => {
            button.addEventListener('click', () => {
                // 移除所有active类
                document.querySelectorAll('.life-nav-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                document.querySelectorAll('.life-section').forEach(section => {
                    section.classList.remove('active');
                });
                
                // 添加active类到当前按钮和目标部分
                button.classList.add('active');
                const target = button.getAttribute('data-target');
                document.getElementById(target).classList.add('active');
            });
        });