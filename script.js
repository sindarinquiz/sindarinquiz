// WordPool: Basic and LOTR-Themed Vocabulary
const wordPool = [
    { sindarin: "aiya", english: "hello" },
    { sindarin: "namárië", english: "goodbye" },
    { sindarin: "hannon le", english: "thank you" },
    { sindarin: "le hannon", english: "you're welcome" },
    { sindarin: "man?", english: "who?" },
    { sindarin: "manen?", english: "how?" },
    { sindarin: "matha", english: "yes" },
    { sindarin: "ú", english: "no" },
    { sindarin: "caro", english: "do" },
    { sindarin: "nin", english: "me" },
    { sindarin: "le", english: "you" },
    { sindarin: "mae", english: "well" },
    { sindarin: "mae govannen", english: "well met" },
    { sindarin: "edain", english: "humans" },
    { sindarin: "mîr", english: "jewel" },
    { sindarin: "lass", english: "leaf" },
    { sindarin: "al", english: "not" },
    { sindarin: "anno", english: "give" },
    { sindarin: "meleth", english: "love" },
    { sindarin: "edhel", english: "elf" },
    { sindarin: "galad", english: "light" },
    { sindarin: "gwaew", english: "wind" },
    { sindarin: "aran", english: "king" },
    { sindarin: "maethor", english: "warrior" },
    { sindarin: "adar", english: "father" },
    { sindarin: "naneth", english: "mother" },
    { sindarin: "hên", english: "child" },
    { sindarin: "gwaun", english: "goose" },
    { sindarin: "dôr", english: "land" },
    { sindarin: "iâ", english: "void" },
    { sindarin: "gond", english: "stone" },
    { sindarin: "aeg", english: "sharp" },
    { sindarin: "mellon", english: "friend" },
    { sindarin: "thalion", english: "hero" },
    { sindarin: "lîn", english: "song" },
    { sindarin: "gwend", english: "maiden" },
    { sindarin: "hûr", english: "heart" },
    { sindarin: "sûl", english: "wind" },
    { sindarin: "calad", english: "light" },
    { sindarin: "gwanûn", english: "twins" },
    { sindarin: "mith", english: "grey" },
    { sindarin: "celeb", english: "silver" },
    { sindarin: "orod", english: "mountain" },
    { sindarin: "naur", english: "fire" },
    { sindarin: "aear", english: "sea" },
    { sindarin: "rim", english: "host" },
        { sindarin: "adar", english: "father" },
        { sindarin: "naneth", english: "mother" },
        { sindarin: "mellon", english: "friend" },
        { sindarin: "gell", english: "joy" },
        { sindarin: "parth", english: "book" },
        { sindarin: "celeb", english: "silver" },
        { sindarin: "calad", english: "light" },
        { sindarin: "rhûn", english: "east" },
        { sindarin: "annûn", english: "west" },
        { sindarin: "taur", english: "forest" },
        { sindarin: "gwaith", english: "people" },
        { sindarin: "min", english: "mountain" },
        { sindarin: "lim", english: "lake" },
        { sindarin: "eryn", english: "wood" },
        { sindarin: "hên", english: "child" },
        { sindarin: "roch", english: "horse" },
        { sindarin: "cabed", english: "leap" },
        { sindarin: "anor", english: "sun" },
        { sindarin: "ithil", english: "moon" },
        { sindarin: "ithron", english: "wizard" },
        { sindarin: "bain", english: "beautiful" },
        { sindarin: "lain", english: "free" },
        { sindarin: "gorn", english: "valiant" },
        { sindarin: "brûn", english: "old" },
        { sindarin: "gelair", english: "bright" },
        { sindarin: "faer", english: "spirit" },
        { sindarin: "môr", english: "dark" },
        { sindarin: "tel", english: "last" },
        { sindarin: "galen", english: "green" },
        { sindarin: "thalion", english: "strong" },
        { sindarin: "naer", english: "sad" },
        { sindarin: "thala", english: "firm" },
        { sindarin: "maer", english: "good" },
        { sindarin: "úan", english: "evil" },
        { sindarin: "curun", english: "skillful" },
        { sindarin: "ithronn", english: "wise" },
        { sindarin: "harn", english: "wounded" },
        { sindarin: "gwain", english: "new" },
        { sindarin: "beria", english: "bold" },
        { sindarin: "meren", english: "joyous" },
        { sindarin: "hû", english: "dog" },
        { sindarin: "amlug", english: "dragon" },
        { sindarin: "aew", english: "bird" },
        { sindarin: "lhûg", english: "snake" },
        { sindarin: "galad", english: "tree" },
        { sindarin: "gûr", english: "heart" },
        { sindarin: "mîr", english: "jewel" },
        { sindarin: "aran", english: "king" },
        { sindarin: "rain", english: "peace" },
        { sindarin: "estel", english: "hope" },
        { sindarin: "gurth", english: "death" },
        { sindarin: "meleth", english: "love" },
        { sindarin: "gond", english: "stone" },
        { sindarin: "gwaew", english: "wind" },
        { sindarin: "lass", english: "leaf" },
        { sindarin: "aear", english: "sea" },
        { sindarin: "nen", english: "water" },
        { sindarin: "gwelu", english: "air" },
        { sindarin: "urui", english: "fire" },
        { sindarin: "cu", english: "bow" },
        { sindarin: "lhîw", english: "to sing" },
        { sindarin: "revia", english: "to wander" },
        { sindarin: "nara", english: "to tell" },
        { sindarin: "lasta", english: "to hear" },
        { sindarin: "linna", english: "to sing" },
        { sindarin: "cen", english: "to see" },
        { sindarin: "edra", english: "to speak" },
        { sindarin: "athra", english: "to cross" },
        { sindarin: "noro", english: "to run" },
        { sindarin: "dartha", english: "to wait" },
        { sindarin: "fir", english: "to die" },
        { sindarin: "gosta", english: "to fear" },
        { sindarin: "car", english: "to make" },
        { sindarin: "tog", english: "to lead" },
        { sindarin: "mada", english: "to eat" },
        { sindarin: "soga", english: "to drink" },
        { sindarin: "hele", english: "to hide" },
        { sindarin: "bron", english: "to endure" },
        { sindarin: "lach", english: "to flame" },
        { sindarin: "penia", english: "to go" },
        { sindarin: "mal", english: "golden" },
        { sindarin: "celeb", english: "silver" },
        { sindarin: "dorn", english: "hard" },
        { sindarin: "brith", english: "gravelly" },
        { sindarin: "aearon", english: "oceanic" },
        { sindarin: "baur", english: "warm" },
        { sindarin: "fael", english: "fair" },
        { sindarin: "laeg", english: "green" },
        { sindarin: "naur", english: "fiery" },
        { sindarin: "lhûn", english: "blue" },
        { sindarin: "morn", english: "black" },
        { sindarin: "charn", english: "red" },
        { sindarin: "malen", english: "yellow" },
        { sindarin: "thel", english: "sisterly" },
        { sindarin: "baran", english: "brown" },
        { sindarin: "ind", english: "mindful" },
        { sindarin: "vorn", english: "dark" },
        { sindarin: "gwilith", english: "airy" },
        { sindarin: "rim", english: "many" },
        { sindarin: "milui", english: "friendly" },
        { sindarin: "ni", english: "I" },
        { sindarin: "le", english: "you" },
        { sindarin: "ha", english: "he/she/it" },
        { sindarin: "me", english: "we" },
        { sindarin: "tir", english: "they" },
        { sindarin: "gin", english: "you (plural)" },
        { sindarin: "min", english: "one" },
        { sindarin: "tâd", english: "two" },
        { sindarin: "neledh", english: "three" },
        { sindarin: "can", english: "four" },
        { sindarin: "leben", english: "five" },
        { sindarin: "enen", english: "six" },
        { sindarin: "otho", english: "seven" },
        { sindarin: "toloth", english: "eight" },
        { sindarin: "neder", english: "nine" },
        { sindarin: "pae", english: "ten" },
    
    
];


