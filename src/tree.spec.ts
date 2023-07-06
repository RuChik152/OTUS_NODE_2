import * as path from 'path';
import {collector, formater, tree} from "./tree";


describe('Test tree.ts', () => {


    test('Test formater true', () => {
        const parsStr = path.parse('G:\\project\\OTUS\\Jest\\src');
        const count = parsStr.dir.match(/\\/g);
        const strTrue = count !== null ? '\u2503' + '   '.repeat(count.length) + '\u2517\u257A\u257A\u257A' + parsStr.base : 'NOT DATE'
        expect(formater('G:\\project\\OTUS\\Jest\\src')).toBe(strTrue)
    })

    test('Test formater false',  () => {
        const parsStr = path.parse('G:\\project\\OTUS\\Jest\\src');
        const count = parsStr.dir.match(/\\/g);
        const strTrue = count !== null ? '\u2503' + '   '.repeat(count.length) + '\u2517\u257A\u257A\u257A' + parsStr.base : 'NOT DATE'
        expect(formater('src')).not.toBe(strTrue)
    })

    test('Test formater NOT DATE', () => {
        expect(formater('str')).toBe('NOT DATE');
    })

    test('Test collector', async () => {
        const arr = [
            "┃            ┗╺╺╺index.ts",
            "┃            ┗╺╺╺tree.spec.ts",
            "┃            ┗╺╺╺tree.ts",
        ]

        expect(await collector('G:\\project\\OTUS\\Jest\\src')).toStrictEqual(arr)
    })

    test('Test tree', () => {
        const arr = [
            "┃            ┗╺╺╺index.ts",
            "┃            ┗╺╺╺tree.spec.ts",
            "┃            ┗╺╺╺tree.ts",
        ]
        const str = "┃            ┗╺╺╺index.ts\n┃            ┗╺╺╺tree.spec.ts\n┃            ┗╺╺╺tree.ts\n"
        expect(tree(arr)).toBe(str)
    })


})