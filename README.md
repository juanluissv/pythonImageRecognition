<h3>* Demo for recording live stream  to video on demand using FFmpeg </h3>
<h3>* Commercial detection script using  python computer vision library to detect start and end of ads on the stream </h3>
<p>Demo: http://stormy-escarpment-10471.herokuapp.com/#/elprograma22/1Cw2pT3f </p>
<img src="http://compression.ru/video/tv_commercial_detector/images/howto-small.png"> 


<p>
- teleprenrec.js : node js process that records live stream from m3u file, using ffmpeg to record in a local file,
moment js is use to measure the time of recording (30 minutes) wich is upload to a aws bucketeer file
</p>
<p>telecut.js: uses FFmpeg to create one image per every second (3600 images for 60 minutes) </p> 
<p>
- compare3.py : Python file that uses computer vision library (cv2) that compares the video stream frames per each second 
  (3600 for 60 minutes) with static images (ad images) to detect at what point is the start and end of a local advertising
 </p>


