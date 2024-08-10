// Arrays of possible crime descriptions, statements, and options
const crimeDescriptions = [
    "A robbery took place at a local convenience store. The suspect claims they were at home during the incident.",
    "A witness claims to have seen the defendant near the scene of a hit-and-run accident.",
    "The defendant is accused of tampering with evidence in a high-profile fraud case.",
    "A break-in occurred at a residential home. The suspect denies knowing the victim.",
    "The defendant is charged with assault after a bar fight. They claim self-defense."
];

const statements = [
    "The defendant was not at the scene of the crime.",
    "The witness claims they saw the defendant.",
    "The defendant has an alibi for the night of the incident.",
    "The defendant denies knowing the victim.",
    "The evidence was tampered with."
];

const correctOptions = [
    "But the defendant was caught on camera.",
    "But the witness has a history of lying.",
    "But the alibi is weak and unverified.",
    "But the defendant's fingerprints are on the victim's belongings.",
    "But the tampered evidence still matches the defendant."
];

const incorrectOptions = [
    "But the defendant was at the store.",
    "But the witness has poor eyesight.",
    "But the defendant was seen at a restaurant.",
    "But the defendant was at home.",
    "But the evidence was found in the trash."
];

// Function to proceed to the question screen
function proceedToQuestions() {
    document.getElementById('crime-description-screen').classList.remove('active');
    document.getElementById('question-screen').classList.add('active');
    generateScenario(); // Automatically generate the first scenario
}

// Function to generate a random crime description
function generateCrimeDescription() {
    const descriptionIndex = Math.floor(Math.random() * crimeDescriptions.length);
    const description = crimeDescriptions[descriptionIndex];
    document.getElementById('crime-description').textContent = description;
}

// Function to generate a random scenario
function generateScenario() {
    const statementIndex = Math.floor(Math.random() * statements.length);
    const statement = statements[statementIndex];
    const correctOption = correctOptions[statementIndex];

    // Shuffle incorrect options
    const shuffledIncorrectOptions = incorrectOptions
        .filter((_, index) => index !== statementIndex)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);

    // Combine correct and incorrect options and shuffle them
    const options = [correctOption, ...shuffledIncorrectOptions].sort(() => Math.random() - 0.5);

    // Display the statement
    document.getElementById('statement').textContent = statement;

    // Generate option buttons
    const optionsPanel = document.getElementById('options-panel');
    optionsPanel.innerHTML = ''; // Clear previous options
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkOption(option === correctOption);
        optionsPanel.appendChild(button);
    });

    // Clear feedback
    document.getElementById('feedback').textContent = '';
}

// Function to check if the selected option is correct
function checkOption(isCorrect) {
    const feedback = document.getElementById('feedback');
    if (isCorrect) {
        feedback.textContent = "Correct! You found the loophole!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect. Try again.";
        feedback.style.color = "red";
    }
}

// Generate an initial crime description on page load
generateCrimeDescription();
