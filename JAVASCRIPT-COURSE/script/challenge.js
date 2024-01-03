let intervalId;
let newIntervalId;
let change = true;
let stopChange = false;
let messages = 2;

StartChange();


document.querySelector('.js-add-messages')
    .addEventListener('click', () => {
        messages++;
        checkStopChange();
    });

document.querySelector('.js-remove-messages')
    .addEventListener('click', () => {
        messages--;
    });

function StartChange() {
    newIntervalId = setInterval(() => {
        changeTitle();    
    }, 1000);
}

function checkStopChange() {
    if (messages === 0) {
        clearInterval(newIntervalId);
        stopChange = true;
    } else if (stopChange) {
        StartChange();
        stopChange = false;
    }
}

function changeTitle() {
    if (change) {
        document.title = `(${messages})New messages`;
        change = false;
    } else {
        document.title = 'Challenge';
        change = true;
    }

    checkStopChange();
}


document.querySelector('.js-add-button')
    .addEventListener('click', () => {
        let result = document.querySelector('.js-result');

        result.innerHTML = 'Added';
        clearTimeout(intervalId);

        intervalId = setTimeout(() => {
            result.innerHTML = '';
        }, 2000);
    });

/*let result = { max:null, min:null };
let results = {};

//console.log(minMax([1, -3, 5]));
console.log(minMax([]));
console.log(minMax([3]));
console.log(countWords(['apple', 'grape', 'apple', 'apple']));

function minMax(nums) {
    if (nums[0]) {
        result.min = nums[0];
        result.max = nums[0];

        for(let i = 1; i < nums.length; i++) {
            if (nums[i] < result.min) {
                result.min = nums[i];
            }

            if (nums[i] > result.max) {
                result.max = nums[i];
            }
        }
    }

    return result;
}

function countWords(words) {
    results[words[0]] = 1;

    for(let i = 1; i < words.length; i++) {
        if (results[words[i]]) {
            results[words[i]]++;
        } else {
            results[words[i]] = 1;
        }
    }

    return results;
}*/

console.log(findIndex(['not', 'found'], 'red'))
console.log(unique(['green', 'red', 'green', 'red' ]));

function findIndex(array, word) {
    for(let i = 0; i < array.length; i++) {
        if (word === array[i]) {
            return i;
        }
    }

    return -1;
}

function unique(array) {
    let newArray = [];

    for(let i = 0; i < array.length; i++) {
        if (i === findIndex(array, array[i])) {
            newArray.push(array[i]);
        } 
    }

    return newArray;
}