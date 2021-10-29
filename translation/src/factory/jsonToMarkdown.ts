
import fs from 'fs';
import _ from 'lodash';
import { DSLData, Source } from "../types";
import { isEmpty } from "../utils";
import { jsonToDSL } from "../core";


function jsonToMarkdown(sources: Source[], targetFile: string) {
  const content = jsonToDSL(sources);
  function sortByCompleteness(content: DSLData) {
    const list = Object.values(content);
    return _.orderBy(list, [(item: string[]) => item.filter(v => !isEmpty(v)).length], 'desc');
  }

  const sorted = sortByCompleteness(content);

  const header = sources.map(({ name }) => name).join(' | ') + `\n`;
  const aligns = sources.map(() => '----').join(' | ') + `\n`;
  const rows = sorted.map((row: string[]) => row.join(' | ')).join('\n');
  const MarkdownTable = header + aligns + rows;

  fs.writeFileSync(targetFile, MarkdownTable);
}



export default jsonToMarkdown;