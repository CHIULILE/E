document.addEventListener('DOMContentLoaded', function () {
    const headerButton = document.getElementById('header-button');
    headerButton.addEventListener('click', function () {
        alert('Header button clicked!');
        document.querySelector('header').style.background = 'linear-gradient(45deg, #ff5e00, #22b9ff)';

        // 添加震動效果
        document.body.classList.add('shake-effect');
        
        // 一段時間後移除震動效果
        setTimeout(function () {
            document.body.classList.remove('shake-effect');
        }, 5000); // 1000毫秒 = 1秒
    });
});