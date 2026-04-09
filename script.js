const makeChange = (c) => {
  // your name here
	let result={}
	result.q = Math.floor(c / 25);
	  c = c % 25;

  result.d = Math.floor(c / 10);
  c = c % 10;

  result.n = Math.floor(c / 5);
  c = c % 5;

  result.p = c;

	return result;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
