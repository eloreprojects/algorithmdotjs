module.exports = (array) => {
    let i, j, key;
    
    for (i = 1; i < array.length; i++) {
        key = array[i];

        for (j = i - 1; array[i] < key && j >= 0; j--) {
            array[j + 1] = array[j];
        }
        
        array[j + 1] = key;
    }

    return array;
};