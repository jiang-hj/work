var divCook = document.getElementById('cook'),
    divWaiter = document.getElementById('waiter'),
    divCustomer = document.getElementById('customer'),
    imgCook = document.getElementById('cook-img'),
    imgWaiter = document.getElementById('waiter-img'),
    imgCustomer = document.getElementById('customer-img'),
    spanCook = document.getElementById('cook-span'),
    spanWaiter = document.getElementById('waiter-span'),
    spanCustomer = document.getElementById('customer-span'),
    ps = document.getElementById('ps'),
    list = document.getElementById('list'),
    cash = document.getElementById('cash');


var move = (function () {
    var timer;
    return function (time) {        //arg为1或-1，实现向不同方向运动；
        var left = waiterTom.status === 1 ? 16 : 66,
            speed = 2.5 / time * waiterTom.status,
            tempTime = 0;                   

        clearInterval(timer);           //每次执行函数都清除定时器，以免重复生成定时器。
                
        timer = setInterval(function () {
            left += speed;            
            tempTime++;
            if(tempTime > time * 20){        //动画每秒20桢；即time秒后结束
                waiterTom.status = Number(waiterTom.status) * -1;
                clearInterval(timer);
            }
            divWaiter.style.left = left + '%';
        }, 50);
    }

    // style="position: absolute; left: 16%;"

})();

function say(obj,word,time) {
    var ele;
    time = time || 1600;
    if(obj instanceof Cook){
        ele = spanCook;
    }else if(obj instanceof Customer){
        ele = spanCustomer;
    }else if(obj instanceof Waiter){
        ele = spanWaiter;
    }else if(obj === ps){
        ele = ps;
    }
    ele.textContent = word;
    appear(ele);
    setTimeout(hidden,time,ele);
}

function hidden(ele) {
    ele.style.display = 'none';
}

function appear(ele) {
    ele.style.display = 'block'
}

function changeImg(arg) {
    imgCook.src = arg === 1 ? 'cook1.png' : 'cook2.png';    
}

function refreshList(dishes) {
    list.textContent = '待做菜品：'
    var word = '';
    for(let i = 0; i < dishes.length; i++){
        word += dishes[i].name + ' ';
    }
    list.textContent += word;
}

function refreshCash(arg) {    
    cash.textContent = arg;
}