import jsonToMarkdown from './factory/jsonToMarkdown';
import { Options } from './types';
import { getSources } from './utils';

const defaultOptions = {
  sourceDir: '/Users/lumin/XY/projects/gsp-seller-fe/public/locales',
  targetFile: __dirname + '/table.md'
}

const jsonDirToMarkdown = (options: Options = defaultOptions) => {
  const { sourceDir, targetFile } = options;
  const sources = getSources(sourceDir)
  jsonToMarkdown(sources, targetFile);
}

export { jsonDirToMarkdown }