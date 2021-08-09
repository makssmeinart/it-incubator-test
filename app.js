// Не уверен где нужно делать некоторые задачки, разбил на функции что-бы было более понятно


// Constants
const searchButton = document.querySelector(".search-button")
const mainInput = document.querySelector(".main-input")

// Eventlisteners
searchButton.addEventListener("click", alertInputValue)

// Functions
// Task 3-5
function alertInputValue(e) {
  let inputValue = mainInput.value
  let people = [{name: "Oleg", age: 12}, {name: "Makss", age: 21}, {name: "Denis", age: 32}, {name: "Diana", age: 74}]

  if (inputValue === "google") {
    alert("Yandex круче. Но это не точно")
    // Run Task 10 function
    setTimeout(alertinputValueTimed, 3000)
  } else {
    alert(inputValue)
  }
  
  alert(people[0].name)
}

// Task 6
function superSum(a, b) {
  alert(a + b)
}

// Task 7
// Максимальная - Минимальная цифра в массиве
function minMax() {
  let numberArray = [1,3,98,123,42]
  let maxNum = numberArray[numberArray.length - 1]
  let minNum = numberArray[0]

  for(let i = 0; i < numberArray.length; i++) {
    // If current iteration is bigger than max replace the max
    if(numberArray[i] > maxNum) {
      maxNum = numberArray[i]
    }
    // If current iteration is lower than min replace the min
    if(numberArray[i] < minNum) {
      minNum = numberArray[i]
    }
  }

  console.log(`min: ${minNum} max:${maxNum}`)
}

// Task 8
// Поменять А и Б местами
function changePlace() {
  let a = "AAA"
  let b = "BBB"
  let temp = ""

  // We put a data into temp variable
  temp = a

  // Make a = b
  a = b

  // Make b = temp(a)
  b = temp

  console.log(`a:${a} b:${b}`)
}

// Task 9
function findMax(arr) {
  // Get last element of array
  let maxNum = arr[arr.length - 1]

  // If current iteration is bigger than maxNum replace it
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > maxNum) {
      maxNum = arr[i]
    }
  }

  // Return maxNum
  return maxNum
}

// Task 10
function alertinputValueTimed() {
  alert("Yandex круче. Но это не точно")
}
