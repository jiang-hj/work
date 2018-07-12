var unit = 1000;
    t = 0.5 * unit / 1000,
    empty = true;

var menu = (function(array) {
    var tempArray = [];
    var temp;
    for(let i = 0; i < array.length; i++){
        temp = new Dish(array[i]);
        tempArray.push(temp);
    }
    return tempArray;
})(dishArray);



var myRestaurant = new Restaurant({
    name: 'myRestaurant',
    sets: 1,
    cash: 500000,
    staffs: []
});

var cookTony = myRestaurant.hire(Cook,{
    name: 'Tony',
    wage: 10000 
});

var waiterTom = myRestaurant.hire(Waiter,{
    name: 'Tom',
    wage: 8000
});

var customer;
// var customer = new Customer();

// var waiterWork = function(value) {
//     return new Promise(function(resolve,reject) {        
//         setTimeout(resolve,0.5,waiterTom.work(value));
//     })
// };
window.onload = function() {
    // begin();
    cash.textContent = myRestaurant.cash;
    document.getElementById('begin').onclick = function() {
        if(empty){
            begin();
        }
    }
}
// .then(function(value) {
//     return new Promise(function(resolve,reject) {
//         // cookTony.dishes = value;
//         console.log('完成' + value.name)
//         var dish = cookTony.work();
//         setTimeout(resolve, dish.time * unit, dish);
//     });
// })