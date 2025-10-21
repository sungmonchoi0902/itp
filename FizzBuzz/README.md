#FizzBuzz Worklog

1.I used the 'for' code to loop the numbers and checked if it worked.

`
for (let i = 1; i <= 100; i++) {
    console.log(i);
    }
	`

2.It worked and I used the 'if' code to let it appear 'Fizz' when 1 % 3 === 0

`
  if (i % 3 === 0) {
    console.log("Fizz");
    }
	`
	
3.I used 'else if' code to let it appear 'Buzz' when 1 % 5 === 0

`
  else if (i % 3 === 0) {
    console.log("Buzz");
    }
	`

4.I used 'else if' code to let it appear 'FizzBuzz' when 1 % 3 === 0 && 1 % 5 === 0.


`
  else if (1 % 3 === 0 && 1 % 5 === 0) {
    console.log("FizzBuzz");
    }
	`
	
5.Finally I used 'else' code to apear else numbers.

`
  else {
    console.log(i);
    }
  }
  `
  
6.But it doesn't work. 15 wasn't FizzBuzz but was Fizz.
  
7.So I used the 'if' code to let it appear 'FizzBuzz' when 1 % 3 === 0 && 1 % 5 === 0 firstly.
  
  `
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    }
`

8.And it worked!

`
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    }
  else if (i % 3 === 0) {
    console.log("Fizz");
    }
  else if (i % 5 === 0) {
    console.log("Buzz");
    }
  else {
    console.log(i);
    }
  }
`