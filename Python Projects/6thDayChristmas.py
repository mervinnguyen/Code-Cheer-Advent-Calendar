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