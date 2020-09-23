var linewidth=2
var myColor="black"
var canvas=false
 var ctx=false
 var prX=0
 var prY=0
 var crX=0
 var crY=0
 function canvasLoader()
{
  canvas=document.getElementById("myCanvas")//
     ctx=canvas.getContext("2d")//
     ctx.fillStyle="#FF0000"//
    console.log("hello")
    w=canvas.width//
    h=canvas.height//
    console.log(w)
    console.log(h) 
    function findXY(res,obj){
        if(res=="moveup"){
                prX=crX
                prY=crY
                crX=obj.clientX-canvas.offsetLeft//
                crY=obj.clientY-canvas.offsetTop//
                ctx.beginPath()//
                ctx.fillStyle=myColor//
                ctx.fillRect(crX,crY,2,2)//
                ctx.closePath()//
        }
        if(res=="move"){
            prX=crX
            prY=crY
            crX=obj.clientX-canvas.offsetLeft
            crY=obj.clientY-canvas.offsetTop
            draw()
    }
    function draw(){
        ctx.beginPath()
        ctx.moveTo(prX,prY)
        ctx.lineTo(crX,crY)
        ctx.strokeStyle=myColor
        ctx.linewidth=linewidth
        ctx.stroke()
        ctx.closePath()
            
           
    }
    }
    canvas.addEventListener("mousemove",function (e){
       findXY("move",e)
        // console.log("its working")
    })
    canvas.addEventListener("mouseup",function (e){
        findXY("moveup",e)
        console.log("going up")
        console.log(linewidth)
    })
    canvas.addEventListener("mousedown",function (e){
        findXY("movedown",e)
        console.log("going down")
        console.log(linewidth)
    })
    canvas.addEventListener("mouseout",function (e){
        //console.log("its working")
    })

}

function color(obj){
    switch(obj.id){
case "blue":{
  myColor="blue"

}
break
case "yellow":{
    myColor="yellow"
}
break
case "white":{
    myColor="white"
   
}
break
    }
    // if(myColor=="white"){
    //     linewidth=15
    //     console.log(linewidth)
    //     }
    //     else{
    //         linewidth=2
    //         console.log(linewidth)}
//termary operator(short hand)
myColor=="white"?linewidth=15:linewidth=2

 

}
function load(){
var canvasImage=new Image()
canvasImage.src=localStorage.canvasSaved
ctx.clearRect(0,0,700,500)
ctx.drawImage(canvasImage,0,0)
}
function save(){
    var savedCanvas=canvas.toDataURL()
    console.log(savedCanvas)
    localStorage.canvasSaved=savedCanvas
}
function cleara(){
ci=new Image()
ctx.clearRect(0,0,700,500)
ctx.drawImage(ci,0,0)

}

