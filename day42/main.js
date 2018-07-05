function Restaurant(name, cash, seats, staffs) {
    this.name = name;
    this.cash = cash;
    this.seats = seats;
    this.staffs = staffs;

    // this.recruit = function(staff){
    //     this.staffs.push(staff);
    //     alert('欢迎' + staff.name + '加入餐馆！')
    // }

    // this.fire = function(staff){
    //     for(let i = 1; i < staff.length; i++){
    //         if(this.staffs[i] === staff){
    //             this.staffs.splice(i,1);
    //             alert(this.staffs.name + '被解雇了！')
    //         }
    //     }
    // }
}

Restaurant.prototype.hire = function (staff) {
    this.staffs.push(staff);
    alert('欢迎' + staff.name + '加入餐馆！')
}

Restaurant.prototype.fire = function (staff) {
    for (let i = 0; i < this.staffs.length; i++) {
        if (this.staffs[i] === staff) {
            alert(this.staffs[i].name + '被解雇了！');
            this.staffs.splice(i, 1);
        }
    }
}


function Staff(id, name,wage) {
    this.id = id;
    this.name = name;
    this.wage = wage;
    // this.finish = function(){
    //     alert(this.name + '完成了一次工作');
    // }
}

Staff.prototype.finish = function () {
    alert(this.name + '完成了一次工作');
}

function Waiter(id, name,wage) {
    Staff.call(this, id, name,wage);
}

extend(Waiter, Staff);

Waiter.prototype.finish = function () {
    if (arguments[0] instanceof Array) {
        console.log('记录客人点菜')//记录客人点菜；
    } else {
        console.log('上菜')//上菜；
    }
}

function Cook(id, name,wage) {
    Staff.call(this, id, name,wage)
}

extend(Cook, Staff);

Cook.prototype.finish = function () {
    console.log('做菜')//做菜；
}

function Customer() { }

Customer.prototype.orderDish = function () {
    console.log('点菜');//点菜
}

Customer.prototype.eat = function () {
    console.log('吃菜')//吃菜；
}

function Dish(name, cost, price) {
    this.name = name;
    this.cost = cost;
    this.price = price;
}


//原型继承
function extend(subType, superType) {
    subType.prototype = Object.create(superType.prototype);
    subType.prototype.constructor = subType;
}