var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
  var number = Math.random()
  if(number < 0.5){
  makeRect(0,0,200,200, "#1B2B2F", 1)
  makeCircle(100, 50, 25, "#3380B5", 1)
  makeCircle(150,30 , 10, "#778471" ,1)
  makeRect(85,50,20,10,"#399C0E", 1)
  makeCircle(85,55,5,"#399C0E",1 )
  makeCircle(105,55,5, "#399C0E", 1)
  makeRect(95,35,20,10,"#399C0E")
  makeCircle(95,40,5,"#399C0E", 1)
  makeCircle(114,40,5,"#399C0E", 1)
  makeRect(95,33,20,10,"#399C0E")
  makeCircle(95,38,5,"#399C0E",1)
  makeCircle(114,38,5,"#399C0E", 1)
  makeRect(100,62,15,6,"#399C0E",1)
  makeCircle(100,65,3,"#399C0E", 1)
  makeCircle(115,65,3,"#399C0E",1)
  makeCircle(130,28,1,"white",1)
  makeCircle(120,21,2,"white",1)
  makeCircle(120,21,2,"white",1)
  makeCircle(38,47,4,"white",1)
  makeCircle(18,17,2,"white",1)
  makeCircle(37,27,4,"white",1)
  makeCircle(135,49,3,"white",1)
  makeCircle(65,81,2,"white",1)
  makeCircle(24,59,3,"white",1)
  makeCircle(65,48,1,"white",1)
  makeCircle(54,37,2,"white",1)
  makeCircle(150,76,4,"white",1)
  makeCircle(153,68,1,"white",1)
  makeCircle(139,76,2,"white",1)
  makeLine(25, 25, 50, 50, "aqua", 2, 1)
  
} else {
  makeCircle(50,30 , 10, "#778471" ,1)
  makeRect(0,0,200,200, "#1B2B2F", 1)
  makeCircle(100, 50, 25, "#3380B5", 1)
  makeRect(85,50,20,10,"#399C0E", 1)
  makeCircle(85,55,5,"#399C0E",1 )
  makeCircle(105,55,5, "#399C0E", 1)
  makeRect(95,35,20,10,"#399C0E")
  makeCircle(95,40,5,"#399C0E", 1)
  makeCircle(114,40,5,"#399C0E", 1)
  makeRect(95,33,20,10,"#399C0E")
  makeCircle(95,38,5,"#399C0E",1)
  makeCircle(114,38,5,"#399C0E", 1)
  makeRect(100,62,15,6,"#399C0E",1)
  makeCircle(100,65,3,"#399C0E", 1)
  makeCircle(115,65,3,"#399C0E",1)
  makeCircle(130,28,1,"white",1)
  makeCircle(120,21,2,"white",1)
  makeCircle(120,21,2,"white",1)
  makeCircle(38,47,4,"white",1)
  makeCircle(18,17,2,"white",1)
  makeCircle(37,27,4,"white",1)
  makeCircle(135,49,3,"white",1)
  makeCircle(65,81,2,"white",1)
  makeCircle(24,59,3,"white",1)
  makeCircle(65,48,1,"white",1)
  makeCircle(54,37,2,"white",1)
  makeCircle(150,76,4,"white",1)
  makeCircle(153,68,1,"white",1)
  makeCircle(139,76,2,"white",1)
  makeCircle(50,30,10,"#778471",1)
}
}
// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
  var number= Math.random()
  if(number<0.5){
    makeRect(0,0,200,200, "black", 1)
    makeLine(150, 50, 50, 50, "aqua", 2, 0.7)
    makeCircle(100, 50, 25, "#e05135", 1)
}else{
  makeCircle(160,40,10,"#778471",1)
}
}
// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
  makeRect(0,0,200,200, "black", 1)
  makeCircle(100, 50, 25, "#9D4109", 1)
  makeLine(150, 50, 50, 50, "brown", 2, 0.9)

}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var rando = Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    if(rando < 0.33){
        createFirstScene()


    // Else, if the number is less than 0.67, call the function to create your second scene.
    }else if (rando < 0.67){
        createSecondScene()

    // Else, call the function to create your third scene.
    }else{
        createThirdScene()

}
}


// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}
