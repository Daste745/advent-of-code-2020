import { prompt } from "./utils.ts";


async function partOne(numbers: Array<number>): Promise<number | undefined> {
    for (const num of numbers) {
        for (const num2 of numbers) {
            if (num + num2 === 2020) {
                return num * num2;
            }
        }
    }
}

async function partTwo(numbers: Array<number>): Promise<number | undefined> {
    for (const num of numbers) {
        for (const num2 of numbers) {
            for (const num3 of numbers) {
                if (num + num2 + num3 === 2020) {
                    return num * num2 * num3;
                }
            }
        }
    }
}

async function main() {
    const input: string = await prompt("Input the expense report: ");
    const numbers: Array<number> = input.split("\n").map(x => parseInt(x, 10));

    console.log(`Part #1 answer: ${await partOne(numbers)}`);
    console.log(`Part #2 answer: ${await partTwo(numbers)}`);
}

main()
