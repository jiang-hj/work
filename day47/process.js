
//进行点菜；
var order = function() {  
    if(waiterTom.status == -1){
    move(t);
    }                          
    return new Promise(function(resolve,reject) {
        setTimeout(resolve, 0.5 * unit, customer.ordered());
    })
};

//传菜单
var pass = function(value) {
    move(t) 
    return new Promise(function(resolve,reject) {        
        setTimeout(resolve, 500,waiterTom.work(value));
    });
};


//开始 流程；
var begin = function() {
    customer = new Customer();
    appear(divCustomer);                //开始，客人出现；
    empty = false;
    if(waiterTom.status == -1){
        move(t);
    }
    say(waiterTom,('客官，给您菜单'),1200);
    new Promise(function(resolve,reject){
        console.log('客人坐了下来，开始点菜');
        say(customer,'客人坐了下来，开始点菜',2000)
        setTimeout(resolve, 3 * unit);
        // resolve();
    })    
    .then(order)
    .then(pass)
    .then(function(value) {
    console.log(value);
    cookTony.work(value);
    })
}

//上菜流程；
var serving = function (dish) {
    
    var begin = new Promise(function(resolve,reject){   
        var temp = 1000 * t;                        //t定义在 main.js中，服务员移动一次需要t秒；   
        if(waiterTom.status == 1){
            temp = 2 * temp;
            move(t);
        }
        setTimeout(resolve, temp, waiterTom.work(dish));
    });
    begin
    .then(function() {
        // customer.dishes.push(value);
        move(t);
        if(customer.isEating === false){
            customer.eat();
        }
        if(cookTony.dishes.length > 0)
        {            
            move(t);
        }
    })
}