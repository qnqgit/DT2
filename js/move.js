var dsq;
function move (element,targetVal,speed) {
	window.clearInterval(dsq);
	dsq = window.setInterval(function () {
		var leftVal = element.offsetLeft;
		if (leftVal == targetVal) {
			window.clearInterval(dsq);
			return;
		}
		if ( Math.abs(targetVal - leftVal) < speed ) {
				element.style.left = targetVal + 'px';
		}else {
			if ( targetVal - leftVal > 0) {
				leftVal = leftVal + speed;
			}else{
				leftVal = leftVal - speed;
			}
			element.style.left = leftVal + 'px';
		}
	},100);
}


var dsqq;
function movee (element,targetVal,speed) {
	window.clearInterval(dsqq);
	dsqq = window.setInterval(function () {
		var leftVal = element.offsetLeft;
		if (leftVal == targetVal) {
			window.clearInterval(dsqq);
			return;
		}
		if ( Math.abs(targetVal - leftVal) < speed ) {
				element.style.left = targetVal + 'px';
		}else {
			if ( targetVal - leftVal > 0) {
				leftVal = leftVal + speed;
			}else{
				leftVal = leftVal - speed;
			}
			element.style.left = leftVal + 'px';
		}
	},100);
}

