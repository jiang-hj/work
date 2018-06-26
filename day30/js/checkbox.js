function check(str) {
    if (str === 'region') {
        for (let i = 0; i < regionBox.length; i++) {
            if (regionBox[i].checked === false) {
                regionAll.checked = false;
                return;
            }
            regionAll.checked = true;
        }
    }
    if (str === 'product') {
        for (let i = 0; i < productBox.length; i++) {
            if (productBox[i].checked === false) {
                productAll.checked = false;
                return;
            }
            productAll.checked = true;
        }
    }
}

//总选框控制 其他选择框
function checkAll(str) {
    if (str === 'region') {
        if (regionAll.checked === true) {
            for (let i = 0; i < regionBox.length; i++) {
                regionBox[i].checked = true;
            }
        } else {
            for (let i = 0; i < regionBox.length; i++) {
                regionBox[i].checked = false;
            }
        }
    }
    if (str === 'product') {
        if (productAll.checked === true) {
            for (let i = 0; i < productBox.length; i++) {
                productBox[i].checked = true;
            }
        } else {
            for (let i = 0; i < productBox.length; i++) {
                productBox[i].checked = false;
            }
        }
    }
}

//选择框选中的数量
function countChecked(checkBoxes) {
    let count = 0;
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked === true) {
            count++;
        }
    }
    return count;
}

//比较地区，商品，选择数
function compareResult() {
    let regionCount = countChecked(regionBox);
    let productCount = countChecked(productBox);
    if (regionCount === 1 && productCount === 1) {
        return 'r1p1';
    } else if (regionCount === 1 && productCount > 1) {
        return 'r1p2';
    } else if (regionCount > 1 && productCount === 1) {
        return 'r2p1';
    } else if (regionCount > 1 && productCount > 1) {
        return 'r2p2';
    }
}