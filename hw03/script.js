const number1 = prompt('type the first number');
const number2 = prompt('type the second number');
result1 = +number1 + +number2;
result2 = +number1 - +number2;
result3 = +number1 * +number2;
result4 = +number1 / +number2;

alert(`Користувач ввів ${number1} і ${number2}:
${number1}+${number2}=${result1}
${number1}-${number2}=${result2}
${number1}*${number2}=${result3}
${number1}/${number2}=${result4}`);