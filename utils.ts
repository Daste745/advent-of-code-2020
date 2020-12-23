export async function prompt(message?: string): Promise<string> {
    if (message) {
        // Write text directly to stdout, so we don't create a new line
        Deno.stdout.write(new TextEncoder().encode(message));
    }

    const data: string = new TextDecoder().decode(await Deno.readAll(Deno.stdin));

    console.log();

    return data;
}
