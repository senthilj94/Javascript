function formatMessage(name, id) {
    return {
        name: name,
        id: id,
        timeStamp: Date.now,
        save: function() {
            //save message
        }
    }
}

//After
function formatMessage(name, id) {
    return {
        name, // can omit key as the name of key and prop are same
        id,
        timeStamp: Date.now,
        save () { // not necessary to provide function
            //save message 
        }
    }
}