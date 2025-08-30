# Choose Your Own Adventure - Proof of Concept

A simple web-based Choose Your Own Adventure game that demonstrates interactive storytelling with branching narratives.

## Features

- **Interactive Story**: Navigate through a branching narrative with multiple paths and endings
- **Beautiful UI**: Clean, responsive design with smooth animations and transitions
- **Keyboard Support**: Use number keys (1-9) to make choices quickly, or 'R' to restart
- **Multiple Endings**: Discover different outcomes based on your choices
- **Scene Tracking**: Keep track of your progress through the story

## How to Play

1. Open `index.html` in your web browser
2. Read the story text and choose from the available options
3. Click on choices or use number keys (1, 2, 3, etc.) to make selections
4. Experience different paths and endings based on your decisions
5. Use the "Start Over" button or press 'R' to restart at any time

## Story Overview

You begin at the edge of a mysterious forest with multiple paths ahead. Your choices will determine whether you:
- Discover magical creatures and ancient secrets
- Meet a wise witch who offers mystical gifts
- Explore temple ruins and hidden groves
- Find courage, wisdom, or your true destiny

## Technical Details

- **HTML5** for structure
- **CSS3** for styling with gradients, animations, and responsive design
- **Vanilla JavaScript** for game logic and interactivity
- No external dependencies required

## File Structure

```
poc_cyoa/
├── index.html          # Main game interface
├── styles.css          # Game styling and animations
├── game.js            # Story data and game logic
└── README.md          # Project documentation
```

## Customization

The story content is stored in the `storyData` object in `game.js`. You can easily:
- Add new scenes by extending the `storyData` object
- Modify existing story text and choices
- Create new branching paths and endings
- Adjust styling in `styles.css`

## Browser Compatibility

This game works in all modern browsers that support:
- ES6 JavaScript features
- CSS Grid and Flexbox
- CSS animations and transitions

Enjoy your adventure! 🌟