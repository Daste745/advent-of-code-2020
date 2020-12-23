import { prompt } from "./utils.ts";


async function partOne(data: Array<string>): Promise<number> {
    return data.filter(line => {
        // min-max letter: password
        const [ amounts, letter, password ] = line.replace(":", "").split(" ");
        const [ min, max ] = amounts.split("-").map(x => parseInt(x, 10));
        const matchingChars: number = password.split("").filter(x => x == letter).length;

        return matchingChars <= max && matchingChars >= min;
    }).length;
}


async function partTwo(data: Array<string>): Promise<number> {
    return data.filter(line => {
        // first-second letter: password
        const [ amounts, letter, password ] = line.replace(":", "").split(" ");
        const positions = amounts.split("-").map(x => parseInt(x, 10));
        return positions
            .map(position => password[position - 1] === letter)
            .filter(x => x === true)
            .length === 1;
    }).length;
}



async function main() {
    const input: string = await prompt("Input password data: ");
    const lines: Array<string> = input.split("\n");

    console.log(`Part #1 answer: ${await partOne(lines)}`);
    console.log(`Part #2 answer: ${await partTwo(lines)}`);
}

main()
