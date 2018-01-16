function encrypt(message, key, module, describe) {
	var encryptValue = [],
			alert = '',
			keyBin = dec2bin(key),
			keyArray = keyBin.split(""),
			keyArrayLenght = keyArray.length - 1,
			table = '',
			d = message,
			a = d,
			c = 1;

	var	resultDescribe = describe == 1 ? 'C = ' : 'M = '; 
	var describe = describe == 1 ? 'C = M<sup>e</sup>' : 'M = C<sup>d</sup>';

	alert += describe + ' mod n = <b>' + message + '<sup>' + key + '</sup> mod ' + module + '</b></br>';
	alert += 'a =' + message + '; b =' + key + '<sub>10</sub>=<b>' + keyBin + '</b><sub>2</sub><br/>';

	table += '<table class="table">';
		table += '<tr>';
			table += '<td><b>i</b></td>';
		
			keyArray.forEach(function(element, i){
				table += '<td>' + (keyArrayLenght - i) + '</td>';
			});

		table += '</tr>';
		table += '<tr>';
			table += '<td><b>b<sub>i</sub></b></td>';
		
			keyArray.forEach(function(element, i){
				table += '<td>' + element + '</td>';
			});

		table += '</tr>';
		table += '<tr>';
			table += '<td><b>c</b></td>';
		
			keyArray.forEach(function(element, i){
				if (i) {
					if (element == 1) {
						c = c * 2 + 1;
					} else {
						c = c * 2;
					}
				}
				table += '<td>' + c + '</td>';
			});

		table += '</tr>';
		table += '<tr>';
			table += '<td><b>d</b></td>';
		
			keyArray.forEach(function(element, i){
				if (i) {
					if (element == 1) {
						d = (d * d) % (module);
						d = (a * d) % (module);
					} else {
						d = (d * d) % (module);
					}
				} else {
					d = a;
				}
				table += '<td>' + d + '</td>';
			});

		table += '</tr>';
	table += '</table>';

	alert += table;
	alert += resultDescribe + '' + d + '<br/>';

	encryptValue[0] = alert;
	encryptValue[1] = d;

	return encryptValue;
}

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function main() {
	var alert = '';
	var message = document.getElementById('povidomlennya').value != '' ? document.getElementById('povidomlennya').value : '45';
	var numberTwo = document.getElementById('KU-1').value != '' ? document.getElementById('KU-1').value : '67';
	var numberSimple = document.getElementById('KU-2').value != '' ? document.getElementById('KU-2').value : '187';

	var encryptShifr = encrypt(message, numberTwo, numberSimple, 0);

	alert += encryptShifr[0];

	document.getElementById('alert').innerHTML = alert;
}

// main();