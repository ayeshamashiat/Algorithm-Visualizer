function bubbleSort(arr){
    let swapped = false;
    let n = arr.length;

    for(let i = 0; i<n; i++){
        for(let j = 0; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                swapped = true;
            }
        }

        if(!swapped){
            break;
        }
    }

    return arr;
}

function generateRandomArrayOfNumbers() {
    let arrLength = 20;
    let arr = [];

    for(let i = 0; i < arrLength; i++) {
        arr.push(Math.floor(Math.random() * 96) + 5);
    }
    
    displayArray(arr);
    
    return arr;
}

function displayArray(arr) {
    const arrayContainer = document.getElementById('arrayContainer');
    arrayContainer.innerHTML = '';
    
    // Create boxes for each array element
    arr.forEach((value) => {
        const box = document.createElement('div');
        box.className = 'array-element';
        box.textContent = value;
        arrayContainer.appendChild(box);
    });
}

const generateArrayBtn = document.getElementById('generateArray');
generateArrayBtn.addEventListener('click', generateRandomArrayOfNumbers);