$(function(){
	//解决我的发布在IE8下不兼容"last-child"导致页面显示有误
	$(".sys-wrapper .my-release-layout .my-release-list:last").addClass("last");

	//tab-layout 切换
	$changeTab = $(".tab-layout .tab-nav ul li");
	$changeTab.each(function(i){
		$(this).click(function(e){
			e.preventDefault();
			e.stopPropagation();
			$(this).addClass("active").siblings().removeClass("active");
			$(".tab-layout .tab-content div.tab-content-list").eq(i).show().siblings().hide();
		})
	});
});