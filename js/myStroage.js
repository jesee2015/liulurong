function bill(market, addr, name, price, num, amount, date) {
	this.market = market;
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
	if (plus.storage.getItem('markets') == null || plus.storage.getItem('markets') == undefined) {
		var Markets = [];
		var strMarkets = JSON.stringify(Markets);
		plus.storage.setItem('markets', strMarkets);
	}
}

function getBills() {
	var strBills = plus.storage.getItem('bills');
	return JSON.parse(strBills);
}

function getMarkets() {
	var strMarkets = plus.storage.getItem('markets');
	return JSON.parse(strMarkets);
}

function getBalance() {
	var balance = plus.storage.getItem('balance');
	if (balance == null) {
		balance = 0;
	}
	console.log('from getBalance()：当前剩余' + balance);
	return parseFloat(balance);
}

function getBillsByDate(date) {
	var bills = getBills();
	return bills.filter(c => {
		return c.date == date;
	});
}

function SaveBillDate(objBillData) {
	var bills = getBills();
	bills.push(objBillData);
	var strBills = JSON.stringify(bills);
	plus.storage.setItem('bills', strBills);
	//修改总金额
	var balance = getBalance();
	balance = balance - parseFloat(objBillData.amount);
	plus.storage.setItem('balance', balance.toString());
	console.log('from SaveBillDate: 打货后剩余' + getBalance());
}

function saveMarketData(objMarketData) {
	var markets = getMarkets();
	markets.push(objMarketData);
	var strMarkets = JSON.stringify(markets);
	plus.storage.setItem('markets', strMarkets);
}

function removeBillDate(objBillData) {
	var billDatas = getBills();
	var index = billDatas.indexOf(objBillData);
	billDatas.splice(index, 1);
	var newStrBillsData = JSON.stringify(billDatas);
	plus.storage.removeItem('bills');
	plus.storage.setItem('bills', newStrBillsData);
	//修改总金额
	console.log(JSON.stringify(objBillData));
	var balance = getBalance();
	balance = balance + parseFloat(objBillData.amount);
	plus.storage.setItem('balance', balance.toString());
	console.log('删除后剩余：' + getBalance());
}

function removeMarketDate(objMarketData) {
	var marketDatas = getMarkets();
	var index = marketDatas.indexOf(objMarketData);
	marketDatas.splice(index, 1);
	var newStrMarketsData = JSON.stringify(marketDatas);
	plus.storage.removeItem('markets');
	plus.storage.setItem('markets', newStrBillsData);
}
