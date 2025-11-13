export function calculateMathExpression(expression: string): number {
    const tokens = parseTokens(expression);
    const tree = parseAst(tokens);
    return evaluate(tree);
}

export function evaluate(_tree: Tree): number {
    return 0;
}

type Tree = {};

export function parseAst(_tokens: Token[]): Tree {
    return {};
}

type TokenType = 'number' | 'op';

type Token = {
    type: TokenType;
    value: number | string;
};

export function parseTokens(input: string): Token[] {
    const output: Token[] = [];
    let acc = '';

    for (const char of input) {
        const type = getTokenType(char);
        switch (type) {
            case 'number':
                acc += char;
                break;
            case 'op':
                output.push(
                    {
                        type: 'number',
                        value: parseFloat(acc),
                    },
                    {
                        type: 'op',
                        value: char,
                    },
                );
                acc = '';
                break;
        }
    }

    if (acc) {
        output.push({
            type: 'number',
            value: parseFloat(acc),
        });
    }

    return output;
}

export function getTokenType(char: string): TokenType {
    switch (char) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
            return 'number';
        case '+':
        case '*':
            return 'op';
        default:
            throw new TypeError(`unexpected token \`${char}\``);
    }
}
