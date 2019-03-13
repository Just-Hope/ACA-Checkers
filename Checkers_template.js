var checkers = [
    {row: 1, cell: 2, color: 'white'},
    {row: 1, cell: 4, color: 'white'},
    {row: 1, cell: 6, color: 'white'},
    {row: 1, cell: 8, color: 'white'},
    {row: 2, cell: 1, color: 'white'},
    {row: 2, cell: 3, color: 'white'},
    {row: 2, cell: 5, color: 'white'},
    {row: 2, cell: 7, color: 'white'},
    {row: 3, cell: 2, color: 'white'},
    {row: 3, cell: 4, color: 'white'},
    {row: 3, cell: 6, color: 'white'},
    {row: 3, cell: 8, color: 'white'},
]

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
    if (cellColor(rowNum, cellNum) === 'black') { 
return `<div id="cell-${rowNum}-${cellNum}" class="cell black"> </div>`
} else
    return `<div id="cell-${rowNum}-${cellNum}" class="cell white"></div>`
}



function renderCheckers(){
    console.log('rendering checkers')
    for(let i=0; i<checkers.length; i++) {
        let checker = checkers[i];
        console.log(checker)
        $(`#cell-${checker.row}-${checker.cell}`).html(renderChecker(checker.color))
    }
}


function renderChecker(color) {
    return `<div class="checker ${color}-checker"></div>`
}

function parity(num) {
    if (num % 2 === 0) return 'even'
    else return 'odd'
}

function cellColor(rowNum, cellNum) {
    if(parity (rowNum) === parity(cellNum)) return 'white'
    else return 'black'
}




