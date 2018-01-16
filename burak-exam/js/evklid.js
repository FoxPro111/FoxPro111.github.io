function evqlid(smallNuber, biggestNumber) {
	var alert = '',
			rozrah = '',
			result = [];

	var y3 = smallNuber;
	var x3 = biggestNumber;

	var q = 0,
			x1 = 1,
			x2 = 0,
			y1 = 0,
			y2 = 1;

	var x1_new,
			x2_new,
			x3_new;

	if (y3 != 0) {

		alert += '<table class="table">';

		var i = 1;

		alert += '<tr>';
		alert += '<td></td>';
		alert += '<td>Q</td>';
		alert += '<td>x1</td>';
		alert += '<td>x2</td>';
		alert += '<td>x3</td>';
		alert += '<td>y1</td>';
		alert += '<td>y2</td>';
		alert += '<td>y3</td>';
		alert += '</tr>';

		alert += '<tr>';
		alert += '<td>0it</td>';
		alert += '<td>' + q + '</td>';
		alert += '<td>' + x1 + '</td>';
		alert += '<td>' + x2 + '</td>';
		alert += '<td>' + x3 + '</td>';
		alert += '<td>' + y1 + '</td>';
		alert += '<td>' + y2 + '</td>';
		alert += '<td>' + y3 + '</td>';
		alert += '</tr>';

		var j = 0;

		while(y3 != 0 && y2 !=0 && y3 !=1) {
			alert += '<tr>';


			rozrah += '<b>' + i +' Крок</b></br>';

			q = Math.floor(x3/y3);

			rozrah += 'Q = x3/y3 = ' + x3 + '/' + y3 + ' = <b>' + q + '</b><br/>';

			x1_new = y1;
			x2_new = y2;
			x3_new = y3;

			y1 = x1 - q*y1;
			y2 = x2 - q*y2;
			y3 = x3 - q*y3;

			rozrah += 'y1 = x1 - Q*y1 = ' + x1 + ' - ' + q + '*' + x1_new + ' = <b>' + y1 + '</b><br/>';
			rozrah += 'y2 = x2 - Q*y2 = ' + x2 + ' - ' + q + '*' + x2_new + ' = <b>' + y2 + '</b><br/>';
			rozrah += 'y3 = x3 - Q*y3 = ' + x3 + ' - ' + q + '*' + x3_new + ' = <b>' + y3 + '</b><br/><br/>';

			x1 = x1_new;
			x2 = x2_new;
			x3 = x3_new;

			alert += '<td>' + (i++) + 'it</td>';
			alert += '<td>' + q + '</td>';
			alert += '<td>' + x1 + '</td>';
			alert += '<td>' + x2 + '</td>';
			alert += '<td>' + x3 + '</td>';
			alert += '<td>' + y1 + '</td>';
			alert += '<td>' + y2 + '</td>';
			alert += '<td>' + y3 + '</td>';

			alert += '</tr>';
			j++;
		} 



		alert += '</table>';

		result[1] = Math.abs(x3);
		result[2] = y2;
		result[3] = y1;

		alert += '<br/>Результат:<br/> НСД(' + smallNuber + ', ' + biggestNumber + ') = ' + result[1] + '<br/>';
		alert += y3 == 1 ? smallNuber + ' * ' + result[2] + '<sup>-1</sup> mod ' + biggestNumber + ' = 1 mod ' + biggestNumber + '<br/>' : 'y3 не дорівнює 1, тому d<sup>-1</sup> mod f = ' + smallNuber + '<sup>-1</sup> mod ' + biggestNumber + ' (мультиплкативної інверсії) в даному випадку немає(чи не можна знайти, хз як правильно писати) </br>';
		alert += '<b>-d mod f</b> = (f - d) mod f = (' + biggestNumber + ' - ' + smallNuber + ') mod ' +biggestNumber + ' = ' + (biggestNumber- smallNuber) + ' mod ' +biggestNumber + '<br/><br/>';
	}

	alert += rozrah;

	result[0] = alert;

	return result;
}


function main() {
	var alert = '';
	var smallNuber = document.getElementById('d').value != '' ? document.getElementById('d').value : '35';
	var biggestNumber = document.getElementById('f').value != '' ? document.getElementById('f').value : '119';

	var evqlid_var = evqlid(smallNuber, biggestNumber);


	document.getElementById('alert').innerHTML = evqlid_var[0];
}

// main();