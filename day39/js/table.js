
let compareTemp = compareResult();
//创建表头
function createTh() {
    // let compareTemp = compareResult();
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
// function createTable(dataArray) {
//     let table = document.createElement('table');
//     table.border = '1';
//     table.cellSpacing = '0';
//     table.id = 'myTable';
//     table.appendChild(createTh());

//     for (let i = 0; i < dataArray.length; i++) {
//         let tr = document.createElement('tr');
//         if (compareTemp === 'r1p2') {
//             let td = document.createElement('td');
//             td.textContent = dataArray[i].region;
//             tr.appendChild(td);
//             td = document.createElement('td');
//             td.textContent = dataArray[i].product;
//             tr.appendChild(td);
//         } else {
//             let td = document.createElement('td');
//             td.textContent = dataArray[i].product;
//             tr.appendChild(td);
//             td = document.createElement('td');
//             td.textContent = dataArray[i].region;
//             tr.appendChild(td);
//         }
//         for (let j = 0; j < dataArray[i].sale.length; j++) {
//             let td = document.createElement('td');
//             td.textContent = dataArray[i].sale[j];
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     return table;
// }

//显示表格
//parm = 1 时，生成正常表格，parm = -1 生成input 表格；
//创建排序后的对象数组，创建表格，修改表格格式，显示表格；
function showTable(param) {
    wrapper.innerHTML = '';
    let btns = createBtn(param);
    for(let i = 0; i < btns.length; i++)
    {
        wrapper.appendChild(btns[i]);
    }
    let dataArray = sort();
    if (dataArray.length !== 0) {
        let table = createTable(dataArray,param);
        table = editTable(table);
        wrapper.appendChild(table);
    }
}
//更改表格显示样式
function editTable(table) {
    let rows = table.rows;
    let i = rows.length - 1;
    while (i > 0) {
        let n = 1;
        while (rows[i].cells[0].textContent === rows[i - 1].cells[0].textContent && i > 0) {
            rows[i].deleteCell(0);
            n++;
            i--;
        }
        rows[i].cells[0].rowSpan = n;
        i--;
    }
    return table;
}


//创建正常表格或者，input表格， dattArray为对象数组；
function createTable(dataArray, param) {
    let table = document.createElement('table');
    table.border = '1';
    table.cellSpacing = '0';
    table.id = 'myTable';
    table.appendChild(createTh());
    // if(param === 1)
    // {
    for (let i = 0; i < dataArray.length; i++) {
        let tr = document.createElement('tr');
        tr.setAttribute('dataId',dataArray[i].id);
        if (compareTemp === 'r1p2') {
            let td = document.createElement('td');
            td.textContent = dataArray[i].region;
            tr.appendChild(td);
            td = document.createElement('td');
            td.textContent = dataArray[i].product;
            tr.appendChild(td);
        } else {
            let td = document.createElement('td');
            td.textContent = dataArray[i].product;
            tr.appendChild(td);
            td = document.createElement('td');
            td.textContent = dataArray[i].region;
            tr.appendChild(td);
        }
        for (let j = 0; j < dataArray[i].sale.length; j++) {
            let td = document.createElement('td');
            // td.className = 'sale';
            td.setAttribute('saleIndex',j);            
            if (param === -1) {
                // let input = document.createElement('input');
                // input.className = 'edit';
                let input = createInput();
                input.value = dataArray[i].sale[j];
                td.appendChild(input);
            } else {
                td.textContent = dataArray[i].sale[j];
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    } 
    return table;
}


//按需求生成button；
function createBtn(param) {
    let btns = new Array();
    let btn1 = document.createElement('input');
    let btn2 = document.createElement('input');
    let btn3 = document.createElement('input');
    btn1.type = 'button';
    btn1.value = '编辑所有';
    btn1.style = 'width: 80px; height: 30px; left: 0;';
    btn1.onclick = function() {
        showTable(-1);
    }

    btn2.type = 'button';  
    btn2.value = '保存';
    btn2.style = 'width: 38px; height: 30px; left: 0;';

    btn2.onclick = function() {
        saveAll();
        showTable(1);
    };

    btn3.type = 'button'; 
    btn3.value = '取消';
    btn3.style = 'width: 38px; height: 30px; left: 40px;';
    btn3.onclick = function() {        
        showTable(1);
    };
    
    if(param === -1){
        btns.push(btn2);
        btns.push(btn3);
    }else{
        btns.push(btn1);
    }    
    return btns;
}