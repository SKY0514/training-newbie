let input;

solveThis(ex1);

function ex1() {
  console.log(input);
}

function ex2() {
  ex2Output(input.split(" "));
}

function ex2Output([a, b]) {
  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
}

function ex3() {
  ex2Output(input.split(" "));
}

function ex3Output([str, n]) {
  console.log(str.repeat(n));
}

function ex4() {
  ex3Output(input.split(" "));
}

function ex4Output() {
  let arr = input.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase();
    } else {
      arr[i] = arr[i].toUpperCase();
    }
  }
  console.log(arr.join(""));
}

function ex5() {
  console.log(`!@#$%^&*(\\'"<>?:;`);
}

function ex6() {
  ex5Output(input.split(" "));
}

function ex6Output([a, b]) {
  console.log(`${a} + ${b} = ${Number(a) + Number(b)}`);
}

function ex7() {
  ex7Output(input.split(" "));
}

function ex7Output([str1, str2]) {
  console.log(`${str1}${str2}`);
}

function ex8() {
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
  }
}

function ex9() {
  ex9Output(input.split(" "));
}

function ex9Output(n) {
  if (n % 2 === 0) {
    console.log(`${n} is even`);
  } else console.log(`${n} is odd`);
}

function solveThis(solveFunction) {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", function (line) {
    input = [line][0];
  }).on("close", solveFunction);

  return rl;
}

////////////////////////////////////////////////////

function ex10(my_string, overwrite_string, s) {
  let arr = my_string.split("");
  arr.splice(s, overwrite_string.length, overwrite_string);
  return arr.join("");
}

function ex11(str1, str2) {
  let arr = [];
  for (let i = 0; i < str1.length; i++) {
    arr.push(str1[i] + str2[i]);
  }
  return arr.join("");
}

function ex12(arr) {
  return arr.join("");
}

function ex13(my_string, k) {
  return my_string.repeat(k);
}

function ex14(a, b) {
  let fnum = Number(String(a) + String(b));
  let snum = Number(String(b) + String(a));

  if (fnum >= snum) {
    return fnum;
  } else return snum;
}

function ex15(a, b) {
  let fnum = Number(String(a) + String(b));
  let snum = 2 * a * b;

  let op = fnum >= snum ? fnum : snum;
  return op;
}

function ex16(num, n) {
  return num % n === 0 ? 1 : 0;
}

function ex17(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

function ex18(n) {
  let arr = [];
  for (let i = 1; i < 101; i++) {
    arr.push(i);
  }
  if (n % 2 === 1) {
    arr = arr.filter((el) => el <= n && el % 2 === 1);
    const result = arr.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0);
    return result;
  } else {
    arr = arr.filter((el) => el <= n && el % 2 === 0);
    const result = arr.reduce(function add(sum, currValue) {
      return sum + currValue ** 2;
    }, 0);
    return result;
  }
}

function ex19(ineq, eq, n, m) {
  const op = ineq + eq;

  let result;
  let answer;

  switch (op) {
    case ">=":
      result = n >= m;
      break;
    case "<=":
      result = n <= m;
      break;
    case ">!":
      result = n > m;
      break;
    case "<!":
      result = n < m;
      break;
  }

  if (result) {
    answer = 1;
  } else answer = 0;

  return answer;
}

function ex20(a, b, flag) {
  // if (flag) {
  //   return a + b;
  // } else return a - b;

  // 공통된 부분과 조건문으로 변경되는 부분을 나눠서 생각하면 코드를 이해하는데 더 도움이 된다!
  // 공통되는 부분 => return a
  // 변경되는 부분 => b 또는 -b
  let c = -b;
  if (flag) {
    c = b;
  }
  return a + c;
}

function ex21(code) {
  // let mode = 0;
  // let arr = code.split('');
  // const retCode = arr.filter((value, idx) => {
  //   if(value === "1") {
  //    mode = 1
  //   } else {
  //     mode = 0
  //   }
  //   if(mode === 1) {
  //    return idx % 2 === 1
  //   } else {
  //     return idx % 2 === 0
  //   }
  // }).join('')
  // 잘 안 풀려서 다른 문제부터 풀고 다시 풀어보겠습니다😥
}

function ex22(a, d, included) {
  let arr = [a];
  let idxArr = [];
  let count = 0;

  for (let i = 0; i < included.length - 1; i++) {
    arr.push((a += d));
  }
  included.map((item, idx) => {
    if (item === true) {
      idxArr.push(idx);
    }
  });

  for (let i = 0; i < idxArr.length; i++) {
    count += arr[idxArr[i]];
  }

  return count;
}
