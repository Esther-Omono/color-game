export class colorGenerator {
    static generateRandomColor() {
        const hue = Math.floor(Math.random() * 360);
        const saturation = 70 + Math.floor(Math.random() * 30);
        const lightness = 45 + Math.floor(Math.random() * 10);
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    static generateColorSet(count) {
        const colors = [];
        for (let i = 0; i < count; i++) {
            colors.push(this.generateRandomColor());
        }
        return colors;
    }

    static selectRandomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    }
}