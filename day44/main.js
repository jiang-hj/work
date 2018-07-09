//餐馆
var Restaurant = function () {
    var instance = null;
    var Restaurant = function (params) {
        if (instance) {
            return instance;
        }
        this.name = params.name;
        this.seats = params.seats;
        this.cash = params.cash;
        this.staffs = params.staffs;
        return instance = this;
    }

    Restaurant.prototype.hire = function (staff) {
        this.staffs.push(staff);
        console.log('欢迎' + staff.name + '加入餐馆');
    }

    Restaurant.prototype.fire = function (staff) {
        for (let i = 0; i < this.staffs.length; i++) {
            if (this.staffs[i] = staff) {
                this.staffs.splice(i, 1);
                console.log(staff.name + '被解雇');
            }
        }
    }

    return Restaurant;
}();


//员工
// var Staff = function() {
//     var instance = null;
    var Staff = function(staff) {
        // if(instance){
        //     return instance;
        // }
        this.id = staff.id;
        this.name = staff.name;
        this.wage = staff.wage;
        // return instance = this;
    }

    Staff.prototype.work = function(){}

//     return Staff;
// }();


//厨师
var Cook = function() {
    var instance = null;
    var Cook = function(cook) {
        if(instance){
            return instance;
        }
        Staff.call(this,cook);
        return instance = this;        
    }

    Cook.prototype.work = function(dish) {
        console.log(dish.name + "出锅了");
    }    
    
    return Cook;
}();

var Waiter = function() {
    var instance = null;
    var Waiter = function(waiter) {
        if(instance){
            return instance;
        }
        Staff.call(this,waiter);
        this.dish = null;
        return instance;
    }

    Waiter.prototype.work = function(dish) {
        if(dish){
            console.log(this.name + '把' + '客人点的菜记录了下来，并交给了厨师');
            this.dish = dish;
            return dish;
        }else{
            console.log(this.name + '把菜端给了客人');
            this.dish = null;
        }
    }

    return Waiter;
}();


var Customer = function() {};

Customer.prototype.eat = function() {
    console.log('客人很快吃完了一盘菜');
}
    
Customer.prototype.order = function(menu) {
    let temp = Math.floor(5 * Math.random()); 
    let dish = menu[temp];
    console.log('客人点了' + dish.name);
    return dish;
}

var customers = function() {
    let array = [];
    for(let i = 0; i < 20 ; i++){
        array.push(new Customer());
    }
    return array;
}();

//菜单
// var Dish = function(dish) {
//     this.name = dish.name;
//     this.price = dish.price;
//     this.cost = dish.cost;
// }

var menu = [{name: '西红柿炒鸡蛋', price: '9'}, {name: '鱼香茄子', price: '12'}, {name: '酸辣白菜', price: '8'}, {name: '脆皮豆腐', price: '10'}, {name: '红烧肉', price: '25'}];


var restaurant = new Restaurant({
    name: 'haha',
    seats: 1,
    caches: 1000000,
    staffs: []
});


var cook = new Cook({
    id: 0,
    name: 'Tony',
    wage: 10000
});

var waiter = new Waiter({
    id: 1,
    name: 'Tom',
    wage: 5000,    
})

restaurant.hire(cook);
restaurant.hire(waiter);


function communicate() {    
        let customer = customers.shift();
        let orderdish = customer.order(menu);
        waiter.work(orderdish);
        cook.work(waiter.dish);        
        waiter.work();
        customer.eat();      
        console.log('=========================');
    
        return customers.length <= 0 ? -1 : 1;
}

// function begin(timer) {
//     clearInterval(timer);
//     timer = setInterval(function() {
//     communicate(timer);
//     },1000);
// }
(function() {
    let timer = null;
    let i = 0;
document.getElementById('beginBtn').onclick = function() {
    clearInterval(timer);
    var len = 1;
    timer = setInterval(function() {
        i++;
        console.log('======第' + i + '位顾客=====');
        len = communicate();
        if(len === -1){
            clearInterval(timer);
            console.log('没有更多客人了');
        }
    },1000);
};})();



// var myRestaurant = new Restaurant();