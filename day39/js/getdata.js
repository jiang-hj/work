//
function getData(row) {    
    let ths = row.parentElement.getElementsByTagName('th');
    let tds = row.getElementsByTagName('td');  
    let length = tds.length;  
    let dataArray = new Array();
    let dataObj = {
        region: null,
        product: null,
        sale: dataArray
    }
    if(length === 14)
    {
        for(let i = 2; i < length; i++)
        {
            dataArray.push(tds[i].innerHTML);
        }
        if(ths[0].innerHTML === '商品')
        {
            dataObj.product = tds[0].innerHTML;
            dataObj.region = tds[1].innerHTML;
        }else if(ths[0].innerHTML === '地区'){
            dataObj.product = tds[1].innerHTML;
            dataObj.region = tds[0].innerHTML;
        }
    }else if(length === 13)
    {
        for(let i = 1; i < length; i++)
        {
            dataArray.push(tds[i].innerHTML);
        }
        if(ths[0].innerHTML === '商品')
        {            
            dataObj.region = tds[0].innerHTML;
            do{
                row = row.previousElementSibling;
                tds = row.getElementsByTagName('td');                              
            }while(tds.length === 13)                
            dataObj.product = tds[0].innerHTML;            
        }else if(ths[0].innerHTML === '地区'){
            dataObj.product = tds[0].innerHTML;
            do{
                row = row.previousElementSibling;
                tds = row.getElementsByTagName('td');               
            }while(tds.length === 13)                
            dataObj.region = tds[0].innerHTML;            
        }

    }
/*    if(length === 13)
    {
        
        do{
            row = row.previousElementSibling;
            tds = row.getElementsByTagName('td');
            // console.log(row);
            // console.log(tds);
        }while(tds.length === 13) 
        // console.log(tds.length)       
        dataArray.unshift(tds[0].innerHTML);
    }
    if(ths[0].innerHTML === '商品')
    {
        let temp;
        temp = dataArray[0];
        dataArray[0] = dataArray[1];
        dataArray[1] = temp;
    } */

    return dataObj;
}

//获取某单元格数据所在的对象；
function getObj(td) {
    let row = td.parentElement;
    let tds = row.getElementsByTagName('td');
    let ths = row.parentElement.getElementsByTagName('th');
    let product,region;
    if(ths[0].innerHTML === '地区')
    {
        if(tds.length === 14)
        {
            region = tds[0].innerHTML;
            product = tds[1].innerHTML;
        }else if(tds.length === 13){
            product = tds[0].innerHTML;
            do{
                row = row.previousElementSibling;
                tds = row.getElementsByTagName('td');           
            }while(ths.length === 13)
            region = ths[0].innerHTML;
        }
    }else if(ths[0].innerHTML === '商品'){
        if(tds.length === 14)
        {
            region = tds[1].innerHTML;
            product = tds[0].innerHTML;
        }else if(tds.length === 13){
            region = tds[0].innerHTML;
            do{
                row = row.previousElementSibling;
                ths = row.getElementsByTagName('td');           
            }while(ths.length === 13)
            product = ths[0].innerHTML;
        }
    }
    for(let i = 0; i < sourceData.length; i++)
    {
        if(sourceData[i].region === region && sourceData[i].product === product)
        {
            return sourceData[i];
        }
    }
}