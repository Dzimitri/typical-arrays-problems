
exports.min = function min (array) {
	if (array === undefined || array.length === 0) return 0;
	else{
		let min = array[0];
		for (let i = 1; i < array.length; i++)
			if(min>array[i])
			min=array[i];
	return min;
	}
};

exports.max = function max (array) {
	if (array === undefined || array.length === 0){return 0;}

	return Math.max(...array);
	 
	
};

exports.avg = function avg (array) {
  	if (array === undefined || array.length === 0) return 0;
	return array.reduce((sum, current) => sum + current) / array.length;
};
