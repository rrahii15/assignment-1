/* Variables
-------------------------------------------------- */
const nounButtonFirst = document.getElementById('noun1');
const verbButtonFirst = document.getElementById('verb');
const adjectiveButtonFirst = document.getElementById('adjective');
const nounButtonSecond = document.getElementById('noun2');
const settingButton = document.getElementById('setting');
const playbackControl = document.getElementById('playback');
const shuffleControl = document.getElementById('random');

const displayFirstNoun = document.getElementById('choosenNoun1');
const displayVerb = document.getElementById('choosenVerb');
const displayAdjective = document.getElementById('choosenAdjective');
const displaySecondNoun = document.getElementById('choosenNoun2');
const displaySetting = document.getElementById('choosenSetting');
const displayStory = document.getElementById('story');

const nounArray = ["banana", "fortress", "car", "sorcerer", "book"];
const verbArray = ["jumps", "sits", "drives", "conjures", "reads"];
const adjectiveArray = ["yellow", "strong", "fast", "magical", "thick"];
const settingArray = ["in a jungle", "on a mountain", "on the road", "in an enchanted forest", "in a library"];

let Indexes = {
    firstNoun: 0,
    verb: 0,
    adjective: 0,
    secondNoun: 0,
    setting: 0
};

let CurrentWords = {
    firstNoun: "",
    verb: "",
    adjective: "",
    secondNoun: "",
    setting: ""
};

/* Functions
-------------------------------------------------- */
function handleFirstNounClick() {
    CurrentWords.firstNoun = nounArray[Indexes.firstNoun];
    displayFirstNoun.textContent = CurrentWords.firstNoun;

    if (Indexes.firstNoun == nounArray.length - 1) {
        Indexes.firstNoun = 0;
    } else {
        Indexes.firstNoun++;
    }
}

function handleVerbClick() {
    CurrentWords.verb = verbArray[Indexes.verb];
    displayVerb.textContent = CurrentWords.verb;

    if (Indexes.verb == verbArray.length - 1) {
        Indexes.verb = 0;
    } else {
        Indexes.verb++;
    }
}

function handleAdjectiveClick() {
    CurrentWords.adjective = adjectiveArray[Indexes.adjective];
    displayAdjective.textContent = CurrentWords.adjective;

    if (Indexes.adjective == adjectiveArray.length - 1) {
        Indexes.adjective = 0;
    } else {
        Indexes.adjective++;
    }
}

function handleSecondNounClick() {
    CurrentWords.secondNoun = nounArray[Indexes.secondNoun];
    displaySecondNoun.textContent = CurrentWords.secondNoun;

    if (Indexes.secondNoun == nounArray.length - 1) {
        Indexes.secondNoun = 0;
    } else {
        Indexes.secondNoun++;
    }
}

function handleSettingClick() {
    CurrentWords.setting = settingArray[Indexes.setting];
    displaySetting.textContent = CurrentWords.setting;

    if (Indexes.setting == settingArray.length - 1) {
        Indexes.setting = 0;
    } else {
        Indexes.setting++;
    }
}

function handlePlaybackClick() {
    displayStory.textContent = `${CurrentWords.firstNoun} ${CurrentWords.verb} ${CurrentWords.adjective} ${CurrentWords.secondNoun} ${CurrentWords.setting}`;
}

function handleShuffleClick() {
    handleFirstNounClick();
    handleVerbClick();
    handleAdjectiveClick();
    handleSecondNounClick();
    handleSettingClick();
    handlePlaybackClick();
}

function displayStudentDetails() {
    const studentDetails = document.getElementById('studentId');
    studentDetails.textContent = "Student Name:Rahi Patel ";
}

/* Event Listeners
-------------------------------------------------- */
nounButtonFirst.addEventListener('click', handleFirstNounClick);
verbButtonFirst.addEventListener('click', handleVerbClick);
adjectiveButtonFirst.addEventListener('click', handleAdjectiveClick);
nounButtonSecond.addEventListener('click', handleSecondNounClick);
settingButton.addEventListener('click', handleSettingClick);
playbackControl.addEventListener('click', handlePlaybackClick);
shuffleControl.addEventListener('click', handleShuffleClick);
document.addEventListener('DOMContentLoaded', displayStudentDetails);
