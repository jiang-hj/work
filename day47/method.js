function differentRandom(len,num) {             //生成 num 个，0 - (len-1)之间不同的数字；
    var tempArray = [],
        result = [],
        index,
        temp;

    if(len < num) {
        console.log('需要获取的数字太多');
        return;
    }
    for(let i = 0; i < len; i++){               //生成一个数组，里面数字为 0 - (len-1)；
        tempArray.push(i);
    }

    for(let j = 0; j < num; j++){
        index = Math.floor(Math.random() * tempArray.length);   //随机产生index,获取tempArray中的数字；
        result.push(tempArray[index]);                         //将获取的数字推入result；
        tempArray.splice(index,1);                             //将已已经取到的数字从数组中删除，以免被再次取到；  
    }

    return result;                                              //返回结果
}

//上菜方法；


function command(ob,method) {
    ob[method]();
}





//进行点菜；
var order = function() {                            
    return new Promise(function(resolve,reject) {
        setTimeout(resolve,0,customer.ordered());
    })
};

//传菜单或上菜；
var pass = function(value) {
    return new Promise(function(resolve,reject) {        
        setTimeout(resolve,0.5,waiterTom.work(value));
    });
};


//开始 流程；
var begin = function() {
    var begin = new Promise(function(resolve,reject){
        console.log('客人坐了下来，开始点菜');
        setTimeout(resolve, 3 * unit)
    });
    begin
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
        console.log('客人坐了下来，开始点菜');
        setTimeout(resolve, 1 * unit, waiterTom.work(dish));
    });
    begin
    .then(function(value) {
        customer.dishes.push(value);
        customer.eat();
    })
}