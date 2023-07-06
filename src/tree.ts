import {Dirent} from "fs";
import {readdir} from "fs/promises"
import path from "path";




export const formater = (str: string) => {
    const parsStr = path.parse(str);
    const count = parsStr.dir.match(/\\/g);
    if (count !== null) {
        return '\u2503' + '   '.repeat(count.length) + '\u2517\u257A\u257A\u257A' + parsStr.base;
    } else {
        return 'NOT DATE';
    }
}

export const collector = async (dir: string): Promise<string[]>  => {

    const arrStr: string[] = []
    const scanner = async (pathCurrDir: string) => {
        const dir: Dirent[] = await readdir(pathCurrDir, { encoding: 'utf8', withFileTypes: true, recursive: true })
        for(const value in dir ) {
            arrStr.push(formater(path.resolve(pathCurrDir, dir[value].name)))
            if(dir[value].isDirectory()){
                await scanner(path.resolve(pathCurrDir, dir[value].name))
            }
        }
    }

    await scanner(path.resolve('./', dir))

    return arrStr;
}

export const tree = (arr: string[]): string => {
    let str = '';
    arr.forEach((el) => {
        str += `${el}\n`;
    });
    return str;

}