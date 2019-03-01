function renderBoard() {
    return `
    ${renderRow(1)}
    ${renderRow(2)}
    ${renderRow(3)}
    ${renderRow(4)}
    ${renderRow(5)}
    ${renderRow(6)}
    ${renderRow(7)}
    ${renderRow(8)}
    `
}


function renderRow(rowNum) {
    return `
    <div id="row-${rowNum}" class="row">
    ${renderCell(rowNum, 1)}
    ${renderCell(rowNum, 2)}
    ${renderCell(rowNum, 3)}
    ${renderCell(rowNum, 4)}
    ${renderCell(rowNum, 5)}
    ${renderCell(rowNum, 6)}
    ${renderCell(rowNum, 7)}
    ${renderCell(rowNum, 8)}
    </div>
    `
}


function renderCell(rowNum, cellNum) {
    if (determineColor(rowNum, cellNum) === 'black') { 
        // add a Black cell
let cellString = `
<div id="cell-${rowNum}-${cellNum}" class="cell black">`
   if (rowNum <=3) {
       cellString = cellString + renderChecker('red')
   } else if (rowNum >= 6) {
    cellString = cellString + renderChecker('black')
   } else {
    cellString = cellString + renderChecker('black', 'hidden')
   }
cellString = cellString + `</div>`
return cellString
 

} else
    //add a white cell
    return `<div id="cell-${rowNum}-${cellNum}" class="cell red"></div>`
}



function renderChecker(color, hidden) {
    return `<div class="checker ${color}-checker" ${hidden}></div>`
}

function parity(num) {
    if (num % 2 === 0) return 'even'
    else return 'odd'
}



function determineColor(rowNum, cellNum) {
    if(parity (rowNum) === parity(cellNum)) return 'red'
    else return 'black'
}



