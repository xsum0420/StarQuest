function submitPhotoFood() {
    uploadInput = document.getElementById("foodUpload");
    resultDiv = document.getElementById("result");


    console.log(uploadInput);

    if (!uploadInput.files.length) {
        resultDiv.textContent = "Please upload a photo.";
        return;
    }

    // Simulate AI detection of empty plate (mock function)
    setTimeout(() => {
        const success = Math.random() > 0.3; // 70% chance it¡¯s ¡°empty¡±
        if (success) {
            resultDiv.textContent = "Great job! Plate detected as empty, you've contributed to the world!";h
        } else {
            resultDiv.textContent = "Hmm... this plate doesn't look empty. Try again!";
        }
    }, 1000);
}

function submitPhotoMarine() {
    uploadInput = document.getElementById("marineUpload");
    resultDiv = document.getElementById("result");


    console.log(uploadInput);

    if (!uploadInput.files.length) {
        resultDiv.textContent = "Please upload a photo.";
        return;
    }

    // Simulate AI detection of empty plate (mock function)
    setTimeout(() => {
        const success = Math.random() > 0.3; // 70% chance it¡¯s ¡°empty¡±
        if (success) {
            resultDiv.textContent = "Great job! You've contributed to the world!"; h
        } else {
            resultDiv.textContent = "Hmm... this doesn't look like trash. Try again!";
        }
    }, 1000);
}

function submitPhotoMarine() {
    uploadInput = document.getElementById("marineUpload");
    resultDiv = document.getElementById("result");


    console.log(uploadInput);

    if (!uploadInput.files.length) {
        resultDiv.textContent = "Please upload a photo.";
        return;
    }

    // Simulate AI detection of empty plate (mock function)
    setTimeout(() => {
        const success = Math.random() > 0.3; // 70% chance it¡¯s ¡°empty¡±
        if (success) {
            resultDiv.textContent = "Great job! You've contributed to the world!"; h
        } else {
            resultDiv.textContent = "Hmm... this doesn't look like trash. Try again!";
        }
    }, 1000)
}

function submitPhotoSorting() {
    uploadInput = document.getElementById("sortingUpload");
    resultDiv = document.getElementById("result");


    console.log(uploadInput);

    if (!uploadInput.files.length) {
        resultDiv.textContent = "Please upload a photo.";
        return;
    }

    // Simulate AI detection of empty plate (mock function)
    setTimeout(() => {
        const success = Math.random() > 0.3; // 70% chance it¡¯s ¡°empty¡±
        if (success) {
            resultDiv.textContent = "Great job! You've contributed to the world!"; h
        } else {
            resultDiv.textContent = "Hmm... this doesn't look like trash. Try again!";
        }
    }, 1000)
}

function submitPhotoWelfare() {
    uploadInput = document.getElementById("welfareUpload");
    resultDiv = document.getElementById("result");


    console.log(uploadInput);

    if (!uploadInput.files.length) {
        resultDiv.textContent = "Please upload a photo.";
        return;
    }

    // Simulate AI detection of empty plate (mock function)
    setTimeout(() => {
        const success = Math.random() > 0.3; // 70% chance it¡¯s ¡°empty¡±
        if (success) {
            resultDiv.textContent = "Great job! You've contributed to the world!"; h
        } else {
            resultDiv.textContent = "Hmm... this doesn't look like an animal. Try again!";
        }
    }, 1000)
}

function submitPhotoRecycling() {
    uploadInput = document.getElementById("recycleUpload");
    resultDiv = document.getElementById("result");


    console.log(uploadInput);

    if (!uploadInput.files.length) {
        resultDiv.textContent = "Please upload a photo.";
        return;
    }

    // Simulate AI detection of recycle
    setTimeout(() => {
        const success = Math.random() > 0.3; // 70% chance it¡¯s ¡°empty¡±
        if (success) {
            resultDiv.textContent = "Great job! You've contributed to the world!"; h
        } else {
            resultDiv.textContent = "Hmm... this doesn't look like trash. Try again!";
        }
    }, 1000)
}


// Firebase Auth Reference
//const auth = firebase.auth();

function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById("authStatus").textContent = "Registered & Logged in!";
        })
        .catch(error => {
            document.getElementById("authStatus").textContent = error.message;
        });
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById("authStatus").textContent = "Logged in!";
        })
        .catch(error => {
            document.getElementById("authStatus").textContent = error.message;
        });
}

function logout() {
    auth.signOut()
        .then(() => {
            document.getElementById("authStatus").textContent = "Logged out.";
        });
}
