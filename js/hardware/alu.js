export class Alu {
    constructor(){
        this.N = false;
        this.Z = false;
    }
    // controle de 2 bits
    calcula(controle, inputA, inputB){
        
        // F0 e F1 controlam qual deve ser a operação da alu
        const {F0, F1} = controle;
        let output;

        // F0=0, F1=0, alu realiza a operação A + B
        // F0=1, F1=0, alu realiza a operação A & B
        // F0=0, F1=1, alu retorna A
        // F0=1, F1=1, alu retorna !A

        if(F0 === 0 && F1 === 0){
            output = inputA + inputB;
        }
        else if (F0 === 1 && F1 === 0){
            output = inputA & inputB;
        } 
        else if(F0 === 0 && F1 === 1){
            output = inputA;
        } 
        else if(F0 === 1 && F1 === 1){
            output = ~inputA;
        }
        this.Z = (output === 0) ? 1 : 0;
        this.N = (output < 0) ? 1 : 0;

        return output;
    }

}