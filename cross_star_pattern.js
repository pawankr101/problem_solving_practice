/**
 * @param {number} n this is the length of side
 */
function drawPattern(width, height) {
    let pattern = '\t';
    let xs = (-1)*(width/2), xe = (width/2);
    let ys = (-1)*(height/2), ye = (height/2);
    for(let y=ye,x;y>=ys;y-=1) {
        for(x=xs;x<=xe;x+=1) {
            if(y===0 || x===0 || Math.abs(y)===Math.abs(x)) pattern += "* ";
            else pattern += "  ";
        }
        pattern += "\n\t";
    }
    console.log(pattern);
}

/*****************Sample Case*****************/
(async function run() {
    let width=100, height=100;
    console.log('\n********** Cross Star Pattern **********');
    console.log(`Width: ${width}, Height: ${height}\n`);
    drawPattern(width, height);
    console.log('****************************************\n');
})();