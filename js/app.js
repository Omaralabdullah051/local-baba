
//1.array formate
const election = ['razzak', 'alomgir', 'jayed', 'jayed', 'jayed', 'asad', 'jayed'];


//object is more useful,easiest and comfortable formate to store data and read data than array.so, when we want to store our data in localStorage,db,ect we need to use object.

//2.object formate

const election2 = {
    razzak: 1,
    alomgir: 1,
    jashim: 1,
    jayed: 4
};




//implement local-storage. 


//store data in local storage.
let db = {};

const addTodb = item => {

    //checking wether there is something exists in the local storage by this key name.
    const storedTracker = localStorage.getItem('checka-tracker');
    if (storedTracker) {
        db = JSON.parse(storedTracker);
    }

    //checking wether there is something exists in the db2 object by same item in the value
    // if (db2[item]) {
    //     db2[item] = db2[item] + 1;
    // }
    // else {
    //     db2[item] = 1;
    // }

    //or
    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }
    //set item in local storage
    localStorage.setItem('checka-tracker', JSON.stringify(db));
}


//remove item from local storage 
const removeItemFromDb = item => {
    const storedTracker = localStorage.getItem('checka-tracker');
    if (storedTracker) {
        const storedObject = JSON.parse(storedTracker);
        delete storedObject[item];
        localStorage.setItem('checka-tracker', JSON.stringify(storedObject));
    }
}


//remove all item from local storage
const removeAll = () => {
    localStorage.removeItem('checka-tracker');
}