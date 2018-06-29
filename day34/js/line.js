    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let axisX = canvas.width -70;
    let axisY = canvas.height -100;
    let O = [50.5,350.5];    

    let pointR = 2;

    let pointColor = "#ffffee";
    ctx.fillStyle = pointColor; 
    ctx.lineWidth = 1;   
    
    ctx.save();
    
    function axis() {
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#555566';
        ctx.beginPath();
        ctx.moveTo(O[0],O[1]);
        ctx.lineTo(O[0] + axisX,O[1]);
        ctx.moveTo(O[0],O[1]);        
        ctx.lineTo(O[0],O[1] - axisY);
        ctx.strokeRect(0,0,canvas.width,canvas.height);    
        ctx.stroke();
        ctx.closePath();    
    }

    let lineColor = ['#60acfc','#32d3eb','#5bc49f','#feb64d','#ff7c7c','#9287e7','#668ed6','#27a1ea','#b55cbd'];

    /*
    function drawLine(array) {
        let MAX = 0;
        // console.log(array[0].length);
        if(array[0].length === 12)
        {
            for(let i = 0; i < array.length; i++)
            {
                for(let j = 0; j < array[i].length; j++)
                {
                    MAX = MAX > Number(array[i][j]) ? MAX : Number(array[i][j]);
                }
            }
            for(let i = 0; i < array.length; i++)
            {
                line(array[i],MAX);
            }
        }else{
            for(let i = 0; i < array.length; i++)
                {
                    MAX = MAX > Number(array[i]) ? MAX : Number(array[i]);
                    // console.log(MAX + " : " + array[i])
                }
            line(array,MAX);
        }
        // console.log(MAX);
    }
    */

    function line(array,MAX) {
        let length = array.length;
        let diff = axisX / length;
        // console.log("begin:" + ctx.lineWidth);
        

        // let MAX = 0;
        // for(let i = 0; i < length; i++)
        // {
        //     MAX = MAX > Number(array[i]) ? MAX : array[i]; 
        // }        

        let rata = (axisY - 10) / MAX;
        ctx.lineWidth = 2;

        ctx.beginPath();
        for(let i = 0; i < length; i++)
        {          
            let h = Math.floor(rata * array[i]);            
            ctx.lineTo(i * diff + O[0], O[1] - h);
        }       
        ctx.stroke();
        ctx.closePath();
        for(let i = 0; i < length; i++)
        {
            let h = Math.floor(rata * array[i]);
            ctx.beginPath();
            ctx.arc(i * diff + O[0], O[1] - h, pointR , 0 , 6.3 ,false);
            ctx.stroke();
            ctx.fill();
        }
        // ctx.restore();
        // console.log("end:" + ctx.lineWidth);
    }


    function drawLine(objArray) {
        let MAX = 0;
        // console.log(objArray.length);
        if(objArray.length !== undefined)
        {
            axis();
            
            for(let i = 0; i < objArray.length; i++)
            {
                for(let j = 0; j < objArray[i].sale.length; j++)
                {
                    MAX = MAX > Number(objArray[i].sale[j]) ? MAX : Number(objArray[i].sale[j]);
                }
            }
            for(let i = 0; i < objArray.length; i++)
            {
                ctx.strokeStyle = lineColor[i];
                line(objArray[i].sale,MAX);                
            }
        }
        else if(objArray.length === undefined){
            axis();            
            for(let i = 0; i < objArray.sale.length; i++)
                {
                    MAX = MAX > Number(objArray.sale[i]) ? MAX : Number(objArray.sale[i]);
                    // console.log(MAX + " : " + array[i])
                }
            ctx.strokeStyle = lineColor[5];
            line(objArray.sale,MAX);
            
        }
        // console.log(MAX);
    }

    function clearCanvas() {
        ctx.clearRect(-1,-1,canvas.width,canvas.height);
    }



