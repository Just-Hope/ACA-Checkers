function toggle(cell) {
    console.log('document ready')
    let redChecker = cell.children[0]
    let blackChecker = cell.children[1]

 
    
    if(!redChecker.hidden && blackChecker.hidden) {//If the white checker is showing, change it to:
        redChecker.hidden = true //Both checkers are hidden
        blackChecker.hidden = true
 
    } else if(redChecker.hidden && blackChecker.hidden){//If both checkers are hidden, change it to:
        redChecker.hidden = true//Only black checker is showing
        blackChecker.hidden = false
        
    
    } else if(redChecker.hidden && !blackChecker.hidden) {//If black checker is showing, change it to:
        redChecker.hidden = true //both checkers are hidden
        blackChecker.hidden = true
        
    
    }  
    
}

