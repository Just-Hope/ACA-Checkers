$(document).ready(function () {
    console.log('document ready')
    $('#board-container').html(renderBoard())
    $('.checker').click(selectChecker)
    console.log('Adding the click handler to the checker now!')
   renderCheckers()
})

function toggle() {
    let checker = $(this).children().first()
    checker.toggle()
    if(!checker.is(":visible")){
        switchColor(checker);
    }
}

function switchColor(checker) {
    if (checker.hasClass('black-checker')) {
        checker.removeClass('black-checker')
        checker.addClass('white-checker')
    } else {
        checker.addClass('black-checker')
        checker.removeClass('white-checker')
    }
}

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

function parity(num) {
    if (num % 2 === 0) return 'even'
    else return 'odd'
}

function cellColor(rowNum, cellNum) {
    if(parity (rowNum) === parity(cellNum)) return 'white'
    else return 'black'
}
