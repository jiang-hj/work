var weekday_CHE = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
var weekday_ENG = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

// function nowTime() {
//     let time = new Date();
//     return time;
// }

// function toArray(time) {
//     var timeArr = new Array;
//     timeArr.push(time.getFullYear());
//     timeArr.push(time.getMonth());
//     timeArr.push(time.getDate());
//     timeArr.push(time.getDay());
//     timeArr.push(time.getHours());
//     timeArr.push(time.getMinutes());
//     timeArr.push(time.getSeconds());
//     return timeArr;
// }

function dateStr(time,i) {    
    let str;
    switch(i)
    {
    case 1:    
        str = time.getFullYear() +'年 ' + fomat(time.getMonth() + 1) + '月 ' + fomat(time.getDate()) + '日 ' + weekday_CHE[time.getDay()];
        break;
    case 2:
        str = time.getFullYear() +'-' + fomat(time.getMonth() + 1) + '-' + fomat(time.getDate()) + ' ' + weekday_ENG[time.getDay()];
        break;
    }
    return str;
}

function timeStr(time,i) {
    let str;
    switch(i)
    {
        case 1:
        str = fomat(time.getHours()) + ':' + fomat(time.getMinutes()) + ':' + fomat(time.getSeconds());
        break;
        case 2:
        if(time.getHours() > 12)
        {
            str = fomat(time.getHours()-12) + ':' + fomat(time.getMinutes()) + ':' + fomat(time.getSeconds()) + 'PM';
        }else{
            str = fomat(time.getHours()) + ':' + fomat(time.getMinutes()) + ':' + fomat(time.getSeconds()) + 'AM';
        }
        break;
    }
    return str;
}

function dateAndTimestr(time,i,j) {
    let temp = dateStr(time,i) + ' ' + timeStr(time,j);
    return temp;
}

function fomat(n) {
    return n < 10 ? '0' + n : n ;
}




