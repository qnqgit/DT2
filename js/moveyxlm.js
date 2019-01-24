// var dsq;
// function move (element,targetVal,speed) {
// 	window.clearInterval(dsq);
// 	dsq = window.setInterval(function () {
// 		var leftVal = element.offsetLeft;
// 		if (leftVal == targetVal) {
// 			window.clearInterval(dsq);
// 			return;
// 		}
// 		if ( Math.abs(targetVal - leftVal) < speed ) {
// 				element.style.left = targetVal + 'px';
// 		}else {
// 			if ( targetVal - leftVal > 0) {
// 				leftVal = leftVal + speed;
// 			}else{
// 				leftVal = leftVal - speed;
// 			}
// 			element.style.left = leftVal + 'px';
// 		}
// 	},100);
// }
/*
	element：代表移动的元素
	targetVal：目标移动的距离
	speed：每次，移动速度，移动距离

 */
//定义全局变量dsq
var dsq;
function movee (element,targetVal,speed) {

	//在创建定时器事前，要把上个定时器清除
	window.clearInterval(dsq);
	// console.log(dsq);
	dsq = window.setInterval(function () {
		//获取元素左边的距离
		var leftVal = element.offsetLeft;
		//到了指定的距离要停止定时器
		if (leftVal == targetVal) {
			window.clearInterval(dsq);
			return;
		}
		//如果目标地址targetVal - 左边距离leftVal 小于 挪动一次的距离【speed】，说明剩下的距离
		//不够在挪动一次，此时我们把目标targetVal直接设置给div的left，就不会出现左右晃动
		//如果足以挪动一次，就按照以前的方式挪动
		if ( Math.abs(targetVal - leftVal) < speed ) {
				element.style.left = targetVal + 'px';
		}else {
			//移动
			// leftVal = leftVal + speed;//???正负移动
			// 如果目标地址tatgetVal减去leftVal大于0，说明要往正方向移动
			// 如果目标地址targetVal减去leftVal小于0，说明要往反方向移动
			if ( targetVal - leftVal > 0) {
				leftVal = leftVal + speed;
			}else{
				leftVal = leftVal - speed;
			}
			//赋值给div
			element.style.left = leftVal + 'px';
		}
		
		
	},100);

}




