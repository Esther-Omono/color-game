import { colorGenerator } from './colorGenerator.js';
import { gameUI } from './gameUI.js';
import { gameState } from './gameState.js';

export class colorGame {
    constructor() {
        this.ui = new gameUI();
        this.state = new gameState();
        this.initialize();
    }

    initialize() {
        this.ui.setNewGameHandler(() => this.resetGame());
        this.startNewGame();
    }

    resetGame() {
        const newScore = this.state.resetScore();
        this.ui.updateScore(newScore);
        this.startNewGame();
    }

    startNewGame() {
        const colors = colorGenerator.generateColorSet(6);
        const targetColor = colorGenerator.selectRandomColor(colors);

        this.state.setColors(colors);
        this.state.setTargetColor(targetColor);

        this.ui.updateColorBox(targetColor);
        this.ui.createColorButtons(colors, (color) => this.handleGuess(color));
        this.ui.clearGameStatus();
    }

    handleGuess(color) {
        if (this.state.isCorrectGuess(color)) {
            const newScore = this.state.incrementScore();
            this.ui.updateScore(newScore);
            this.ui.showGameStatus('Yaasss! That is correct! Well done!', true);
            setTimeout(() => this.startNewGame(), 1000);
        } else {
            this.ui.showGameStatus('Owwww! Nah! Try again!');
        }
    }
}