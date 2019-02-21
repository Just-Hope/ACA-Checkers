
function cell(rowNum, cellNum) {
    return `<div id="cell-1-1" class="cell red"></div>`
}

var rowTemplate =`
${cell(1,1)}
<div id="cell-1-2" class="cell black" onclick="toggle(this)">
    <div class="checker red-checker"></div>         
    <div class="checker black-checker" hidden></div>   
</div>
${cell(1,3)}
<div id="cell-1-4" class="cell black" onclick="toggle(this)">
    <div class="checker red-checker"></div>
    <div class="checker black-checker" hidden></div>
</div>
${cell(1,5)}
<div id="cell-1-6" class="cell black" onclick="toggle(this)">
    <div class="checker red-checker"></div>
    <div class="checker black-checker" hidden></div>
</div>
${cell(1,7)}
<div id="cell-1-8" class="cell black" onclick="toggle(this)">
    <div class="checker red-checker"></div>
    <div class="checker black-checker" hidden></div>
</div>
`
