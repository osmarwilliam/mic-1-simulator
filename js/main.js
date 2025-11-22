import {Alu} from './core/alu.js'
const alu = new Alu();

const toHex = (num) => (num >>> 0).toString(16).toUpperCase().padStart(8, '0');
// --- Cenario 1: Passar B (Identity) ---
// F0=0, F1=1, alu retorna A
let res1 = alu.calcula({F0: 0, F1: 1},0x12345678, 0xDEADBEEF);
console.log(`Teste Passar B: ${toHex(res1)} (Esperado: DEADBEEF) | Z=${alu.Z} N=${alu.N}`);

// --- Cenario 2: (A + B) ---
// F0=0, F1=0, alu realiza a operação A + B

let res2 = alu.calcula({ F0: 0, F1: 0}, 0, 10);
console.log(`Teste A+B: ${res2} (Esperado: 10)`);

// --- Cenario 3: !A ---
// F0=1, F1=1, alu retorna !A
let res3 = alu.calcula({F0: 1, F1: 1}, 5, 7);
console.log(`Teste !A: ${res3} (!5)`);

// --- Cenario 4: Subtração (B - A) ---
// Sinais: F0=1, F1=0, alu realiza a operação A & B
let H = 2;
let B = 10;
let res4 = alu.calcula({F0: 1, F1: 0},H, B);
console.log(`Teste Subtração 10 - 2: ${res4} (Esperado: 8)`);
