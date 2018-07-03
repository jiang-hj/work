//弃用；
// function editAll() {
//     let mytable = document.getElementById('myTable');
//     if(mytable)
//     {
//         let rows = mytable.rows;
//         for(let i = 1; i < rows.length; i++)
//         {
//             let columns = rows[i].cells;
//             console.log(columns);
//             let len = columns.length;
//             for(let j = 1; j < 13; j++)
//             {
//                 console.log(len - j);
//                 let input = document.createElement('input');
//                 input.className = "edit";
//                 input.type = 'text';
//                 input.value = columns[len - j].textContent;                
//                 columns[len - j].innerHTML = '';
//                 columns[len - j].appendChild(input);
//             }
//         }
//     }
// }


function saveAll(){
    // let dataArray = sort();
    let editInputs = document.getElementsByClassName('edit');
    
    for(let i = 0; i < editInputs.length; i++)
    {
        let saleIndex = editInputs[i].parentElement.getAttribute('saleIndex');
        let dataId = editInputs[i].parentElement.parentElement.getAttribute('dataId');
        myData[dataId].sale[saleIndex] = editInputs[i].value;
    }
    setItem(myData);
}

function checkValue(ele) {
    let value = ele.value;
    if(isNaN(value) || value === '' || value < 0 || value % 1 !== 0)
    {        
        alert('输入错误，请检查');           
        return -1;
    }
}

function saveSingle() {
    let editInputs = document.getElementsByClassName('singleEdit');
    console.log();
    for(let i = 0; i < editInputs.length; i++)
    {
        let saleIndex = editInputs[i].parentElement.parentElement.getAttribute('saleIndex');
        let dataId = editInputs[i].parentElement.parentElement.parentElement.getAttribute('dataId');
        myData[dataId].sale[saleIndex] = editInputs[i].value;
    }
    setItem(myData);
}

function createInput() {
    let input = document.createElement('input');
    input.className = 'edit';
    input.onchange = function() {       
        if(checkValue(this) === -1){            
            input.style.color = '#ff5555';
        }else{
            input.style.color = 'inherit';
        }
    }
    return input;
}

function addIcon(ele) {
    if(document.getElementById('editDiv') !== null)
    {
        return;
    }
    if(ele.getElementsByTagName('button').length !== 0) 
    {        
        let icon = ele.getElementsByTagName('button')[0];
        icon.style.display = 'block';
        // console.log(ele.getElementsByTagName('button'));

        return;
    }
    ele.style.position = 'relative';  
     
    let icon = document.createElement('button');  
    
    icon.className = 'icon';
    icon.style = 'width: 24px; height: 24px; border: none; position: absolute; top: 0;right: 0; z-index: 1';
    // icon.style.width = '24px';
    // icon.style.height = '24px';
    // icon.style.border = 'none';
    // icon.style.position = 'absolute';
    // icon.style.right = '0';
    // icon.style.top = '0';    
    
    icon.style.background = 'url(img/pen.png) no-repeat 0 0';
    icon.onclick = function(e) {
        e.stopPropagation();
        // let input = createInput();        
        // input.style.backgroundColor = '#ffffff';
        // input.value = ele.textContent;
        let div = createEditDiv(this.parentElement.textContent);
        ele.appendChild(div);
        hiddenIcon(this.parentElement);
    
}   
    ele.appendChild(icon);
}

function hiddenIcon(ele) {    
    let icon = ele.getElementsByTagName('button')[0];    
    icon.style.display = 'none';
}


function createEditDiv(value) {
    let div = document.createElement('div');
    div.id = 'editDiv';
    div.style = 'width: 90px; height: 45px; position: absolute; top: -4px; left: -5px; z-index: 100; background-color: rgba(255,255,255,1); border: 2px #000000 solid;padding: 2px';

    div.onclick = function(e) {
        e.stopPropagation();
    }
    
    let input = document.createElement('input');
    let saveBtn = document.createElement('button');
    let cancelBtn = document.createElement('button');
    input.type = 'text';
    input.className = 'singleEdit';
    input.value = value;
    input.style = 'float: left;box-sizing: border-box; width: 100%; line-height: 20px; border: #60acfc 1px solid; background: none;';
    saveBtn.textContent = '保存';
    saveBtn.style = 'float: left;box-sizing: border-box; width: 50%; line-height: 18px; border: none; background: #32d3eb; color: #ffffff;';
    cancelBtn.textContent = '取消';
    cancelBtn.style = 'float: left;box-sizing: border-box; width: 50%; line-height: 18px; border: none; background: #feb64d; color: #ffffff';

    input.onkeyup = function(e) {
        if(e.keyCode === 13)
        {
            saveBtnFun();
        }else if(e.keyCode === 27)
        {
            deleteDiv();
        }
    }

    saveBtn.onclick = function() {        
        saveBtnFun();
    };
    cancelBtn.onclick = function(e) {
        deleteDiv();       
    }


    div.appendChild(input);
    div.appendChild(saveBtn);
    div.appendChild(cancelBtn);
    return div;
}

function deleteElement(ele) {
    ele.parentElement.removeChild(ele);
}


function deleteDiv() {
    let div = document.getElementById('editDiv');
    if(div)
    {
        div.parentElement.removeChild(div);
    }
}



//点击保存
function saveBtnFun() {
    let input = document.getElementsByClassName('singleEdit')[0];
        if(checkValue(input) === -1)
        {
            return;
        }else{
            saveSingle();
            showTable();
        } 
}
