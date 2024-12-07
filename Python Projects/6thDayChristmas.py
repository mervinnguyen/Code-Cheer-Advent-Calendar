from turtle import *
import time
import random
from pygame import mixer

colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'white', 'black', 'pink', 'brown']

n = 45
speed(0)
pensize(2)
bgcolor('Christmas.jpg')

mixer.init() # Initialize the mixer for music
mixer.music.load('') # Load the music file (must me mp3 file)

penup()
goto(0, -130)
pendown()
left(90)
forward(3*n)
color('black', 'red')
begin_fill()
left(126)   #for position towards left side

for i in range(5):
    forward(n/5)
    right(144)
    forward(n/5)
    left(72)
end_fill()
right(126)
color("green")
backward(n*4.8)

def tree(d,s):
    pensize(4)
    if d <= 0:
        return
    forward(s)
    tree(d-1, s*.8)
    right(120)
    tree(d-3, s*.6)
    right(120)

def lengthSelect():
    return randmom..randint(5, 8)

def stars(x,y):
    hideturtle()
    col = random.choice(colors)
    l = lengthSelect()
    color(col)
    penup()
    goto(x,y)
    pendown()
    begin_fill()
    for i in range(5):
        forward(l)
        right(144)
        forward(1)
    end_fill()

tree(12,n)
backward(n/2)

pensize(2)
onscreenclick(stars, 1)

done()