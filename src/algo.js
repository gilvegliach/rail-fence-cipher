/**
 * Given an index i and the total number of rows k,
 * return the row index that the index i refers to.
 *
 * For example, for k = 3, and indices i's in the 
 * following grid, we return the row on the left.
 *
 * Examples: 
 * ...
 * row(2, 3) == 2
 * row(3, 3) == 1
 * row(4, 3) == 0
 * ...
 * 
 * k == 3
 * 
 * row i
 *  0: 0...4...8
 *  1: .1.3.5.7.
 *  2: ..2...6..
 *
 * @param {number} i - The given index
 * @param {number} k - The total number of rows
 * @return {number} row index corresponding to i
 */
function row(i, k) {
  return 0;
}

/**
 * Given a cleartext text and a number of rows key,
 * encrypt text with the rail fence cipher algorithm.
 *
 * @param {string} text - The cleartext.
 * @param {number} key - The total number of rows.
 *
 * @return {string} The ciphertext.
 */
function encrypt(text, key) {
  return "not-the-solution";
}

/**
 * Create a rows x cols array with all values equal to
 * 'undefined' except the rail fence pattern values,
 * which equal to marker.
 *
 * Example:
 *
 * createGrid(3, 7) == 
 *  
 *   x...x..
 *   .x.x.x.
 *   ..x...x
 *
 *
 * @param {number} rows - The number of rows of the grid
 * @param {number} cols - The number of columns of the grid
 * @return {array} The grid with the rail fence pattern.
 */
function createGrid(rows, cols, marker = 'x') {
  var grid = _.range(rows).map(function () { return [] });
  return grid;
}

/**
 * Given a rows x cols grid, in which only the values of 
 * the rail fence pattern are not undefined, fill up the
 * grid with the given text, row by row. 
 *
 * It must hold:
 * 
 *   text.length == cols
 *
 * Example:
 *
 * fillGridHorizontally(..., 3, 7, "r alfie") == 
 *  
 *   r... ..
 *   .a.l.f.
 *   ..i...e
 *
 * @param {number} grid - The grid with the rail fence pattern.
 *   Only the values of the pattern are not 'undefined'.
 * @param {number} rows - The number of rows of the grid
 * @param {number} cols - The number of columns of the grid
 * @return {array} The grid filled with the text instead of the
 *   pattern.
 *
 */
function fillGridHorizontally(grid, rows, cols, text) {
}

/**
 * Given a rows x cols grid, in which the values of 
 * the rail fence pattern are filled with the ciphertext,
 * return the cleartext zig-zaging through the grid.
 *
 * It must hold:
 * 
 *   text.length == cols
 *
 * Example:
 *
 * readGrid(..., 3, 7) == "rail fe"
 *  
 * where grid ==
 *   r... ..
 *   .a.l.f.
 *   ..i...e
 *
 * @param {number} grid - The grid with the ciphertext in
 *   the rail fence pattern.
 * @param {number} rows - The number of rows of the grid
 * @param {number} cols - The number of columns of the grid
 * @return {array} The cleartext.
 */
function readGridZigZag(grid, rows, cols) {
  return "not-the-solution";
} 

/**
 * Given a ciphertext text and the number of rows key,
 * return the clear text using the rail fence algorithm.
 *
 * @param {number} text - The ciphertext. 
 * @param {number} key - The number of rows of the grid
 * @return {array} The cleartext.
 */
function decrypt(text, key) {
  return "not-the-solution";
}
