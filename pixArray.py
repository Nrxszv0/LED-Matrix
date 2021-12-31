from PIL import Image
import os
import PIL
import glob
import cv2
import numpy as np

def rgb2hex(r,g,b):
    return '#{:02x}{:02x}{:02x}'.format(r, g, b)

pic = cv2.imread("pixil-frame-0.png")
pic[30:40,30:40] = [0,255,255]
# np_pic = np.array(pic)
# print(np_pic)
# print(np_pic.ndim)
row = 0
col = 0
# colors = [[0]*40]*40
colors = [[0 for i in range(40)] for j in range(40)]
# cv2.imshow('img',pic)
# cv2.waitKey(0)
# cv2.destroyAllWindows()
for r in pic:
    row+=1
    col = 0
    for c in r:
        col+=1
        sRow  = str(row)
        sCol = str(col)
        
        print("pixel:" +sRow +" " + sCol +" ")
        print(c)
        red = c[2]
        green = c[1]
        blue = c[0]
        color = str(rgb2hex(red,green,blue)) #change to 0x and all caps
        color = color.upper()
        color = color.replace("#","0x")
        colors[row-1][col-1] = color
        print(color)
        print("red:" + str(red) + " green:" + str(green)+ " blue:" + str(blue))
print(colors)

clrs = str(colors)

clrs = clrs.replace("[", "{")
clrs = clrs.replace("]", "}")

textfile = open("pic.txt", "w")
a = textfile.write(clrs)
textfile.close()
# print(pic.size)

