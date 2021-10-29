"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToDSL = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const utils_1 = require("./utils");
function walkJson(preKeyPath, json, result, visitor) {
    const keys = Object.keys(json);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = json[key];
        const currentKeyPath = (0, utils_1.isEmpty)(preKeyPath) ? key : `${preKeyPath}.${key}`;
        if (typeof value === 'string') {
            visitor(result, currentKeyPath, value);
        }
        else if (typeof value === 'object' && value !== null) {
            walkJson(currentKeyPath, value, result, visitor);
        }
        else {
        }
    }
}
const jsonToDSL = (jsonPaths) => {
    const result = {};
    const visitor = (result, currentKeyPath, value) => {
        if (typeof result[currentKeyPath] === 'undefined') {
            result[currentKeyPath] = [];
        }
        result[currentKeyPath].push(value);
    };
    jsonPaths.forEach(({ path }) => {
        const parsedJson = fs_extra_1.default.readJsonSync(path);
        walkJson('', parsedJson, result, visitor);
    });
    return result;
};
exports.jsonToDSL = jsonToDSL;
