//创建表头
function createTh() {
    let compareTemp = compareResult();
    let tempArr = ['商品', '地区', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    if (compareTemp === 'r1p2') {
        tempArr = ['地区', '商品', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    }
    let tr = document.createElement('tr');
    for (i = 0; i < tempArr.length; i++) {
        let th = document.createElement('th');
        th.textContent = tempArr[i];
        tr.appendChild(th);
    }
    return tr;
}
//创建表格
function createTable(dataArray) {    
    let table = document.createElement('table');
    table.border = '1';
    table.cellSpacing = '0';
    table.cellPadding = '10';
    table.appendChild(createTh());
    for (let i = 0; i < dataArray.length; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < dataArray[i].length; j++) {
            let td = document.createElement('td');
            td.textContent = dataArray[i][j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}
//显示表格
function showTable() {
    wrapper.innerHTML = '';
    let dataArray = sort();
    if (dataArray.length !== 0) {
        let table = createTable(dataArray);
        table = editTable(table);
        wrapper.appendChild(table);
    }
}
//更改表格显示样式
function editTable(table) {    
    let rows = table.rows;
    let i = rows.length - 1;
    while(i > 0)
    {
        let n = 1;
        while(rows[i].cells[0].textContent === rows[i - 1].cells[0].textContent && i > 0)
        {            
            rows[i].deleteCell(0);
            n++;
            i--;            
        }                
        rows[i].cells[0].rowSpan = n;
        i--;        
    }
    return table;
}