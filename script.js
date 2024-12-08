let passwordDisplay = document.getElementById("passwordDisplay");

let copyBtn = document.getElementById("copyBtn");

let generateBtn = document.getElementById("generateBtn");

let uppercaseCheck = document.getElementById("uppercase");

let lowercaseCheck = document.getElementById("lowercase");

let numbersCheck = document.getElementById("numbers");

let symbolsCheck = document.getElementById("symbols");

let passwordLength = document.getElementById("passwordLength");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercase = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";

const symbols = "!@#$%^&*()_+~`|[]\\:;?><,./-=";

function generatePassword() {

    const length = +passwordLength.value;

    let characterPool = "";

    let password = "";

    if (uppercaseCheck.checked) characterPool += uppercase;

    if (lowercaseCheck.checked) characterPool += lowercase;

    if (numbersCheck.checked) characterPool += numbers;

    if (symbolsCheck.checked) characterPool += symbols;

    if (characterPool.length === 0) {

        alert("Please select at least one character type.");
    }

    for (let i = 0; i < length; i++) {

        const randomIndex = Math.floor(Math.random() * characterPool.length);

        password += characterPool[randomIndex];
    }

    return password;
}

generateBtn.addEventListener("click", () => {

    const password = generatePassword();

    passwordDisplay.value = password;
});

copyBtn.addEventListener("click", () => {

    if (passwordDisplay.value === "") {

        alert("No password to copy.");

        return;
    }

    navigator.clipboard.writeText(passwordDisplay.value)

        .then(() => alert("Password copied to clipboard."))

        .catch(() => alert("Failed to copy password."));
});