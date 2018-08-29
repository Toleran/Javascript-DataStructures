function facotorial(number) {
	if (number == 1) {
		return number;
	}
	else {
		return number * facotorial(number-1);
	}
}
console.log(facotorial(5));

//函数的执行模式
//5*facotorial(4)
//5*4*facotorial(3)
//5*4*3*facotorial(2)
//5*4*3*2*facotorial(1)
//5**4*3*2*1
//当一个函数被递归调用，在递归没有完成时，函数的计算结果暂时被挂起。
//凡是可以递归定义的函数，都可以被改写为迭代式的程序