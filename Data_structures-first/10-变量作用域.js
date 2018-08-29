// function showScope() {
// 	return scope;
// }

// var scope = 'global';
// console.log(scope);
// console.log(showScope());
//scope是一个全局变量，所以在函数中可以访问，作用域链


// function showScope() {
// 	var scope = 'local';
// 	return scope;
// }

// var scope = 'global';
// console.log(scope);
// console.log(showScope());
//此时scope在函数局部作用域，所以显示local
//


function showScope() {
	scope = 'local';
	return scope;
}

var scope = 'global';
console.log(scope);
console.log(showScope());
//因为少了var关键字，所以在局部作用域中的更改，实际是改变了主程序中的scope的变量
//
////块级作用域在js中是不存在的，但是我们假设它有
///并且在函数等局部作用域中命名的局部变量在块内可见，但是离开
///这段代码块就不可见了