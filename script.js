function submitPhotoFood() {
    const uploadInput = document.getElementById("foodUpload");
    const resultDiv = document.getElementById("foodresult");


    console.log(uploadInput);

    if (!uploadInput.files.length) {
        resultDiv.textContent = "Please upload a photo.";
        return;
    }

    // Simulate AI detection of empty plate (mock function)
    setTimeout(() => {
        const success = Math.random() > 0.3; // 70% chance it’s “empty”
        if (success) {
            addPoint("food"); 
            resultDiv.textContent = "Great job! Plate detected as empty, you've contributed to the world!";
        } else {
            resultDiv.textContent = "Hmm... this plate doesn't look empty. Try again!";
        }
    }, 1000);
}

function submitPhotoMarine() {
    const uploadInput = document.getElementById("marineUpload");
    const resultDiv = document.getElementById("marineresult");


    console.log(uploadInput);

    if (!uploadInput.files.length) {
        resultDiv.textContent = "Please upload a photo.";
        return;
    }

    // Simulate AI detection of empty plate (mock function)
    setTimeout(() => {
        const success = Math.random() > 0.3; // 70% chance it’s “empty”
        if (success) {
            addPoint("marine"); 
            resultDiv.textContent = "Great job! You've contributed to the world!"; 
        } else {
            resultDiv.textContent = "Hmm... this doesn't look like trash. Try again!";
        }
    }, 1000);
}

function submitPhotoSorting() {
    const uploadInput = document.getElementById("sortingUpload");
    const resultDiv = document.getElementById("sortingresult");


    console.log(uploadInput);

    if (!uploadInput.files.length) {
        resultDiv.textContent = "Please upload a photo.";
        return;
    }

    // Simulate AI detection of empty plate (mock function)
    setTimeout(() => {
        const success = Math.random() > 0.3; // 70% chance it’s “empty”
        if (success) {
            addPoint("recycling"); 
            resultDiv.textContent = "Great job! You've contributed to the world!"; 
        } else {
            resultDiv.textContent = "Hmm... this doesn't look like trash. Try again!";
        }
    }, 1000)
}

function submitPhotoWelfare() {
    const uploadInput = document.getElementById("welfareUpload");
    const resultDiv = document.getElementById("welfareresult");


    console.log(uploadInput);

    if (!uploadInput.files.length) {
        resultDiv.textContent = "Please upload a photo.";
        return;
    }

    // Simulate AI detection of empty plate (mock function)
    setTimeout(() => {
        const success = Math.random() > 0.3; // 70% chance it’s “empty”
        if (success) {
            addPoint("animalWelfare"); 
            resultDiv.textContent = "Great job! You've contributed to the world!"; 
        } else {
            resultDiv.textContent = "Hmm... this doesn't look like an animal. Try again!";
        }
    }, 1000)
}

function submitPhotoWater() {
    const uploadInput = document.getElementById("waterUpload");
    const resultDiv = document.getElementById("waterresult");


    console.log(uploadInput);

    if (!uploadInput.files.length) {
        resultDiv.textContent = "Please upload a photo.";
        return;
    }

    // Simulate AI detection of recycle
    setTimeout(() => {
        const success = Math.random() > 0.3; // 70% chance it’s “empty”
        if (success) {
            addPoint('waterWaste'); 
            resultDiv.textContent = "Great job! You've contributed to the world!"; 
        } else {
            resultDiv.textContent = "Hmm... this doesn't look like water saved. Try again!";
        }
    }, 1000)
}

document.addEventListener("DOMContentLoaded", () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCZQi8QUejL9wQHkZ8MPgwceaTd17eGo28",
        authDomain: "betterworld-31ccc.firebaseapp.com",
        projectId: "betterworld-31ccc",
        storageBucket: "betterworld-31ccc.appspot.com",
        messagingSenderId: "137770038282",
        appId: "1:137770038282:web:f6f2f5fb245604e9c09bf3",
        measurementId: "G-E5DK3W4HJZ"
    };

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();

    function updateGreeting(user) {
        const greeting = document.getElementById("greeting");
        if (user && user.displayName) {
            greeting.textContent = `${user.displayName}, welcome to StarQuest!`;
        } else {
            greeting.textContent = "Change Starts With One.";
        }
    }

    window.register = function () {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const username = document.getElementById("username").value;

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return user.updateProfile({
                    displayName: username
                }).then(() => {
                    return saveUserData(user); 
                });
            })
            .then(() => {
                document.getElementById("authStatus").textContent = "Registered & Logged in!";
            })
            .catch(error => {
                document.getElementById("authStatus").textContent = error.message;
            });
    };

    window.login = function () {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                updateGreeting(auth.currentUser);
                document.getElementById("authStatus").textContent = "Logged in!";
            })
            .catch(error => {
                document.getElementById("authStatus").textContent = error.message;
            });
    };

    window.logout = function () {
        auth.signOut().then(() => {
            auth.signInWithEmailAndPassword(email, password);
        });
    };

    const saveUserData = (user) => {
        const userRef = db.collection('users').doc(user.uid);  // Firestore document reference for this user

        const userData = {
            displayName: user.displayName,
            stars: {
                animalWelfare: 0,
                food: 0,
                marine: 0,
                recycling: 0,
                waterWaste: 0
            },
            points: {
                animalWelfare: 0,
                food: 0,
                marine: 0,
                recycling: 0,
                waterWaste: 0
            },
        };
       
        userRef.set(userData)
            .then(() => {
                console.log('User data saved successfully!');
            })
            .catch((error) => {
                console.error('Error saving user data: ', error);
            });
    }

    function getUserData(uid) {
        const userRef = db.collection("users").doc(uid);

        userRef.get().then((doc) => {
            if (doc.exists) {
                const userData = doc.data();
                console.log(userData); // Use the userData object as needed
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }


    auth.onAuthStateChanged((user) => {
        updateGreeting(user);
    });

});
