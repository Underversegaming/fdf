noseX=0;
noseY=0;
function preload(){
mustach_nose=loadImage('https://i.postimg.cc/3rbnNR2v/Screenshot-2022-01-24-183759.png');
}
function setup(){
    canvas=createCanvas(500,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
      console.log(results);
      noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
      console.log("nose x="+results[0].pose.nose.x);
      console.log("nose y="+results[0].pose.nose.y);
    }
}
function modelLoaded(){
    console.log("poseNet is successfuly initialized");
}
function draw(){
image(video,0,0,500,400);
image(mustach_nose,noseX+100,noseY+50,50,50);
}
function take_snapshot(){
save('mymustachimage.jpg');
}