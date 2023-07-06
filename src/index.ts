import {collector, tree} from "./tree";
import * as process from 'process';

const pathForDir = process.argv[2]

collector(pathForDir).then(r => console.log(tree(r)))