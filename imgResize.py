from PIL import Image
import os
import PIL
import glob
import cv2

pic = Image.open("tinyLemon.jpg")
print(pic.size)

# img = cv2.imread("Min Lemon.PNG")
# h,w = img.shape[:2]
# newH,newW = 40,40
# resizeImg = cv2.resize(img,(40,40))
# cv2.imshow('original',img)
# cv2.imshow('resized',resizeImg)
# cv2.imwrite('tinyLemon.jpg',resizeImg)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

