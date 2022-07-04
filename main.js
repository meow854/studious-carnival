nx= 0;
ny= 0;
lwx= 0;
rwx= 0;
diff= 0;

function setup() {
    video= createCapture(VIDEO);
    video.size(550, 550);
    video.position(100, 200);
    canvas= createCanvas(500, 500);
    canvas.position(700, 230);
    posenet= ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotposes);
}

function modelloaded() {
    console.log("loaded!!! \(^_^)/")
}

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        nx= results[0].pose.nose.x;
        ny= results[0].pose.nose.y;
        console.log(nx, ny);
        lwx= results[0].pose.leftwrist.x;
        rwx= results[0].pose.rightwrist.x;
        console.log(lwx, rwx);
    }
}