#!/usr/bin/env node

import { program } from 'commander';
import { FileType, getAbsolutePath, getTargetFile } from '../src/utils';

import { jsonDirToMarkdown, jsonDirToCSV, jsonDirToExcel } from '../src/index';

function setup() {
  program.version('0.0.1');

  program
    .command('export')
    .description('导出需要翻译的文件')
    .alias('ex')
    .option('-s, --sourceDir <path>', '指定 locales 目录。例如：/Users/lumin/XY/projects/gsp-operate-fe/public/locales')
    .option('-t, --targetDir <path>', '指定输出的目录')
    .option('-ot, --output-type <Markdown|Excel|CSV>', '指定导出文件的类型.')
    .option('-f, --file <name>', '输出的文件名称，不包含后缀')
    .action((options) => {
      const outFileName = options.file ? options.file : 'output_' + new Date().getTime();
      const params = {
        sourceDir: getAbsolutePath(options.sourceDir),
        targetFile: getTargetFile(getAbsolutePath(options.targetDir), outFileName, options.outputType)
      };
      switch (options.outputType) {
        case FileType.csv:
          jsonDirToCSV(params)
          break;
        case FileType.excel:
          jsonDirToExcel(params);
          break;
        case FileType.markdown:
          jsonDirToMarkdown(params);
          break;
        default:
          throw `${options.outputType} 导出文件类型不支持`
      }
    });


  program.parse(process.argv);
}

setup();