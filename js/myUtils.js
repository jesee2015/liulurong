function getCnDate() {
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var date = d.getDate();
}

function getTotleNum(objs) {
	var totleNum = 0;
	objs.forEach(function(val, index, objs) {
		totleNum +=parseInt(objs[index].num);
	})
	return totleNum;
}

function getAmount(objs) {
	var amount = 0;
	objs.forEach(function(val, index, objs) {
		amount +=parseInt(objs[index].amount);
	})
	return amount;
}
