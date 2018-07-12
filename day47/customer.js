var Customer = (function() {
    var Customer = function(){
        this.dishes = [];
        this.isEating = false;
        this.cost = 0;
    };

    Customer.prototype.eat = function() {        
        if(this.dishes.length < 1){
            console.log('客人吃饱了，付完钱，愉快地走了');
            say(this,('客人吃饱了，付完钱，愉快地走了'))
            pay(this.cost);            
            return;
        }
        var self = this,
            dish = this.dishes[0];
        if(dish.status !== '2')
        {
            console.log('客人大声喊： 菜怎么还没好，我桌上的菜都吃完了，再不上菜，我掀桌子了~~');
            say(this,('客人大声喊： 菜怎么还没好，我桌上的菜都吃完了，再不上菜，我掀桌子了~~'))
            this.isEating = false;
            return;
        }
        this.isEating = true;
        console.log('客人正在吃' + dish.name);
        say(this,('客人正在吃' + dish.name))
        this.dishes.shift();
        setTimeout(function() {
            self.eat();
        }, 3 * unit)
        // console.log('吃菜'); //吃菜
    }

    Customer.prototype.ordered = function() {
        var menuArray = [],
            len = menu.length,
            num = Math.floor(Math.random()*len + 1),  //点菜的数量；
            result = [],                                   //随机点菜的结果；
            index = differentRandom(len,num),        //菜单下标；
            tempDish,
            word = '';

            console.log('客人看了看菜单：'); //点菜
            for(let i = 0; i < index.length; i++){
                tempDish = menu[index[i]];
                tempDish.status = '0';
                this.cost = Number(this.cost) + Number(tempDish.price);
                result.push(tempDish);
                console.log(tempDish.name); //点菜
                word += tempDish.name + ',';
            }
            this.dishes = result;
            say(this,word);
            return result;  
    }

    return Customer;
})();