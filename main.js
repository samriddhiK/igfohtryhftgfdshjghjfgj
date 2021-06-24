function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(400, 350);
    canvas.position(560,100);


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#89CFF0');

    document.getElementById("square_side").innerHTML = "Width And Height of a Sqaure will be = " + diffrence +"px";
    fill('#90093');
    stroke('#F90093');
    sqaure(noseX, noseY, diffrence); 
}
function modelLoaded() {
    console.log('poseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseX );

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    diffrence = floor(leftWristX - rightWristX);

    console.log("leftWristX = " + leftWristX + " rightWristX ="+ rightWristX + " diffrence = " + diffrence);
}
}
    }

