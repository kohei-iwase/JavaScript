// var max = 100;
//var num = 1;
//var count = 0;
//while(num < max){
//	num = num * 2;
//	count = count + 1;
//}

//alert('2をかけ続けて'　+ max + 'を越えるのに必要だった回数は'　+ count + '回です')

var user_hand = prompt('ジャンケンの手をぐー、ちょき、ぱーから選んでください。');

while ((user_hand !== "ぐー") && (user_hand !== "ちょき") && (user_hand !== "ぱー") && (user_hand !== null)){
	alert('ぐー、ちょき、ぱーから選んでください');
	user_hand = prompt('ジャンケンの手をぐー、ちょき、ぱーから選んでください');
}

var js_hand = getJShand();

var judge = winLose(user_hand, js_hand);

if(user_hand != null){
alert('あなたの選んだ手は' + user_hand + 'です。JavaScriptの選んだ手は' + js_hand + 'です。結果は' + judge + 'です。');
}else{
	alert("またチャレンジしてね");
}

function getJShand(){
	var js_hand_num = Math.floor( Math.random() * 3 );
	var hand_name;

	if(js_hand_num == 0){
		hand_name = "ぐー";
	}else if(js_hand_num == 1){
		hand_name = "ちょき";
	}else if(js_hand_num == 2){
		hand_name = "ぱー";
	}

	return hand_name;
}

function winLose(user, js){
	var winLoseStr;

	if(user == "ぐー"){
		if(js == "ぐー"){
			winLoseStr = "あいこ";
		}else if(js == "ちょき"){
			winLoseStr = "勝ち";
		}else if(js == "ぱー"){
			winLoseStr = "負け";
		}
	}else if(user == "ちょき"){
		if(js == "ぐー"){
			winLoseStr = "負けこ";
		}else if(js == "ちょき"){
			winLoseStr = "あいこ";
		}else if(js == "ぱー"){
			winLoseStr = "勝ち";
	}
}else if(user == "ぱー"){
		if(js == "ぐー"){
			winLoseStr = "勝ち";
		}else if(js == "ちょき"){
			winLoseStr = "負け";
		}else if(js == "ぱー"){
			winLoseStr = "あいこ";
		}
}
return winLoseStr;
}