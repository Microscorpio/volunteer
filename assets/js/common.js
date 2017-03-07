$(function(){
	//解决我的发布在IE8下不兼容"last-child"导致页面显示有误
	$(".sys-wrapper .my-release-layout .my-release-list:last").addClass("last");
});