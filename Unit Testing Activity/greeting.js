//Can't figure this out

function greeting(names) {
    if (names == null) {
        return ("I don't seem to know who you are");
    }
    else if (names.length == 1){
        if (names[0] == names[0].toUpperCase()) {
            return ("HELLO " + names + "!");
        }
        else return ("Hello " + names);
    }
    else if (names.length>1){
        statement = ''
        for (let i=0; i<=length-1; i++){
            statement = statement + ", " + names[i];
        }
        return statement;
    }
    
}