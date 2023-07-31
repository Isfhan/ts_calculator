export const questions = [
    {
        name: "num1",
        type: "number",
        message: "Enter your first number:",
        validate(input: number): string | boolean | Promise<string | boolean> {

            if (!isNaN(input)) {
                return true;
            }
            return "Please enter a valid number";
        },
    },
    {
        name: "num2",
        type: "number",
        message: "Enter your second number:",
        validate(input: number): string | boolean | Promise<string | boolean> {
            if (!isNaN(input)) {
                return true;
            }
            return "Please enter a valid number";
        },
    },
    {
        name: "method",
        type: "list",
        message: "Select which operation you want to perform",
        choices: [
            'Add',
            'Subtract',
            'Multiply',
            'Dived'
        ],
        filter(val: string) {
            return val.toLowerCase();
        },

    }
]