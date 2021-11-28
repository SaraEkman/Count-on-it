console.log("Hej!");

const oper = document.getElementById('operators')

const button = document.querySelector('button')

const ul = document.querySelector('ul')

button.addEventListener('click', () => {
    const inputOne = document.getElementById('number-one').value;
    const inputTwo = document.getElementById('number-two').value;
    console.log(+inputOne + +inputTwo);
    // console.log(+inputOne - +inputTwo);
    // console.log(+inputOne * +inputTwo);
    // console.log(+inputOne / +inputTwo);

    let li = document.createElement('li')
    ul.append(li)

    console.log(oper.value);
        let result;
    switch (oper.value) {
            case '+':
                result = +inputOne + +inputTwo;
                break;
            case '-':
                result = +inputOne - +inputTwo;
                break;
            case '*':
                result = +inputOne * +inputTwo;
                break;
            case '/':
                result = +inputOne / +inputTwo;
                break;
            default:
                result = "No value found";
                break;
        }
        li.innerText = result;
})