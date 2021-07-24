from Naked.toolshed.shell import execute_js, muterun_js
from skimage import measure
import numpy as np
import cv2
import datetime
import json


# success = execute_js('telecut.js')
success = 'true'
print success
if success:
		print 'success'

		matches = []
		def compare_images():
			for x in range(1, 3600):

					original = cv2.imread("telecut/original.png")
					original2 = cv2.imread("telecut/original2.png")
					original3 = cv2.imread("telecut/original3.png")			
					original4 = cv2.imread("telecut/original4.png")			
					original5 = cv2.imread("telecut/original5.png")								
					original6 = cv2.imread("telecut/original6.png")													
					contrast = cv2.imread("telecut/" + str(x) + ".png")

					original = cv2.cvtColor(original, cv2.COLOR_BGR2GRAY)
					original2 = cv2.cvtColor(original2, cv2.COLOR_BGR2GRAY)
					original3 = cv2.cvtColor(original3, cv2.COLOR_BGR2GRAY)			
					original4 = cv2.cvtColor(original4, cv2.COLOR_BGR2GRAY)
					original5 = cv2.cvtColor(original5, cv2.COLOR_BGR2GRAY)																			
					original6 = cv2.cvtColor(original6, cv2.COLOR_BGR2GRAY)																			
					contrast = cv2.cvtColor(contrast, cv2.COLOR_BGR2GRAY)

					s = measure.compare_ssim(original, contrast)
					g = measure.compare_ssim(original2, contrast)
					z = measure.compare_ssim(original3, contrast)			
					y = measure.compare_ssim(original4, contrast)			
					w = measure.compare_ssim(original5, contrast)	
					c = measure.compare_ssim(original6, contrast)			


					if s > 0.50:
						print(str(datetime.timedelta(seconds=x)))
						matches.append(x)	
					if g > 0.50:
					 	print(str(datetime.timedelta(seconds=x)))
					 	matches.append(x)
					if z > 0.90:
					 	print(str(datetime.timedelta(seconds=x)))
					 	matches.append(x)													
					if y > 0.70:
					 	print(str(datetime.timedelta(seconds=x)))
					 	matches.append(x)						
					if w > 0.70:
					 	print(str(datetime.timedelta(seconds=x)))
					 	matches.append(x)					 	
					if c > 0.70:
					 	print(str(datetime.timedelta(seconds=x)))
					 	matches.append(x)					 	
			return matches 				

song = compare_images()
print(song)

def item_generator(song):
	for item in song:
	    yield item
	    yield '\n'
def write_things_to_file(song):
	with open('hello.txt', 'w') as f:
	    f.writelines(str(item_generator(song)))
write_things_to_file(song)	

with open('datos2.json', 'w') as outfile:  
	json.dump(song, outfile)

# execute_js('teleup2.js')	

# execute_js('teleimagesup.js')	









 

	
