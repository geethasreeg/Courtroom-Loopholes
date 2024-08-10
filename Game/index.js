<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lawyer Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- First Screen: Crime Description -->
    <div id="crime-description-screen" class="screen active">
        <h1>Case Overview</h1>
        <p id="crime-description"></p>
        <button onclick="proceedToQuestions()">Proceed to Questioning</button>
    </div>

    <!-- Second Screen: Questions -->
    <div id="question-screen" class="screen">
        <div class="courtroom">
            <div class="statement-box">
                <p id="statement"></p>
            </div>
            <div class="options-panel" id="options-panel">
                <!-- Buttons will be generated here -->
            </div>
            <div id="feedback"></div>
            <button class="new-scenario-btn" onclick="generateScenario()">Generate New Scenario</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
