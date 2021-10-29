import fse from "fs-extra";
import { DSLData, Source } from './types';
import { isEmpty } from './utils';


function walkJson(preKeyPath: string, json: Object, result: DSLData, visitor: (result: DSLData, currentKeyPath: string, value: string) => void) {
  const keys = Object.keys(json);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = json[key];
    const currentKeyPath = isEmpty(preKeyPath) ? key : `${preKeyPath}.${key}`;

    if (typeof value === 'string') {
      // 递归至叶子
      visitor(result, currentKeyPath, value)
    } else if (typeof value === 'object' && value !== null) {
      walkJson(currentKeyPath, value, result, visitor)
    } else {
      // 不做任何操作
    }
  }
}

const jsonToDSL = (jsonPaths: Source[]) => {
  const result: DSLData = {};
  const visitor = (result: DSLData, currentKeyPath: string, value: string) => {
    if (typeof result[currentKeyPath] === 'undefined') {
      result[currentKeyPath] = []
    }
    result[currentKeyPath].push(value);
  }
  jsonPaths.forEach(({ path }) => {
    const parsedJson = fse.readJsonSync(path);
    walkJson('', parsedJson, result, visitor);
  });
  return result;
}

export { jsonToDSL };