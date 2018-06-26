regionSpan.onchange = function (e) {
    let box = e.target;
    if (box.name === 'region') {
        check('region');
        showTable();
    }
}

productSpan.onchange = function (e) {
    let box = e.target;
    if (box.name === 'product') {
        check('product');
        showTable();
    }
}

regionAll.onclick = function () {
    checkAll('region');
    showTable();
}

productAll.onclick = function () {
    checkAll('product');
    showTable();
}