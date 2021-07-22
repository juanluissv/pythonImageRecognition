<h3>* Demo for recording live stream video to video on demand using FFmpeg </h3>
<h3>* Commercial detection script using  python computer vision library to detect start and end of ads on the stream </h3>
<img src="https://pyimagesearch.com/wp-content/uploads/2014/06/compare_original_contrast.jpg"> 


<p>
- ddrec.js : node js process that records live stream from m3u file, using ffmpeg to record in a local file,
moment js is use to measure the time of recording (30 minutes) wich is upload to a aws bucketeer file
</p>
<p>drcut.js: uses FFmpeg to create one image per every second (1800 images for 30 minutes) </p> 
<p>
- dr.py : Python file that uses computer vision library (cv2) that compares the lives stream frames per each second 
  (1800 for 30 minutes) with static images (ad images) to detect at what point is the start and end of a local advertising
 </p>


