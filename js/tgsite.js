//------------------- banner ---------------------
$(function () {
	$(".focusBox").slide({
		titCell : ".numUL li",
		mainCell : ".picUL",
		effect : "fold",
		interTime:5000,
		autoPlay : true,//自动播放开关 true、false
		trigger : "mouseover"//焦点事件触发[切换图片]开关 mouseover、click
		// hoverPause: false,//鼠标经过时暂停开关 true、false
	});
});
//------------------- 动画 ---------------------
var currServers = $('.section1 .section1-top-content .servers .hot-serversList ul li');
var currGame = $('.section2 .section2-content ul li');
// 服务器列表移入
currServers.hover(function () {
	$(this).find('.btn').stop().animate({
		backgroundColor:'#00b7ee',
		color:'#fff'
	},500)
},function () {
	$(this).find('.btn').stop().animate({
		backgroundColor:'#fff',
		color:'#00b7ee'
	},500)
});
// 火爆游戏移入
currGame.hover(function () {
	$(this).find('.btn').stop().animate({
		backgroundColor:'#00b7ee',
		color:'#fff'
	},500);
	$(this).find('.caption').stop().animate({
		backgroundColor:'rgba(0,183,238,1)',
	},500);
},function () {
	$(this).find('.btn').stop().animate({
		backgroundColor:'#fff',
		color:'#00b7ee'
	},500);
	$(this).find('.caption').stop().animate({
		backgroundColor:'rgba(0,183,238,.3)',
	},500);
});
// 明星游戏 升级竞技送现实豪礼
var currli = $('.section1 .section1-top-content .t-games .t-gamesList ul li');
currli.hover(function () {
	$(this).find('.child_pic').fadeIn(700);
},function () {
	$(this).find('.child_pic').stop().fadeOut(200);
});