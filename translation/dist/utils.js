"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSources = exports.isEmpty = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const glob_1 = __importDefault(require("glob"));
function isEmpty(value) {
    return value === '' || typeof value === null || typeof value === 'undefined';
}
exports.isEmpty = isEmpty;
const getSources = (sourceDir) => {
    const sourcePath = sourceDir;
    if (!fs_extra_1.default.pathExistsSync(sourcePath)) {
        throw `${sourcePath} 目录不存在`;
    }
    const result = glob_1.default.sync(`${sourcePath}/*`, {});
    return result.map(path => {
        const pathArr = path.split('/');
        return {
            name: pathArr[pathArr.length - 1],
            path: `${path}/translation.json`
        };
    });
};
exports.getSources = getSources;
