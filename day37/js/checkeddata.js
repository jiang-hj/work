//将对象转为数组，按选择框的数量，决定地区，商品的先后；弃用；
// function objectToArray(ob) {
//     let tempArr = new Array();
//     let compareTemp = compareResult();
//     if (compareTemp === 'r1p2') {
//         tempArr.push(ob.region);
//         tempArr.push(ob.product);
//     } else {
//         tempArr.push(ob.product);
//         tempArr.push(ob.region);
//     }
//     for (i = 0; i < ob.sale.length; i++) {
//         tempArr.push(ob.sale[i]);
//     }
//     return tempArr;
// }

//将选中的数据整理成一个二维数组；弃用；改用checkedObj()；
// function checkedData() {
//     let dataArr = new Array();
//     for (let i = 0; i < regionBox.length; i++) {
//         if (regionBox[i].checked === true) {
//             for (let j = 0; j < productBox.length; j++) {
//                 if (productBox[j].checked === true) {
//                     for (let k = 0; k < myData.length; k++) {
//                         if (regionReplaceArray[i] === myData[k].region && productReplaceArray[j] === myData[k].product) {
//                             let tempArr = objectToArray(myData[k]);
//                             dataArr.push(tempArr);
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return dataArr;
// }

//对二维数组排序
// function sort() {
//     let dataArr = checkedData();
//     dataArr.sort(function (a, b) {
//         return a[0].charCodeAt(0) - b[0].charCodeAt(0);
//     });
//     return dataArr;
// }

function sort() {
    let dataArr = checkedObj();
    // if(compareResult() === 'r1p1')
    // {
    //     dataArr.sort(function(a,b) {
    //         return a.region.charCodeAt(0) - b.region.charCodeAt(0);
    //     });
    // }
    // else{
    dataArr.sort(function(a,b) {
        return a.product.charCodeAt(0) - b.product.charCodeAt(0);
    });
// }
    return dataArr;
}

//获取所选的数据对象；
function checkedObj() {
    let objArray = new Array();
    for (let i = 0; i < regionBox.length; i++) {
        if (regionBox[i].checked === true) {
            for (let j = 0; j < productBox.length; j++) {
                if (productBox[j].checked === true) {
                    for (let k = 0; k < myData.length; k++) {
                        if (regionReplaceArray[i] === myData[k].region && productReplaceArray[j] === myData[k].product) {
                            objArray.push(myData[k]);
                        }
                    }
                }
            }
        }
    }
    return objArray;
}