status="";
objects=[];

function preload(){
    img=loadImage("marker.jpg");
}


function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    

}

function modelLoaded(){
    status="true";
    console.log("Model is Loaded");
    objectDetector.detect(img, gotResult);
    
    
}
function gotResult(error, results){
    if(error){
        console.log(error)

    }
    console.log(results)
    objects=results;
}
function draw(){
    objectDetector=ml5.objectDetector(img, modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    image(img,0,0,640,420);
    if(status !=""){
        for(i=0; i< objects.length;i++){
            document.getElementById("status").innerHTML="Status : Object Detected";
            fill("red");
            percent=floor(objects[i].confidence * 100);
            text(objects[i].confidence * 100);
            noFill();
            stroke("red");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function back(){
    window.location="index.html";
}