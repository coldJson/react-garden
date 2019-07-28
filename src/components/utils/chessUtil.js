/**
 * 生成初始棋局的二位数组
 * @param {*} rows
 * @param {*} columns
 */
export function generateSquare(rows, columns, fill = null) {
  const square = new Array(rows);
  for (let i = 0; i < rows; i++) {
    square[i] = new Array(columns);
    square[i].fill(null)
  }
  return square;
}

export function hasSomeInLine(specificNum, targetArray, matchItem) {
  if (targetArray.length < specificNum) {
    return false;
  }
  const tempArr = targetArray.map((v) => {
    return v ? v : ' ';
  });
  const tempString = tempArr.join('');
  const reg = new RegExp(`${matchItem}{${specificNum}}`);
  return reg.test(tempString);
}