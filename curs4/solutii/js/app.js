function creatediv(n){
    for (var h = 0; h < n; h++) {
        var div = document.createElement('div');    
        // div.innerHTML = h+1;
        div.className = 'box';
        document.getElementById("wrapper").appendChild(div);
    }
}
creatediv(72);



