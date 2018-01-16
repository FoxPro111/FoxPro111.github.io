function textToBin(text) { 
	var output = [];

	for (var i = 0;i < text.length; i++) {
		var bin = text[i].charCodeAt().toString(2);
		output.push(Array(8-bin.length+1).join("0") + bin);
	} 

	return output.join("");
}

function XOR(arrayText, arrayKey) {
	var sumArray = [];

	for (var i = 0; i < arrayText.length; i++) {
		sumArray[i] = arrayText[i] ^ arrayKey[i];
	}

	return sumArray;
}

function add16(arrayText, arrayText2) {
	return (arrayText+arrayText2)%65536;
}

function bin2dec(num){
	return num.split('').reverse().reduce(function(x, y, i){
		return (y === '1') ? x + Math.pow(2, i) : x;
	}, 0);
}

function mul16(arrayText, arrayText2) {
	return (arrayText*arrayText2)%65537;
}

	function dec2bin(dec,length){
		var out = "";
		while(length--)
			out += (dec >> length ) & 1;    
		return out;  
	}

	function createBinaryString (nMask) {
  // nMask must be between -2147483648 and 2147483647
  for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 16;
       nFlag++, sMask += String(nShifted >>> 15), nShifted <<= 1);
  return sMask;
}

function main() {
	var alert = '';

	var f1 = document.getElementById('f1').value != '' ? document.getElementById('kod').value : 'AB57',
			f2 = document.getElementById('f2').value != '' ? document.getElementById('kod').value : '5678',
			z5 = document.getElementById('f1').value != '' ? document.getElementById('kod').value : 'AB01',
			z6 = document.getElementById('f1').value != '' ? document.getElementById('kod').value : '10FC';

	var arrayValue = [],
			arrayValueNew = [],
			arrayValueBin = [];

	arrayValue[0] = f1;
	arrayValue[1] = f2;
	arrayValue[2] = z5;
	arrayValue[3] = z6;



	arrayValueNew[0] = parseInt(f1, 16).toString(10);
	arrayValueNew[1] = parseInt(f2, 16).toString(10);
	arrayValueNew[2] = parseInt(z5, 16).toString(10);
	arrayValueNew[3] = parseInt(z6, 16).toString(10);


	alert += 'F1 = ' + f1 + '<sub>16</sub> = ' + arrayValueNew[0] + '<sub>10</sub><br>';
	alert += 'F2 = ' + f2 + '<sub>16</sub> = ' + arrayValueNew[1] + '<sub>10</sub><br>';
	alert += 'Z5 = ' + z5 + '<sub>16</sub> = ' + arrayValueNew[2] + '<sub>10</sub><br>';
	alert += 'Z6 = ' + z6 + '<sub>16</sub> = ' + arrayValueNew[3] + '<sub>10</sub><br>';

	f1 = arrayValueNew[0];
	f2 = arrayValueNew[1];
	z5 = arrayValueNew[2];
	z6 = arrayValueNew[3];
	
	var res1,
			res2,
			res3,
			res4;

  alert += '<table class="table table-pre">';
  alert += '<tr><td>Res1<td>(F1*Z5) mod 65537</td><td>' + (res1 = mul16(f1, z5)) + '</td></tr>';
  alert += '<tr><td>Res2<td>(Res1+F2) mod 65536</td><td>' + (res2 = add16(res1, f2)) + '</td></tr>';
  alert += '<tr><td>Res3<td>(Z6*Res2) mod 65537</td><td>' + (res3 = mul16(res2, z6)) + '</td></tr>';
  alert += '<tr><td>Res4<td>(Res1+Res3) mod 65536</td><td>' + (res4 = add16(res1, res3)) + '</td></tr>';
  alert += '</table>';

	document.getElementById('alert').innerHTML = alert;

	return false;

}
// - //

main();