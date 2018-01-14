// Functions

const printMessage = text => `Messagem: ${text}`;

const printMessage2 = text => {
  console.log(`Messagem: ${text}`);
};

const obg = (number) => ({ previous: number - 1, next: number + 1 });

console.log(printMessage('Texto da mensagem aqui!'));
printMessage2('Mensagem enviada');
console.log(obg(10));