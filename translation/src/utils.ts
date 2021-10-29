
import fse from "fs-extra";
import glob from 'glob';

export function isEmpty(value: any) {
  return value === '' || typeof value === null || typeof value === 'undefined'
}

export const getSources = (sourceDir: string) => {
  const sourcePath = sourceDir;
  if (!fse.pathExistsSync(sourcePath)) {
    throw `${sourcePath} 目录不存在`
  }
  const result = glob.sync(`${sourcePath}/*`, {});
  return result.map(path => {
    const pathArr = path.split('/');
    return {
      name: pathArr[pathArr.length - 1],
      path: `${path}/translation.json`
    }
  })
}

