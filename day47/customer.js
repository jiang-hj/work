var Customer = (function() {
    var Customer = function(){
        this.dishes = [];
    };

    Customer.prototype.eat = function() {
        if(this.dishes.length < 1){
            console.log('客人吃饱了，愉快地走了');
            return;
        }
        var self = this;
        console.log('客人正在吃' + this.dishes[0].name);
        this.dishes.shift();
        setTimeout(function() {
            self.eat();
        }, 3 * unit)
        console.log('吃菜'); //吃菜
    }

    Customer.prototype.ordered = function() {
        var menuArray = [],
            len = menu.length,
            num = Math.floor(Math.random()*len + 1),  //点菜的数量；
            result = [],                                   //随机点菜的结果；
            index = differentRandom(len,num);        //菜单下标；

            console.log('客人开始点菜'); //点菜
            for(let i = 0; i < index.length; i++){
                result.push(menu[index[i]]);
                console.log(result[i].name); //点菜
            }

            return result;  
    }

    return Customer;
})();