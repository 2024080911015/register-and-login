const cards=document.querySelectorAll('.card');const btns=document.querySelectorAll('.js-btn');btns.forEach(btn=>{btn.addEventListener('click',on_btn_click,true);btn.addEventListener('touch',on_btn_click,true);});function on_btn_click(e){const nextID=e.currentTarget.getAttribute('data-target');const next=document.getElementById(nextID);if(!next)return;bg_change(nextID);view_change(next);return false;}
function bg_change(next){document.body.className='';document.body.classList.add('is-'+next);}
function view_change(next){cards.forEach(card=>{card.classList.remove('is-show');});next.classList.add('is-show');}
// 创建叶子的数量
const leafCount = 30; // 你可以根据需要调整数量

for (let i = 0; i < leafCount; i++) {
    createLeaf();  // 调用函数创建每片叶子
}

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('falling-leaf');

    // 创建 img 标签，并设置 src 为银杏叶图片路径
    const img = document.createElement('img');
    img.src = "images/ginkgo-leaf.png"; // 根据实际路径调整
    img.alt = "银杏叶";

    leaf.appendChild(img);

    // 设置随机的 left 和 top 值来分布叶子
    leaf.style.left = Math.random() * 100 + '%'; // left 位置从 0 到 100%
    leaf.style.animationDuration = (Math.random() * (15 - 8) + 8) + 's'; // 随机动画时长 8s 到 15s

    // 将叶子添加到页面的 body 元素中
    document.body.appendChild(leaf);
}
//密码强度提示
document.querySelector(".password").addEventListener("input", function() {
    if (this.value.length < 8) {
        this.setCustomValidity("密码至少 8 个字符");
    } else {
        this.setCustomValidity("");
    }
});
//邮箱验证
document.querySelector(".email").addEventListener("input", function() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(this.value)) {
        this.setCustomValidity("请输入有效的邮箱地址");
    } else {
        this.setCustomValidity("");
    }
});


