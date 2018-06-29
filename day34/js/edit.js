        //将对象转为数组，按选择框的数量，决定地区，商品的先后；
        function objectToArray(ob) {
            let tempArr = new Array();
            let compareTemp = compareResult();
            if (compareTemp === 'r1p2') {
                tempArr.push(ob.region);
                tempArr.push(ob.product);
            } else {
                tempArr.push(ob.product);
                tempArr.push(ob.region);
            }
            for (i = 0; i < ob.sale.length; i++) {
                tempArr.push(ob.sale[i]);
            }
            return tempArr;
        }

        //将选中的数据整理成一个二维数组；
        function checkedData() {
            let dataArr = new Array();
            for (let i = 0; i < regionBox.length; i++) {
                if (regionBox[i].checked === true) {
                    for (let j = 0; j < productBox.length; j++) {
                        if (productBox[j].checked === true) {
                            for (let k = 0; k < sourceData.length; k++) {
                                if (regionReplaceArray[i] === sourceData[k].region && productReplaceArray[j] === sourceData[k].product) {
                                    let tempArr = objectToArray(sourceData[k]);
                                    dataArr.push(tempArr);
                                }
                            }
                        }
                    }
                }
            }
            return dataArr;
        }

//对二维数组排序
        function sort() {
            let dataArr = checkedData();
            dataArr.sort(function(a,b) {
                return a[0].charCodeAt(0) - b[0].charCodeAt(0);
            });
            return dataArr;
        }

        function checkedObj() {
            let objArray = new Array();
            for (let i = 0; i < regionBox.length; i++) {
                if (regionBox[i].checked === true) {
                    for (let j = 0; j < productBox.length; j++) {
                        if (productBox[j].checked === true) {
                            for (let k = 0; k < sourceData.length; k++) {
                                if (regionReplaceArray[i] === sourceData[k].region && productReplaceArray[j] === sourceData[k].product) {                                    
                                    objArray.push(sourceData[k]);                                    
                                }
                            }
                        }
                    }
                }
            }
            return objArray;
        }