


import _, { values } from 'lodash';

import { xlsxToDSL } from "../core";


function xlsxToJson(sourceFile: string, targetDir: string) {
  try {
    const json = xlsxToDSL('/Users/lumin/lumin.repo/tools/translation/example/output/myfile.xlsx');
    console.log(json);
    console.log('导出完毕!')
  } catch (error) {
    throw '导出失败:' + error
  }
}



export default xlsxToJson;