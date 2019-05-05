function bill(addr, name, price, num, amount, date) {
	this.addr = addr;
	this.name = name;
	this.price = price;
	this.num = num;
	this.amount = price * num;
	this.date = date;
}

function initDate() {
	if (plus.storage.getItem('bills') == null || plus.storage.getItem('bills') == undefined) {
		var Bills = [];
		var strBills = JSON.stringify(Bills);
		plus.storage.setItem('bills', strBills);
	}
}

function getBills() {
	var strBills = plus.storage.getItem('bills');
	return JSON.parse(strBills);
}

function getBillsByDate(date) {
	var bills = getBills();
	return bills.filter(c => {
		// console.log('c.date:' + c.date);
		// console.log('date:' + date);
		return c.date == date;
	})
}

function SaveBillDate(objBillData) {
	var bills = getBills();
	bills.push(objBillData);
	var strBills = JSON.stringify(bills);
	plus.storage.setItem('bills', strBills);
}

function removeBillDate(objBillData) {
	// console.log('form myStroage file:' + JSON.stringify(objBillData));
	var billDatas = getBills();
	var index = billDatas.indexOf(objBillData);
	billDatas.splice(index, 1);
	var newStrBillsData = JSON.stringify(billDatas);
	// console.log(newStrBillsData);
	plus.storage.removeItem('bills');
	plus.storage.setItem('bills', newStrBillsData);

}
