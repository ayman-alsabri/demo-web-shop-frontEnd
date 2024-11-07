
let isSignUp = false; 


function toggleForm() {
    const formTitle = document.getElementById('formTitle');
    const authBtn = document.querySelector('.auth-btn');
    const signUpFields = document.getElementById('signUpFields');
    const toggleText = document.getElementById('toggleForm');

    if (isSignUp) {
        formTitle.textContent = "Sign Up for an Account";
        authBtn.textContent = "Sign Up";
        signUpFields.style.display = "block";
        toggleText.innerHTML = `Already have an account? <a href="#" id="switchToSignIn">Sign In</a>`;
    } else {
        formTitle.textContent = "Sign In to Your Account";
        authBtn.textContent = "Sign In";
        signUpFields.style.display = "none";
        toggleText.innerHTML = `Don't have an account? <a href="#" id="switchToSignUp">Sign Up</a>`;
    }

    document.getElementById(isSignUp ? 'switchToSignIn' : 'switchToSignUp').addEventListener('click', function (e) {
        e.preventDefault();
        isSignUp = !isSignUp;
        toggleForm();
    });
}

document.getElementById('switchToSignUp').addEventListener('click', function (e) {
    e.preventDefault();
    isSignUp = true;
    toggleForm();
});

document.getElementById('authForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const authMessage = document.getElementById('authMessage');

    if (isSignUp) {
        const confirmPassword = document.getElementById('confirmPassword').value;
        const email = document.getElementById('email').value;

        if (password !== confirmPassword) {
            authMessage.textContent = "Passwords do not match!";
            authMessage.style.color = "#ff4500";
            return;
        }
        authMessage.textContent = "Sign Up successful! Redirecting...";
        authMessage.style.color = "green";

       
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);

    } else {
       
        if (username === "ayman" && password === "password") {
            authMessage.textContent = "Login successful! Redirecting...";
            authMessage.style.color = "green";

            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        } else {
            authMessage.textContent = "Invalid username or password!";
            authMessage.style.color = "#ff4500";
        }
    }
});


