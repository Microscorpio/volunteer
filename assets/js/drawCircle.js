function drawCircle(_options){
    var options = _options || {};    //获取或定义options对象;
    options.angle = options.angle || 1;    //定义默认角度1为360度(角度范围 0-1);
    options.color = options.color || '#6fb5ff';    //定义默认颜色（包括字体和边框颜色）;
    options.lineWidth = options.lineWidth || 10;    //定义默认圆描边的宽度;
    options.lineCap = 'round';    //定义描边的样式，默认为圆角
 
    var oBoxOne = document.getElementById(options.id);  //空心圆
    var oBoxSolid = document.getElementById(options.id+'_solid');   //实心圆背景
    var sCenter = oBoxOne.width / 2;    //获取canvas元素的中心点;
    var ctx = oBoxOne.getContext('2d');
    var nBegin = Math.PI / 1.2;    //定义起始角度;
    var nEnd = Math.PI * 2;    //定义结束角度;
    ctx.textAlign = 'center';    //定义字体居中;
    ctx.font = 'normal 64px Arial';    //定义字体大小字体样式;
    ctx.fillStyle = '#1e83ee'    //文字填充样式为颜色;
    var txtNum = Math.round(parseFloat(options.angle * 100)); //处理小数
    ctx.fillText(txtNum + '%', sCenter, sCenter);    //设置填充文字;
    ctx.font = '28px Arial';
    ctx.fillStyle = '#4693e4' 
    ctx.fillText('适合度', sCenter, sCenter + 40);
    ctx.lineCap = options.lineCap;
    ctx.strokeStyle = options.color;

    ctx.beginPath();    //设置起始路径，这段绘制360度背景;
    ctx.strokeStyle = options.color;
    ctx.lineWidth = 2;
    ctx.fillStyle="#0000ff";
    ctx.arc(sCenter, sCenter, (sCenter - options.lineWidth), -nBegin, nEnd, false);
    ctx.stroke();

    var imd = ctx.getImageData(0, 0, 240, 240);
    function draw(current) {    //该函数实现角度绘制画图;
        ctx.putImageData(imd, 0, 0);
        ctx.beginPath();
        ctx.lineWidth = options.lineWidth;
        ctx.strokeStyle = options.color;
        ctx.arc(sCenter, sCenter, (sCenter - options.lineWidth), -nBegin, (nEnd * current) - nBegin, false);
        ctx.stroke();
    }

    var t = 0;
    var timer = null;
    function loadCanvas(angle) {    //该函数循环绘制指定角度，实现加载动画;
        timer = setInterval(function(){
            if (t > angle) {
                draw(options.angle);
                clearInterval(timer);
            }else{
                draw(t);
                t += 0.02;
            }
        }, 20);   
    }
    loadCanvas(options.angle);    //载入百度比角度  0-1 范围;
    timer = null;

    var ctx2 = oBoxSolid.getContext('2d');//画中间实心背景圆
    ctx2.beginPath();
    ctx2.arc(sCenter, sCenter, (sCenter - options.lineWidth-16), -nBegin, nEnd, false);
    ctx2.fillStyle="#f5faff";//填充颜色
    ctx2.fill();//画实心圆
    ctx2.closePath();
}