const myArg = process.argv.slice(2);

const param = myArg[0].split(',').map(Number);

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

// console.log(param);
// console.log(param.length);
// console.log(Math.pow(2, param.length));
const maxPos = dec2bin(Math.pow(2, param.length) - 1).length;
// console.log('maxPos', maxPos);
const antes = '0'.repeat(maxPos);
// console.log('antes', antes);

let salida = '[[],';

if (maxPos > 1) {
    for (let i = 1; i < Math.pow(2, param.length); i++) {
        const preBin = antes + dec2bin(i).toString();
        const binarioDerecho = preBin.slice(preBin.length - maxPos);
        const binario = [...binarioDerecho].reverse().join("");
        // console.log(binario);
        salida = salida + '[';
        for(let j = 0; j < binario.length; j++) {
            if (binario[j] == 1) {
                // console.log('binario j', param[j]);
                salida = salida + `${param[j]},`;
            }
        }
        salida = salida.slice(0, -1) + '],';
    }
} else {
    salida = salida + `[${param}]`;
}

salida = salida.slice(0, -1) + ']';
console.log(salida);