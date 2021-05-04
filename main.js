XCoordinate = 0;
YCoordinate = 0;

function preload()
{
    img = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    Posenet = ml5.poseNet(video,ModelLoaded);
    Posenet.on("pose",poseIt)
}

function ModelLoaded()
{
    console.log("PoseNet is Initiallized");
}

function poseIt(p)
{
    if (p.length > 0)
    {
        console.log(p);
      
        XCoordinate = p[0].pose.nose.x-125;
        YCoordinate = p[0].pose.nose.y-40;
    }
}

function draw()
{
    console.log("Ml5 version - "+ml5.version);
    image(video,0,0,400,400);
    image(img,XCoordinate,YCoordinate,45,45);
}