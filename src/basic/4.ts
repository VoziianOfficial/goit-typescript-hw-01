function showMessage(message: string): void {
  console.log(message);
}
//: void: Вказує, що функція не повертає значення.

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}
//(): never: Вказує, що функція не повертає значення (вона завжди викликає помилку), тому тип повернення - never.
