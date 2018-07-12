function extend(subClass, superClass) {
    var F = function () {};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    subClass.superClass = superClass.prototype;
}



function Staff() {
    this.id = arguments[0].id;
    this.name = arguments[0].name;
    this.wage = arguments[0].wage;
}

var Cook = (function () {

    var Cook = function () {
        Cook.superClass.constructor.apply(this, arguments);
        this.dishes = [];
    }
    extend(Cook, Staff);

    //厨师工作；
    //如果传入的是数组，即客人的菜单，将菜单加入；
    //菜没做饭做菜；
    Cook.prototype.work = function () {
        var self = this;        
        if (arguments[0] instanceof Array) {
            console.log(arguments[0])
            this.dishes = this.dishes.concat(arguments[0]);
            console.log(this.dishes)
        }
        refreshList(this.dishes);
        if (this.dishes.length < 1) {
            setTimeout(function () {
                console.log('厨师：轻轻松松全搞定');
                say(self, (' 轻轻松松全搞定'));
                changeImg(2);
            }, 1000)

            return;
        }
        var dish = this.dishes[0];
        dish.status = '1';
        
        // this.dishes.shift();
        changeImg(1);
        console.log('厨师正在炒' + dish.name + '请等待' + dish.time + '秒');
        say(ps, ('厨师正在炒' + dish.name + '请等待' + dish.time + '秒'))
        setTimeout(function () {
            self.dishes.shift();
            dish.status = '2';
            console.log('厨师：' + dish.name + '做好了，给客人端过去！');
            say(self, ( dish.name + '做好了，给客人端过去！'),990)
            serving(dish); //上菜；
            self.work();
        }, dish.time * unit)
    }

    return Cook;
})();

var Waiter = (function () {
    var Waiter = function () {
        Waiter.superClass.constructor.apply(this, arguments);
        this.dish = null;
        this.status = -1;
    }

    extend(Waiter, Staff);

    Waiter.prototype.work = function (dish) {
        if (dish instanceof Dish) {
            console.log('服务员：客官，您的' + dish.name);
            say(this, ('客官，您的' + dish.name),1300);
            return dish;
        } else if (dish instanceof Array) {
            console.log('================');
            console.log('服务员：您稍等，马上给您做');
            say(this, ('您稍等，马上给您做'),800)
        }
        return dish;
    };

    return Waiter;
})();