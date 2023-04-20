let aquarium = document.getElementById("aquarium")


let turtle = new RealTurtle.default(aquarium, {autoStart: true})

turtle.setStrokeColorRGB(255,255,0)
turtle.setFillStyle('blue')

turtle.setPosition(200, 20)


turtle.beginPath()
turtle.setFillStyle('yellow')
turtle.arc(20, 360)
turtle.closePath()
turtle.fill()

turtle.setPosition(150,150)

turtle.beginPath()
turtle.setFillStyle('blue')

    turtle.forward(50)
    turtle.right(90)
    turtle.forward(40)
    turtle.right(90)
    turtle.forward(50)
    turtle.right(90)
    turtle.forward(40)
    turtle.right(90)
    turtle.forward(50)
    turtle.right(90)
    turtle.closePath()
    turtle.fill()

turtle.beginPath()

turtle.setFillStyle('green')

turtle.left(45)
turtle.forward(30)
turtle.right(95)
turtle.forward(30)

turtle.closePath()
turtle.fill()

turtle.beginPath()
turtle.setFillStyle('black')

turtle.right(40)
turtle.forward(50)
turtle.right(90)
turtle.forward(10)

turtle.closePath()

turtle.beginPath()

turtle.right(90)
turtle.forward(20)
turtle.left(90)
turtle.forward(10)
turtle.left(90)
turtle.forward(20)
turtle.left(90)
turtle.forward(10)

turtle.closePath()
turtle.fill()

turtle.beginPath()

turtle.forward(10)
turtle.left(90)
turtle.forward(25)
turtle.left(90)

turtle.closePath()

turtle.setFillStyle('green')
turtle.beginPath()

for(let i = 0; i < 4; i++) {
    turtle.forward(10)
    turtle.right(90)
}

turtle.closePath()
turtle.fill()

turtle.forward(20)

turtle.setFillStyle('green')
turtle.beginPath()

for(let i = 0; i < 4; i++) {
    turtle.forward(10)
    turtle.right(90)
}

turtle.forward(200)

turtle.closePath()
turtle.fill()

//for (let i = 0; i < 4; i++) {
  //  turtle.forward(65)
    //turtle.right(90)
    //turtle.forward(50)
    //turtle.right(90)
    //turtle.forward(50)
//}



