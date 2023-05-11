const $lis = document.querySelectorAll("ul li");

$lis.forEach((li) => {
    li.addEventListener("click", (event) => {
        event.preventDefault();
        const value = li.innerText.trim();
        let $result = document.querySelector(".result");
        const resultText = $result.innerText.trim();

        if (
            resultText == "0" ||
            resultText == "Infinity" ||
            resultText == "undefined"
        ) {
            $result.innerText = "";
        }

        if (value.toLowerCase() == "c") {
            $result.innerText = "0";
            return true;
        }

        if (value == "=") {
            $result.innerText = eval(resultText);
            return true;
        }

        $result.append(value);
    });
});

// Todo: Grab lis
// Todo: loop through each li
// Todo: add an event listener
// Todo: preventDefault()
// Todo: get the value of the li without extra spaces
// Todo: get the result field
// Todo: get the result text
// Todo: make the c button clear the result window and return true
// Todo: make the button get written side by side by appending the value
// Todo: make the = button evaluate what you have written in the result window
// Todo: get rid of the = 0 infinity undefined get written in the result window
