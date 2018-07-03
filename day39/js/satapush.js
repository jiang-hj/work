
function show() {    
    let state = location.href.split('?rp')[1];    
    if (state) {
        for (let i = 0; i < state.length; i++) {
            if (state[i] === '1') {
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


function setState() {
    let state = '';
    for(let i = 0; i < box.length; i++)
    {
        if(box[i].checked === true)
        {
            state += '1';
        }else{
            state += '0';
        }
    }
    return state;
}

function addHistory(state) {
    history.pushState(state,'','?rp' + state);
}

window.onpopstate = show;