// Function to randomize and select words for the quiz
function getRandomWords() {
    const shuffled = wordPool.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 25);
}

// Quiz Logic
let currentQuestionIndex = 0;
let score = 0;
let selectedWords = [];


function startQuiz() {}
    selectedWords = getRandomWords();
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz-selection").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    showQuestion();
    applyLOTRTheme();


// Display the Current Question
function showQuestion() {
    const question = selectedWords[currentQuestionIndex];
    document.getElementById("quiz-title").innerText = `Question ${currentQuestionIndex + 1} of ${selectedWords.length}`;
    document.getElementById("question-text").innerText = `What does "${question.sindarin}" mean?`;

    const options = generateOptions(question);
    const optionsContainer = document.getElementById("answer-options");
    optionsContainer.innerHTML = "";

    options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-button");
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

// Generate Options for the Current Question
function generateOptions(correctWord) {
    const options = [correctWord.english];
    while (options.length < 4) {
        const randomWord = wordPool[Math.floor(Math.random() * wordPool.length)];
        if (!options.includes(randomWord.english)) {
            options.push(randomWord.english);
        }
    }
    return options.sort(() => Math.random() - 0.5);
}

// Check Answer
function checkAnswer(selectedOption) {
    const correctAnswer = selectedWords[currentQuestionIndex].english;
    if (selectedOption === correctAnswer) {
        score++;
    }
    if (currentQuestionIndex < selectedWords.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        endQuiz();
    }
}

// End the Quiz
function endQuiz() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("results-container").style.display = "block";
    document.getElementById("score-text").innerText = `You scored ${score} out of ${selectedWords.length}!`;
}

// Restart the Quiz
function restartQuiz() {
    document.getElementById("results-container").style.display = "none";
    document.getElementById("quiz-selection").style.display = "block";
}

// Apply LOTR Theme
function applyLOTRTheme() {
    document.body.style.backgroundImage = "url('https://www.wallpaperflare.com/static/192/753/716/the-lord-of-the-rings-the-fellowship-of-the-ring-movie-wallpaper.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.color = "#f4f4e8";
    document.body.style.fontFamily = "'Cormorant Garamond', serif";
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.style.backgroundColor = "#6b4226";
        button.style.color = "#f4f4e8";
        button.style.border = "none";
        button.style.padding = "10px 20px";
        button.style.margin = "5px";
        button.style.borderRadius = "5px";
        button.style.fontSize = "16px";
        button.style.cursor = "pointer";
    });
}
