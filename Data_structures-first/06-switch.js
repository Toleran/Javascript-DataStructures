var a = prompt('输入月份的数字:');
var monthName;
switch (a){
	case '1':monthName = 'january'; break;
	case '2':monthName = 'Februay'; break;
	case '3':monthName = 'March'; break;
	case '4':monthName = 'April'; break;
	case '5':monthName = 'May'; break;
	case '6':monthName = 'June'; break;
	case '7':monthName = 'july'; break;
	case '8':monthName = 'August'; break;
	case '9':monthName = 'September'; break;
	case '10':monthName = 'October'; break;
	case '11':monthName = 'November'; break;
	case '12':monthName = 'December'; break;

	default:
		console.log('Bad input');
}
//未使用输出语句，完成了结果的在控制台的输出