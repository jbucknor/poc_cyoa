// Story data structure
const storyData = {
    start: {
        text: "You find yourself standing at the edge of a mysterious forest. The ancient trees tower above you, their branches creating intricate patterns against the twilight sky. A worn path leads deeper into the woods, while to your right, you notice smoke rising from what appears to be a small cottage.",
        choices: [
            { text: "Follow the path into the forest", next: "forest_path" },
            { text: "Investigate the cottage", next: "cottage" },
            { text: "Turn back and leave this place", next: "retreat" }
        ]
    },
    
    forest_path: {
        text: "As you venture deeper into the forest, the path becomes increasingly narrow and overgrown. Suddenly, you hear a rustling in the bushes ahead. A majestic deer emerges, its eyes gleaming with an otherworldly intelligence. It seems to be beckoning you to follow.",
        choices: [
            { text: "Follow the mysterious deer", next: "follow_deer" },
            { text: "Continue on the original path", next: "original_path" },
            { text: "Try to approach the deer slowly", next: "approach_deer" }
        ]
    },
    
    cottage: {
        text: "You approach the quaint cottage, its windows glowing warmly in the fading light. An elderly woman sits on the porch, rocking gently in her chair. She notices your approach and smiles knowingly. 'I've been expecting you,' she says with a voice like honey.",
        choices: [
            { text: "Ask her how she knew you were coming", next: "ask_witch" },
            { text: "Request shelter for the night", next: "request_shelter" },
            { text: "Be cautious and keep your distance", next: "cautious_cottage" }
        ]
    },
    
    retreat: {
        text: "Sometimes wisdom lies in knowing when to walk away. You turn your back on the mysterious forest and cottage, choosing the safety of the known world. As you walk away, you can't help but wonder what adventures you might have missed... but you'll live to see another day.",
        choices: [],
        ending: true
    },
    
    follow_deer: {
        text: "The deer leads you through a hidden grove where magical flowers bloom even in the darkness. In the center stands an ancient stone altar with a glowing crystal. The deer approaches the crystal and nods at you, as if asking you to make a choice.",
        choices: [
            { text: "Touch the crystal", next: "magic_crystal" },
            { text: "Leave the crystal and explore more", next: "explore_grove" },
            { text: "Thank the deer and head back", next: "return_path" }
        ]
    },
    
    original_path: {
        text: "You decide to stick to your original plan and continue along the main path. After walking for some time, you discover the ruins of an ancient temple. Vines have claimed most of the structure, but you can still make out intricate carvings on the remaining walls.",
        choices: [
            { text: "Explore the temple ruins", next: "temple_ruins" },
            { text: "Search for another path", next: "find_path" },
            { text: "Rest here for the night", next: "rest_temple" }
        ]
    },
    
    approach_deer: {
        text: "As you slowly approach, the deer doesn't flee. Instead, it allows you to come close enough to see that it wears a collar made of silver with strange symbols. When you reach out, the deer speaks in your mind: 'You have a gentle heart. I will grant you one wish.'",
        choices: [
            { text: "Wish for wisdom", next: "wish_wisdom" },
            { text: "Wish to understand all creatures", next: "wish_communication" },
            { text: "Wish to find your way home", next: "wish_home" }
        ]
    },
    
    ask_witch: {
        text: "'The forest told me,' she replies with a mysterious smile. 'It speaks to those who know how to listen. You have a choice ahead of you, young one. I can offer you three gifts: a potion of courage, a map of hidden paths, or the knowledge of your true destiny.'",
        choices: [
            { text: "Choose the potion of courage", next: "courage_potion" },
            { text: "Choose the map of hidden paths", next: "hidden_map" },
            { text: "Choose knowledge of your destiny", next: "destiny_knowledge" }
        ]
    },
    
    request_shelter: {
        text: "The woman welcomes you into her warm cottage. Inside, herbs hang from the rafters and strange books line the shelves. She offers you a meal and a place by the fire. As the night grows late, she shares stories of the forest's magic and its many secrets.",
        choices: [
            { text: "Ask to learn about forest magic", next: "learn_magic" },
            { text: "Rest peacefully for the night", next: "peaceful_rest" },
            { text: "Explore her collection of books", next: "explore_books" }
        ]
    },
    
    magic_crystal: {
        text: "As your fingers touch the crystal, a surge of energy flows through you. Suddenly, you can understand the language of the wind, the whispers of the trees, and the songs of the night creatures. You have gained the gift of nature's voice, and with it, the responsibility to protect this magical realm.",
        choices: [],
        ending: true
    },
    
    wish_wisdom: {
        text: "The deer's gift fills your mind with ancient knowledge. You understand the true nature of the forest, its inhabitants, and your place in the grand tapestry of existence. With this wisdom, you become a guardian of the natural world, bridging the gap between human and nature.",
        choices: [],
        ending: true
    },
    
    courage_potion: {
        text: "You drink the potion and feel an incredible surge of bravery. With your newfound courage, you decide to explore the deepest, most dangerous parts of the forest. Your adventures become legendary, and you discover treasures and secrets that few mortals ever witness.",
        choices: [],
        ending: true
    },
    
    destiny_knowledge: {
        text: "The witch reveals that you are destined to become a bridge between two worlds - the mundane and the magical. Your journey has only just begun, but with this knowledge, you set forth to fulfill your destiny, bringing wonder and magic back to a world that has forgotten how to believe.",
        choices: [],
        ending: true
    },
    
    peaceful_rest: {
        text: "You sleep deeply and dream of magical adventures. When you wake, you find yourself back at the edge of the forest with only the memory of an incredible night. Though you're not sure if it was real or a dream, you carry the warmth of that experience with you forever.",
        choices: [],
        ending: true
    }
};

