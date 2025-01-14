const submit = document.getElementById('sub');
const Name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const userMessage = document.getElementById('message');
const errorMessage = document.getElementById('error');
const validMessage = document.getElementById('valid');

submit.addEventListener("click", () => {
    let message = [];  
    let result = 0;    

    if (Name.value === "") {
        message.push("Enter your name");
        Name.style.borderColor = 'red';
        result++;
    } else if (Name.value.length < 3) {
        message.push("The name should contain at least three characters");
        Name.style.borderColor = 'red';
        result++;
    }

    const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email.value === ""){
        message.push("Enter your Email");
        email.style.borderColor = 'red';
        result++;
    }else if (!emailValid.test(email.value)) {
        message.push("Email is not valid");
        email.style.borderColor = 'red';
        result++;
    }

    if (subject.value === "") {
        message.push("Enter a subject");
        subject.style.borderColor = 'red';
        result++;
    }else if(subject.value.length < 5){
        message.push("Subject is too short");
        subject.style.borderColor = 'red';
        result++;
    }

    if (userMessage.value === "") {
        message.push("Enter your message");
        userMessage.style.borderColor = 'red';
        result++;
    }else if(userMessage.value.length < 10){
        message.push("Message is too short");
        subject.style.borderColor = 'red';
        result++;
    }

    if (result > 0) {
        errorMessage.innerText = message.join(', ');
    } else {
        Name.style.borderColor = 'white';
        email.style.borderColor = 'white';
        subject.style.borderColor = 'white';
        userMessage.style.borderColor = 'white';

        validMessage.innerText = "Form submitted successfully!";
        errorMessage.innerText = "";
    }
});
