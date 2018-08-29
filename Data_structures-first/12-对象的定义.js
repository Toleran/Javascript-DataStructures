//通过构造函数定义属性和声明，在构造函数后面紧跟方法的定义
function Checking(amount) {
	this.balance = amount; //属性
	this.despoit = despoit; //对象
	this.withdraw = withdraw;//对象
	this.toString = toString;//对象
}

//使用this关键字将方法和属性绑定在一个对象的实例上
function despoit(amount) {
	this.balance+=amount;
}
function withdraw(amount) {
	if (amount<=this.balance) {
		this.balance-=amount;
	}
	if (amount>this.balance) {
		console.log('Insufficient funds');
	}
}
function toString() {
	return 'Balance:'+this.balance;
}


//测试   定义和使用checking对象
var account = new Checking(500); 
//定义一个对象
account.despoit(1000);
console.log(account.toString());

account.withdraw(750);
conosle.log(account.toString());

account.withdraw(800);
conosle.log(account.toString());
