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


function pay(value) {
    myRestaurant.cash = Number(myRestaurant.cash) + Number(value);
    console.log(myRestaurant.cash);
    hidden(divCustomer);
    empty = true;
    say(waiterTom,'欢迎再来！');
    refreshCash(myRestaurant.cash);
}