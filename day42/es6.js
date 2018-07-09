//定义餐馆类；
class Restaurant {
    constructor(data) {
        this.name = data.name;
        this.cash = data.cash;
        this.seats = data.seats;
        this.staffs = data.staffs;
    }

    hire(staff) {
        this.staffs.push(staff);
        alert('欢迎' + staff.name + '加入餐馆');
    }

    fire(staff) {
        for(let i = 0; i < this.staffs.length; i++)
        {
            if(this.staffs[i] === staff)
            {
                alert(staff.name + '被解雇了');
                this.staffs.splice(i,1);
            }
        }
    }
}

class Staff {
    constructor(id,name,wage) {
        this.id = id;
        this.name = name;
        this.wage = wage;
    }

    work() {
        alert('完成一次工作');
    }
}

class Waiter extends Staff {
    constructor(id, name, wage) {
        super(id, name, wage);
    }

    finish(arg) {
        if(arg)
        {
            //记录菜名；
        }else{
            //上菜；
        }
    }
}

class Cook extends Staff {
    finish() {
        //完成一道菜；
    }
}

class Customer {
    orderDish() {
        //点菜
    }

    eat() {
        //吃菜；
    }
}

class Dish {
    constructor(name, cost, price) {
        this.name = name;
        this.cost = cost;
        this.price = price;
    }
}