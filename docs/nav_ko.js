document.write('\
<div id="mySidenav" class="sidenav">\
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>\
  <a href="../index_ko.html" onclick="closeNav()>소개</a>\
  <ul>\
	<li><a href="../index_ko.html#examples" onclick="closeNav()>Video examples</a></li>\
	<li><a href="../index_ko.html#onlypro" onclick="closeNav()>Professional version</a></li>\
  </ul>\
  <a href="../index_ko.html#howtouse" onclick="closeNav()>Zoetic 사용법</a>\
  <ul>\
  <li><a href="../firstproject/firstproject_ko.html" onclick="closeNav()>첫번째 프로젝트</a></li>\
  </ul>\
  <a href="../furtherdiscussion/furtherdiscussion_ko.html" onclick="closeNav()>추후 논의</a>\
  <a href="../crop/crop_ko.html" onclick="closeNav()>Advanced</a>\
	<ul>\
	<li><a href="../crop/crop_ko.html" onclick="closeNav()>Crop</a></li>\
	<li><a href="../subprojects/subprojects_ko.html" onclick="closeNav()>Sub-projects</a></li>\
	<li><a href="../layers/layers_ko.html" onclick="closeNav()">Fun with layers</a></li>\
	</ul>\
<a href="../feedbackprivacy/feedbackprivacy_ko.html" onclick="closeNav()>피드백 및 버그 알림</a>\
<a href="../feedbackprivacy/feedbackprivacy_ko.html#privacy" onclick="closeNav()>개인정보 보호설명</a>\
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