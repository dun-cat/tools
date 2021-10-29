"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const lodash_1 = __importDefault(require("lodash"));
const utils_1 = require("../utils");
const core_1 = require("../core");
function jsonToMarkdown(sources, targetFile) {
    const content = (0, core_1.jsonToDSL)(sources);
    function sortByCompleteness(content) {
        const list = Object.values(content);
        return lodash_1.default.orderBy(list, [(item) => item.filter(v => !(0, utils_1.isEmpty)(v)).length], 'desc');
    }
    const sorted = sortByCompleteness(content);
    const header = sources.map(({ name }) => name).join(' | ') + `\n`;
    const aligns = sources.map(() => '----').join(' | ') + `\n`;
    const rows = sorted.map((row) => row.join(' | ')).join('\n');
    const MarkdownTable = header + aligns + rows;
    fs_1.default.writeFileSync(targetFile, MarkdownTable);
}
exports.default = jsonToMarkdown;
