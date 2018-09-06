document.write('\
<div id="mySidenav" class="sidenav">\
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>\
  <a href="../index.html" onclick="closeNav()">Introduction</a>\
  <ul>\
	<li><a href="../index.html#examples" onclick="closeNav()">Video examples</a></li>\
	<li><a href="../index.html#onlypro" onclick="closeNav()">Professional version</a></li>\
  </ul>\
  <a href="../index.html#howtouse" onclick="closeNav()">How to use Zoetic</a>\
  <ul>\
  <li><a href="../firstproject/firstproject.html" onclick="closeNav()">Your first project</a></li>\
  </ul>\
  <a href="../furtherdiscussion/furtherdiscussion.html" onclick="closeNav()">Further discussion</a>\
  <a href="#"><a href="../crop/crop.html" onclick="closeNav()">Advanced</a>\
	<ul>\
	<li><a href="../crop/crop.html" onclick="closeNav()">Crop</a></li>\
	<li><a href="../subprojects/subprojects.html" onclick="closeNav()">Sub-projects</a></li>\
	<li><a href="../layers/layers.html" onclick="closeNav()">Fun with layers</a></li>\
	</ul>\
<a href="../feedbackprivacy/feedbackprivacy.html" onclick="closeNav()">Feedback</a>\
<a href="../feedbackprivacy/feedbackprivacy.html#privacy" onclick="closeNav()">Privacy Statement</a>\
</div>\
<script>\
function openNav() {\
    document.getElementById("mySidenav").style.width = "250px";\
}\
\
function closeNav() {\
    document.getElementById("mySidenav").style.width = "0";\
}\
</script>\
');