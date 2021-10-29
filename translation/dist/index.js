"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonDirToMarkdown = void 0;
const jsonToMarkdown_1 = __importDefault(require("./factory/jsonToMarkdown"));
const utils_1 = require("./utils");
const defaultOptions = {
    sourceDir: '/Users/lumin/XY/projects/gsp-seller-fe/public/locales',
    targetFile: __dirname + '/table.md'
};
const jsonDirToMarkdown = (options = defaultOptions) => {
    const { sourceDir, targetFile } = options;
    const sources = (0, utils_1.getSources)(sourceDir);
    console.log(sources, targetFile);
    (0, jsonToMarkdown_1.default)(sources, targetFile);
};
exports.jsonDirToMarkdown = jsonDirToMarkdown;
