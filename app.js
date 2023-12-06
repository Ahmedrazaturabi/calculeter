var Ahmed = document.getElementById('Ahmed');


function show(Ah){
    Ahmed.value += Ah
}

function cale(){
    Ahmed.value = ''
}

function delid(){
    var del = Ahmed.value;
    del = del.substring(0,del.length-1)
    Ahmed.value = del
}


function pass(){
    Ahmed.value = eval(Ahmed.value)
}