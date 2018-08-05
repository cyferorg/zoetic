document.write('\
<div id="mySidenav" class="sidenav">\
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>\
  <a href="../index_ko.html">Introduction</a>\
  <ul>\
	<li><a href="../index_ko.html#examples">Video examples</a></li>\
	<li><a href="../index_ko.html#onlypro">Professional version</a></li>\
  </ul>\
  <a href="../index_ko.html#howtouse">How to use Zoetic</a>\
  <ul>\
  <li><a href="../firstproject/firstproject_ko.html">Your first project</a></li>\
  </ul>\
  <a href="../furtherdiscussion/furtherdiscussion_ko.html">Further discussion</a>\
  <a href="#">Advanced</a>\
	<ul>\
	<li><a href="../crop/crop_ko.html">Crop</a></li>\
	<li><a href="../subprojects/subprojects_ko.html">Sub-projects</a></li>\
	<li><a href="../layers/layers_ko.html" onclick="closeNav()">Fun with layers</a></li>\
	</ul>\
<a href="../feedbackprivacy/feedbackprivacy_ko.html">피드백 및 버그 알림</a>\
<a href="../feedbackprivacy/feedbackprivacy_ko.html#privacy">개인정보 보호설명</a>\
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