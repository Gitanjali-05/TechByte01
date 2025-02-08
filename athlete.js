
function storeUserData() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert("Your data has been saved.");
    } else {
        alert("Please fill in both email and password.");
    }
}


function storePersonalDetails() {
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;

    if (name && gender) {
        localStorage.setItem('name', name);
        localStorage.setItem('gender', gender);
        alert("Your personal details have been saved.");
    } else {
        alert("Please fill in both name and gender.");
    }
}


function showExercises() {
    const category = document.getElementById('category').value;
    const exerciseList = document.getElementById('exerciseList');
    exerciseList.innerHTML = '';  

    let exercises = [];

    if (category === 'Beginner') {
        exercises = [
            '10 mins light jogging', 'Basic bodyweight squats', 'Push-ups (3 sets of 10)', 'Rest day or stretching'
        ];
    } else if (category === 'Intermediate') {
        exercises = [
            '20 mins moderate jogging', 'Bodyweight squats (3 sets of 20)', 'Push-ups (4 sets of 20)', 'Interval training', 'Yoga or rest'
        ];
    } else if (category === 'Advanced') {
        exercises = [
            '30 mins running or cycling', 'Weighted squats (4 sets of 25)', 'Pull-ups (3 sets of 10)', 'HIIT workout', 'Rest or active recovery'
        ];
    }

    
    exercises.forEach(exercise => {
        const listItem = document.createElement('li');
        listItem.textContent = exercise;
        exerciseList.appendChild(listItem);
    });
}
