window.onhashchange = show;

function show() {
    let hash = location.hash;
    if (hash.length > 1) {
        hash = hash.substr(1);
        for (let i = 0; i < hash.length; i++) {
            if (hash[i] === '1') {
                box[i].checked = true;
            }else{
                box[i].checked = false;
            }
        }        
    }
    showTable();
    clearCanvas();
    let data = checkedObj();
    if (data.length > 0) {
        drawLine(data);
    }
}


function changeHash() {
    let temp = '';
    for(let i = 0; i < box.length; i++)
    {
        if(box[i].checked === true)
        {
            temp += '1';
        }else{
            temp += '0';
        }
    }
    location.hash = temp;
}