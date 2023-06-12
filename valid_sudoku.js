/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    return new Sudoku(board).isValid();
};

/**
 * @class Sudoku
 */
var Sudoku = (function Sudoku() {
    let brd;

    /**
     * @constructor
     * @param {string[9][9]} board
     * @returns {Sudoku}
     */
    function Sudoku(board) {
        if(!new.target) throw new Error('This is a Class Use `new Sudoku(board)` keyword to create Object.');
        if(!board || !(board instanceof Array)) throw new Error('`board` required to be of type `character[][]`');
        this.board = brd = board;
    }

    /**
     * @param {number} size
     */
    function SudokuDigits(size) {
        this.digits = new Array(size);
        /**
         * @param {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'} digit
         */
        this.isAvailable = (digit) => {
            return this.digits[digit-1];
        }
        /**
         * @param {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'} digit
         */
        this.setDigit = (digit) => {
            this.digits[digit-1] = true;
        }

    }

    /**
     * @param {{row?:number, col?:number, box?:number}} index
     */
    let hasDuplicates = (index) => {
        let digits = new SudokuDigits(9);
        if(index.row!==undefined) {
            for(let ind=0;ind<9;ind++) {
                if(brd[index.row][ind]!='.') {
                    if(digits.isAvailable(brd[index.row][ind])) return true;
                    else digits.setDigit(brd[index.row][ind]);
                }
            }
        } else if(index.col!==undefined) {
            for(let ind=0;ind<9;ind++) {
                if(brd[ind][index.col]!='.') {
                    if(digits.isAvailable(brd[ind][index.col])) return true;
                    else digits.setDigit(brd[ind][index.col]);
                }
            }
        } else if(index.box!==undefined) {
            let d = Math.floor(index.box / 3), r = index.box % 3;
            let is = r*3, ie = ((r+1)*3), js=d*3, je = ((d+1)*3);
            for(let i=is,j;i<ie;i++) {
                for(j=js;j<je;j++) {
                    if(brd[i][j]!='.') {
                        if(digits.isAvailable(brd[i][j])) return true;
                        else digits.setDigit(brd[i][j]);
                    }
                }
            }
        }
        return false;
    }
    Sudoku.prototype.isValid = () => {
        for(let i=0;i<9;i++) {
            if(hasDuplicates({row:i}) || hasDuplicates({col:i}) || hasDuplicates({box:i})) return false;
        }
        return true;
    }
    return Sudoku;
}());


/*****************Sample Case*****************/
(async function run() {
    let board = [
        ['5','3','.','.','7','.','.','.','.'],
        ['6','.','.','1','9','5','.','.','.'],
        ['.','9','8','.','.','.','.','6','.'],
        ['8','.','.','.','6','.','.','.','3'],
        ['4','.','.','8','.','3','.','.','1'],
        ['7','.','.','.','2','.','.','.','6'],
        ['.','6','.','.','.','.','2','8','.'],
        ['.','.','.','4','1','9','.','.','5'],
        ['.','.','.','.','8','.','.','7','9']
    ];
    console.log('\n**************** SUDOKU ****************');
    console.log(`Sudoku Board:\n\t${board.map((row)=>row.join('  ')).join('\n\t')}\n`);
    console.log(`Answer -> ${isValidSudoku(board) ? 'This is a Valid Sudoku.' : 'This is a Wrong Sudoku.'}`);
    console.log('****************************************\n');
})();