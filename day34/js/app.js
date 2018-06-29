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
        if(e.target.nodeName === 'TD')
        {
        let row = e.target.parentElement;
        row.style.backgroundColor = "#efefef"        
        // console.log(row);
        console.log(getData(row));
        let data = getData(row);
        clearCanvas();
        draw(data.sale);
        drawLine(data);
        // console.log(getObj(e.target));
        // console.log(checkedObj());
        }
    }

    wrapper.onmouseout = function(e) {
        if(e.target.nodeName === 'TD')
        {
        let row = e.target.parentElement;
        row.style.backgroundColor = "#ffffff";
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