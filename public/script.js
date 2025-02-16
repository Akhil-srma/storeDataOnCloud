document.addEventListener("DOMContentLoaded",()=>{
const entryForm = document.querySelector(".entry-form");
const input = document.querySelector(".email");
entryForm.addEventListener("submit", sendData);

async function sendData() {

    const inputData = input.value.trim();

    try {
    const response = await fetch("http://localhost:3000/api/addUserEmail", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: inputData }),
    });
    } catch (error) {
    console.log( error);
    }
}
})
