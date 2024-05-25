/**
 * @param {number} n this is the length of side
 */
function drawPattern(width, height, resolution=1) {
    let pattern = '\t';
    let xs = (-1)*(width/2), xe = (width/2);
    let ys = (-1)*(height/2), ye = (height/2);
    for(let y=ye,x;y>=ys;y-=(1/(resolution || 1))) {
        for(x=xs;x<=xe;x+=(1/(resolution || 1))) {
            if(!(y===0 || x===0
                || Math.abs(y) === Math.abs(ye) || Math.abs(x) === Math.abs(xe)
                || Math.abs(y) === Math.abs(x)
                || Math.abs(y) === Math.abs(x + xs) || Math.abs(y) === Math.abs(x - xs)
            )) pattern += "* ";
            else pattern += "  ";
        }
        pattern += "\n\t";
    }
    console.log(pattern);
}

/*****************Sample Case*****************/
(async function run() {
    let width=10, height=10;
    console.log('\n********** Cross Star Pattern: Start **********');
    console.log(`Width: ${width}, Height: ${height}\n`);
    drawPattern(width, height);
    console.log('*********** Cross Star Pattern: End ***********\n');
})();