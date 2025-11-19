export function calculateMathExpression(expression: string): number {
    const tokens = parseTokens(expression);
    return evaluate(tokens);
}

export function evaluate(tokens: Token[]): number {
    let res = [...tokens];

    for (let index; (index = res.findIndex((el) => el.type === 'op' && el.value === '*')); ) {
        if (index === -1) break;

        const lhs = res[index - 1]?.value;
        if (!lhs || typeof lhs !== 'number') throw new TypeError(`expected number before *`);

        const rhs = res[index + 1]?.value;
        if (!rhs || typeof rhs !== 'number') throw new TypeError(`expected number after *`);

        const left = res.slice(0, index - 1);
        const right = res.slice(index + 2);

        res = [...left, {type: 'number', value: lhs * rhs}, ...right];
    }

    return res
        .filter((token) => token.type === 'number')
        .reduce((prev, curr) => prev + curr.value, 0);
}

type TokenType = 'number' | 'op';

type Token =
    | {
          type: 'number';
          value: number;
      }
    | {
          type: 'op';
          value: string;
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