// Game state
let currentScene = 'start';
let gameHistory = [];

// DOM elements
const storyTextEl = document.getElementById('story-text');
const choicesContainerEl = document.getElementById('choices-container');
const currentSceneEl = document.getElementById('current-scene');
const restartBtnEl = document.getElementById('restart-btn');

// Game functions
function displayScene(sceneKey) {
    const scene = storyData[sceneKey];
    if (!scene) {
        console.error('Scene not found:', sceneKey);
        return;
    }
    
    // Add to history
    gameHistory.push(currentScene);
    currentScene = sceneKey;
    
    // Update scene counter
    updateSceneCounter();
    
    // Display story text with animation
    storyTextEl.innerHTML = scene.text;
    storyTextEl.className = scene.ending ? 'fade-in ending' : 'fade-in';
    
    // Clear previous choices
    choicesContainerEl.innerHTML = '';
    
    // Display choices if not an ending
    if (!scene.ending && scene.choices.length > 0) {
        scene.choices.forEach((choice, index) => {
            const choiceBtn = document.createElement('button');
            choiceBtn.className = 'choice-btn fade-in';
            choiceBtn.textContent = choice.text;
            choiceBtn.style.animationDelay = `${index * 0.1}s`;
            choiceBtn.addEventListener('click', () => makeChoice(choice.next));
            choicesContainerEl.appendChild(choiceBtn);
        });
    } else if (scene.ending) {
        // Add a final message for endings
        const endingMsg = document.createElement('div');
        endingMsg.className = 'ending-message fade-in';
        endingMsg.innerHTML = '<p><strong>THE END</strong></p><p>Thank you for playing!</p>';
        endingMsg.style.textAlign = 'center';
        endingMsg.style.marginTop = '20px';
        endingMsg.style.fontSize = '1.1em';
        endingMsg.style.color = '#666';
        choicesContainerEl.appendChild(endingMsg);
    }
}

function makeChoice(nextScene) {
    // Add a small delay for better user experience
    setTimeout(() => {
        displayScene(nextScene);
    }, 200);
}

function updateSceneCounter() {
    const sceneNumber = gameHistory.length + 1;
    currentSceneEl.textContent = `Scene ${sceneNumber}`;
}

function restartGame() {
    currentScene = 'start';
    gameHistory = [];
    displayScene('start');
}

// Event listeners
restartBtnEl.addEventListener('click', () => {
    if (confirm('Are you sure you want to start over?')) {
        restartGame();
    }
});

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    displayScene('start');
});

// Add keyboard navigation
document.addEventListener('keydown', (event) => {
    const choiceButtons = document.querySelectorAll('.choice-btn');
    
    if (event.key >= '1' && event.key <= '9') {
        const choiceIndex = parseInt(event.key) - 1;
        if (choiceButtons[choiceIndex]) {
            choiceButtons[choiceIndex].click();
        }
    }
    
    if (event.key === 'r' || event.key === 'R') {
        if (confirm('Are you sure you want to restart?')) {
            restartGame();
        }
    }
});

// Add visual feedback for keyboard shortcuts
document.addEventListener('DOMContentLoaded', () => {
    // Add number indicators to choice buttons
    const observer = new MutationObserver(() => {
        const choiceButtons = document.querySelectorAll('.choice-btn');
        choiceButtons.forEach((btn, index) => {
            if (!btn.querySelector('.shortcut-hint')) {
                const hint = document.createElement('span');
                hint.className = 'shortcut-hint';
                hint.textContent = ` [${index + 1}]`;
                hint.style.opacity = '0.7';
                hint.style.fontSize = '0.8em';
                btn.appendChild(hint);
            }
        });
    });
    
    observer.observe(choicesContainerEl, { childList: true });
});