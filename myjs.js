window.onload = function() {
	var contain = document.getElementById('content');
	var getli = contain.getElementsByTagName('li');
	var setem = ["很不满意", "不满意", "一般", "满意", "非常满意"];
	var gettxt = contain.getElementsByTagName('div')[0];
	var describe = document.getElementById('describe');
	var setp = ["差得太离谱，与卖家描述的严重不符，非常不满",
		"部分有破损，与卖家描述的不符，不满意",
		"质量一般，没有卖家描述的那么好",
		"质量不错，与卖家描述的基本一致，还是挺满意的",
		"质量非常好，与卖家描述的完全一致，非常满意"
	];
	var iStar = i = iScore = 0;
	for (i = 1; i <= getli.length; i++) {
		getli[i - 1].index = i;
		//鼠标移过显示分数
		getli[i - 1].onmouseover = function() {
			getscore(this.index);
			//浮动层显示
			describe.style.display = "block";
			//计算浮动层位置
			describe.style.left = describe.offsetLeft + this.index * 32 + "px";
			//匹配浮动层文字内容
			describe.innerHTML = "<b>" + this.index + " 分</b> <br>" + setp[i - 1];

		};
		getli[i - 1].onmouseout = function() {
			getli[i - 1].style.backgroundPosition = '0 2px';
			describe.style.display = "none"
			describe.style.left = 90 + "px";
		};
		getli[i - 1].onclick = function() {
			iStar = this.index;
			describe.style.display = 'none';
			gettxt.innerHTML = "<b>" + this.index + "分</b> (" + setp[i - 1] + ")";
		}

	}

	function getscore(j) {
		iStar = iScore || j;
		for (i = 0; i < j; i++) {
			getli[i].style.backgroundPosition = i < iScore ? "0 2px" : "0 -26px";
		}
	}

};