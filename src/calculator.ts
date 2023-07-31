export class Calculator {


    num1: number;
    num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }


    /**
     * Add Numbers
     */
    public add(): number {
        return this.num1 + this.num2;
    }


    /**
    * Subtract Numbers
    */
    public subtract(): number {
        return this.num1 - this.num2;
    }


    /**
     * Multiply Numbers
     */
    public multiply(): number {
        return this.num1 * this.num2;
    }

    
    /**
    * Dived Numbers
    */
    public dived(): number {
        return this.num1 / this.num2;
    }

}