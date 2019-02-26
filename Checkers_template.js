
function cellTemplate(rowNum, cellNum) {
  
    var isCellEven = true
    var isRowEven = true
    if (cellNum % 2 == 1) isCellEven = false
    if (rowNum % 2 == 1) isRowEven = false
    
    if (isCellEven != isRowEven) {
        // Black cell
return `<div id="cell-${rowNum}-${cellNum}" class="cell black" onclick="toggle(this)">
<div class="checker red-checker"></div>
<div class="checker black-checker" hidden></div>
</div>
`
    } else
    //white cell
    return `<div id="cell-${rowNum}-${cellNum}" class="cell red"></div>`
}


function rowTemplate(rowNum) {
    console.log(`drawing row number ${rowNum}`)
    var rowString = ''
    rowString = rowString + `<div id="row-{rowNum}" class="row" >`
    for (var cellNum=1; cellNum<=8; cellNum++) {
        rowString = rowString + cellTemplate(rowNum, cellNum)
    }
    rowString = rowString + `</div>`
    return rowString
}

function boardTemplate() {
    var boardString = ''
    for (var rowNum=1; rowNum<=8; rowNum++) {
        boardString = boardString + rowTemplate(rowNum)
    }
    return boardString
}
