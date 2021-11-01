import jsonToCSV from './factory/jsonToCSV';
import jsonToExcel from './factory/jsonToExcel';
import jsonToMarkdown from './factory/jsonToMarkdown';
import { Options } from './types';
import { getSources } from './utils';

const defaultOptions = {
  sourceDir: '',
  targetFile: ''
}

const jsonDirToMarkdown = (options: Options = defaultOptions) => {
  const { sourceDir, targetFile } = options;
  const sources = getSources(sourceDir)
  jsonToMarkdown(sources, targetFile);
}

const jsonDirToCSV = (options: Options = defaultOptions) => {
  const { sourceDir, targetFile } = options;
  const sources = getSources(sourceDir)
  jsonToCSV(sources, targetFile);
}
const jsonDirToExcel = (options: Options = defaultOptions) => {
  const { sourceDir, targetFile } = options;
  const sources = getSources(sourceDir)
  jsonToExcel(sources, targetFile);
}

export { jsonDirToMarkdown, jsonDirToCSV, jsonDirToExcel }