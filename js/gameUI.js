export class gameUI {
    constructor() {
        this.gameStatus = document.getElementById('game-status');
        this.scoreElement = document.getElementById('score');
        this.colorBox = document.getElementById('color-box');
        this.colorOptions = document.getElementById('color-options');
        this.newGameButton = document.getElementById('new-game-button');
    }

    updateColorBox(color) {
        this.colorBox.style.backgroundColor = color;
    }

    updateScore(score) {
        this.scoreElement.textContent = score;
    }

    showGameStatus(message, isCorrect = false) {
        this.gameStatus.textContent = message;
        this.gameStatus.classList.add('fade-in');
        
        if (isCorrect) {
            this.colorBox.classList.add('celebrate');
            setTimeout(() => {
                this.colorBox.classList.remove('celebrate');
            }, 1000);
        }

        setTimeout(() => {
            this.gameStatus.classList.remove('fade-in');
        }, 300);
    }

    createColorButtons(colors, onColorClick) {
        this.colorOptions.innerHTML = '';
        colors.forEach(color => {
            const button = document.createElement('button');
            button.setAttribute('data-testid', 'colorOption');
            button.className = 'color-option fade-in';
            button.style.backgroundColor = color;
            button.addEventListener('click', () => onColorClick(color));
            this.colorOptions.appendChild(button);
        });
    }

    setNewGameHandler(handler) {
        this.newGameButton.addEventListener('click', handler);
    }

    clearGameStatus() {
        this.gameStatus.textContent = '';
    }
}
