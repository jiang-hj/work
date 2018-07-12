
function extend(subClass,superClass) {
    var F = function() {};
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

var Cook = (function() {

    var Cook = function () {
        Cook.superClass.constructor.apply(this,arguments);
        this.dishes = [];
    }
    extend(Cook,Staff);    
    
    //厨师工作；
    //如果传入的是数组，即客人的菜单，将菜单加入；
    //菜没做饭做菜；
    Cook.prototype.work = function() {
        if(arguments[0] instanceof Array){
            console.log(arguments[0])
            this.dishes = this.dishes.concat(arguments[0]);  
            console.log(this.dishes)         
        }
        if(this.dishes.length < 1){
            console.log('厨师：今天生意不行啊，这么快就没活了');
            return;
        }
        var self = this;
        var dish = this.dishes[0];
        this.dishes.shift();
        console.log('厨师正在炒' + dish.name + '请等待' + dish.time + '秒');
        setTimeout(function() {
            console.log('厨师：' + dish.name + '做好了，给客人端过去！');
            serving(dish);                        //上菜；
            self.work();
        },dish.time * unit)
        return dish;
    }

    return Cook;
})();

var Waiter = (function() {
    var Waiter = function() {
        Waiter.superClass.constructor.apply(this,arguments);
        this.dish = null;
    }

    extend(Waiter,Staff);

    Waiter.prototype.work = function(dish) {
        if(dish instanceof Dish){
            console.log('服务员：客官，您的' + dish.name);
            return dish;
        }else if(dish instanceof Array){
            console.log('您稍等，马上给您做');
        }
        return dish;
    };

    return Waiter;
})();