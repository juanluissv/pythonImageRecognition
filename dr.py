from Naked.toolshed.shell import execute_js, muterun_js
from skimage import measure
import numpy as np
import cv2
import datetime
import json


success = execute_js('drcut.js')
print success
if success:
		print 'success'

		matches = []
		def compare_images():
			for x in range(1, 1800):

					original = cv2.imread("dr/original.png")

					original2 = cv2.imread("dr/original5.png")
					original3 = cv2.imread("dr/original4.png")			
					original4 = cv2.imread("dr/original6.png")			
					contrast = cv2.imread("telecut/" + str(x) + ".png")
					
					original = cv2.cvtColor(original, cv2.COLOR_BGR2GRAY)
					original2 = cv2.cvtColor(original2, cv2.COLOR_BGR2GRAY)
					original3 = cv2.cvtColor(original3, cv2.COLOR_BGR2GRAY)			
					original4 = cv2.cvtColor(original4, cv2.COLOR_BGR2GRAY)							
					contrast = cv2.cvtColor(contrast, cv2.COLOR_BGR2GRAY)

					s = measure.compare_ssim(original, contrast)
					g = measure.compare_ssim(original2, contrast)
					z = measure.compare_ssim(original3, contrast)			
					y = measure.compare_ssim(original4, contrast)			

					if s > 0.60:
						print(str(datetime.timedelta(seconds=x)))
						matches.append(x)	
					if g > 0.50:
					 	print(str(datetime.timedelta(seconds=x)))
					 	matches.append(x)
					if z > 0.60:
						print(str(datetime.timedelta(seconds=x)))
						matches.append(x)													
					if y > 0.95:
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

execute_js('drup.js')	

execute_js('drimagesup.js')	









 

	
