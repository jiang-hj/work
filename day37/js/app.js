window.onload = function() {
    regionSpan.onchange = function (e) {
        let box = e.target;
        if (box.name === 'region') {
            check('region');
            showTable();
            clearCanvas();
            let data = checkedObj();
            if(data.length > 0)
            {
                drawLine(data);
            }
        }
    }

    productSpan.onchange = function (e) {
        let box = e.target;
        if (box.name === 'product') {
            check('product');
            showTable();
            clearCanvas();
            let data = checkedObj();
            if(data.length > 0)
            {
                drawLine(data);
            }
        }
    }

    regionAll.onclick = function () {
        checkAll('region');
        showTable();
        clearCanvas();
        let data = checkedObj();
        if(data.length > 0)
            {
                drawLine(data);
            }
    }

    productAll.onclick = function () {
        checkAll('product');
        showTable();
        clearCanvas();
        let data = checkedObj();
        if(data.length > 0)
            {
                drawLine(data);
            }
    }

    wrapper.onmouseover = function(e) {
        // console.log(e.target.nodeName === 'TD')
        let ele = e.target; 
        ele.getAttribute('saleIndex')
        if(ele.getAttribute('saleIndex'))
        {
        let row = e.target.parentElement;
        row.style.backgroundColor = "#efefef" 
              
        // console.log(row);
        // console.log(getObj(td));
        // let data = getData(row);
        let data = getObj(ele);
        clearCanvas();
        draw(data.sale);
        drawLine(data);
        // console.log(getObj(e.target));
        // console.log(checkedObj());
        addIcon(ele);
        e.target.onmouseleave = function() {
            if(this.getElementsByClassName('icon').length !== 0)
            {
            hiddenIcon(this);
            }
            this.parentElement.style.backgroundColor = "inherit";
            document.getElementById('main').innerHTML = '';
            clearCanvas();
            let data = checkedObj();
            if(data.length > 0)
            {
                drawLine(data);
            }   
        }
        }
    }

    // wrapper.onmouseout = function(e) {
        
    //     if(e.target.nodeName === 'TD')
    //     {
    //     let row = e.target.parentElement;
    //     // row.style.backgroundColor = "#ffffff";
    //     document.getElementById('main').innerHTML = '';
        
     
    //     }
    // }
    window.onclick = function(e) {
        let div = document.getElementById('editDiv');
        this.console.log(div);
        if(div)
        {
            deleteElement(div);
        }
    }
  
}