document.write('\
<div id="mySidenav" class="sidenav">\
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>\
  <a href="../index.html" onclick="closeNav()">Introduction</a>\
  <a href="../index.html#instructions" onclick="closeNav()">How to use Zoetic</a>\
  <a href="../firstproject/firstproject.html" onclick="closeNav()">Your first project</a>\
  <a href="../menucommands/menucommands.html" onclick="closeNav()">Menu commands</a>\
  <a href="../furtherdiscussion/furtherdiscussion.html" onclick="closeNav()">Further discussion</a>\
  <a href="#"><a href="../crop/crop.html" onclick="closeNav()">Advanced</a>\
	<ul>\
	<li><a href="../crop/crop.html" onclick="closeNav()">Crop</a></li>\
	<li><a href="../layers/layers.html" onclick="closeNav()">Fun with layers</a></li>\
	</ul>\
<a href="../feedbackprivacy/feedbackprivacy.html" onclick="closeNav()">Feedback and Privacy Statement</a>\
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