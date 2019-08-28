var listReplace =[]
/*vowels are in the combos you can not do this!
listReplace.push(['a','あ']);
listReplace.push(['i','い']);
listReplace.push(['u','う']);
listReplace.push(['e','え']);
listReplace.push(['o','お']);
*/
listReplace.push(['ka','か']);
listReplace.push(['ki','き']);
listReplace.push(['ku','く']);
listReplace.push(['ke','け']);
listReplace.push(['ko','こ']);
listReplace.push(['sa','さ']);
listReplace.push(['shi','し']);
listReplace.push(['su','す']);
listReplace.push(['se','せ']);
//listReplace.push(['so','そ']);
lRv2('so','そ');
lRv2('6','六(roku:');
lRv2('time','時間|じかん:');


/*put stuff up here*/


/*not down here*/

function lRv2(oldW,newW){
	listReplace.push([oldW,newW]);
}

function walkTextWrap(oldWord,newWord){
	walkText(document.body)
	function walkText(node) {
		if (node.nodeType == 3) {
			for (o=0;o<listReplace.length;o++){
				node.data = 
					node
						.data
						.replace(
							RegExp(listReplace[o][0], "g")
							, listReplace[o][1]
						);
			}
		}
		if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
			for (var i = 0; i < node.childNodes.length; i++) {
				walkText(node.childNodes[i]);
			}
		}
	}
}

walkTextWrap(listReplace);
