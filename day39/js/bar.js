function draw(data) {
    if(!data)
    {
        return;
    }
    let father = document.getElementById('main');
    let svgWidth = father.getAttribute('width');
    let svgHeight = father.getAttribute('height');
    
    father.innerHTML = '';
    let dataLength = data.length;
    let rectWidth = svgWidth - 0.5;
    let rectHeight = svgHeight -0.5;
    let axisWidth = rectWidth - 70;
    let axisHeight = rectHeight -100;
    let O = [50.5,350.5];               //原点坐标；
    let pillarWidth = Math.floor(axisWidth / dataLength)/2;
    let pillarDiff = pillarWidth;
    let axisColor = "#333333";
    let pillarColor = "#60acfc";
    let MAX = 0;
    for (let i = 0; i < dataLength; i++)
    {
        MAX = MAX > Number(data[i]) ? MAX : data[i];        
    }
    
    let ratios = (axisHeight-10)/MAX;

    let rect = document.createElementNS("http://www.w3.org/2000/svg","rect");    
    rect.setAttribute("width",rectWidth);
    rect.setAttribute("height",rectHeight);
    rect.setAttribute("style","fill:transparent;strok-width:1;stroke:black");

    // let xAxis = document.createElementNS("http://www.w3.org/2000/svg","line");
    // xAxis.setAttribute("x1",50.5);
    // xAxis.setAttribute("x2",50.5 + axisWidth);
    // xAxis.setAttribute("y1",350.5);
    // xAxis.setAttribute("y2",350.5);
    // xAxis.setAttribute("stroke-width",1);
    // xAxis.setAttribute("stroke",axisColor);

    let xAxis = document.createElementNS("http://www.w3.org/2000/svg","path");
    xAxis.setAttribute("d","M" + O[0] + " " + O[1] + "h" + axisWidth);
    // yAxis.setAttribute("stroke-width",1);
    xAxis.setAttribute("stroke",axisColor);

    father.appendChild(xAxis);

    // let yAxis = document.createElementNS("http://www.w3.org/2000/svg","line");
    // yAxis.setAttribute("x1",50)
    // yAxis.setAttribute("x2",50);
    // yAxis.setAttribute("y1",350);
    // yAxis.setAttribute("y2",350 - axisHeight);
    // yAxis.setAttribute("stroke-width",1);
    // yAxis.setAttribute("stroke",axisColor);
    let yAxis = document.createElementNS("http://www.w3.org/2000/svg","path");
    yAxis.setAttribute("d","M" + O[0] + " " + O[1] + "v" + "-" + axisHeight);
    // yAxis.setAttribute("stroke-width",1);
    yAxis.setAttribute("stroke",axisColor);
    
    father.appendChild(yAxis);
    
    for(let i = 0; i < dataLength; i++)
    {
        let temH = Math.round(data[i] * ratios);
        let x = (i+1) * pillarDiff + i * pillarWidth + 50;
        let y = 350 - temH;
        let pill = document.createElementNS("http://www.w3.org/2000/svg","rect");
        pill.setAttribute("x",x);
        pill.setAttribute("y",y);
        pill.setAttribute("width",pillarWidth);
        pill.setAttribute("height",temH);
        pill.setAttribute("fill",pillarColor);
        father.appendChild(pill);
    }
    // console.log(rect);
    // console.log(father);
    father.appendChild(rect);
}