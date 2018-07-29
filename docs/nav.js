document.write('\
<div id="mySidenav" class="sidenav">\
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>\
  <a href="../index.html">Introduction</a>\
  <ul>\
	<li><a href="../index.html#examples">Video examples</a></li>\
	<li><a href="../index.html#onlypro">Professional version</a></li>\
  </ul>\
  <a href="../index.html#howtouse">How to use Zoetic</a>\
  <ul>\
  <a href="../firstproject/firstproject.html">Your first project</a>\
  </ul>\
  <a href="../furtherdiscussion/furtherdiscussion.html">Further discussion</a>\
  <a href="#">Advanced</a>\
	<ul>\
	<li><a href="../crop/crop.html">Crop</a></li>\
	<li><a href="../subprojects/subprojects.html">Sub-projects</a></li>\
	<li><a href="../layers/layers.html">Fun with layers</a></li>\
	</ul>\
<a href="../feedbackprivacy/feedbackprivacy.html">Feedback</a>\
<a href="../feedbackprivacy/feedbackprivacy.html#privacy">Privacy Statement</a>\
</div>\
<script>\
function openNav() {\
    document.getElementById("mySidenav").style.width = "250px";\
	document.getElementById("main").style.marginLeft = "250px";\
}\
\
function closeNav() {\
    document.getElementById("mySidenav").style.width = "0";\
	document.getElementById("main").style.marginLeft= "0";\
}\
</script>\');
