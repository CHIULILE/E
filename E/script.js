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

// 获取图片元素
var image1 = document.getElementById('image1');

// 点击图片切换函数
function changeImage() {
    // 检查当前显示的图片是 image1 还是 image2
    if (image1.src.match("images/image1.jpg")) {
        // 如果当前显示 image1，则切换到 image2
        image1.src = "images/image2.jpg";
    } else {
        // 如果当前显示 image2，则切换回 image1
        image1.src = "images/image1.jpg";
 }
}
