nosex = 0;
nosey = 0;
difference = 0;
rightwristy = 0;
leftwristy = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, console.log("Model Loaded"));
    poseNet.on('pose', gotPoses);
}

function draw()
{
    document.getElementById("square_side").innerHTML = "Width And Height of square will be:" + difference + "px";
    background('#7408b6');
    fill('#F90093');
    stroke('#F90093');
    square(nosex, nosey, difference);

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nosex = " + nosex + "nosey" + nosey);

        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;

        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        difference = floor(leftwristy - rightwristy);
        console.log("leftwristx =" + leftwristx + "leftwristy = " + leftwristy + "rightwristx" + rightwristx + "rightwristy" + rightwristy + "difference" + difference);

        
        
    }
}
