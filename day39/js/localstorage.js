function setItem(data) {
    let temp = JSON.stringify(data);
    localStorage['data'] = temp;    
}


//提取本地存储数据，若本地无数据，使用定义数据，并在给个数据对象添加id属性；
function getItem() {
    if(localStorage['data'])
    {
        console.log('from local');
        return JSON.parse(localStorage['data']);
    }else{
        let dataArray = new Array();
        for(let i = 0; i < sourceData.length; i++)
        {
            let temp = sourceData[i];
            temp.id = i;
            dataArray.push(temp);
        }
        console.log('from js');
        return dataArray;
    }
}