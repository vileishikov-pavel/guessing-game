class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.range = [];
        for(min; min <= max; min++) {
            this.range.push(min);
        }
    }

    guess() {
        this.index = Math.round(this.range.length / 2);
        return this.range[this.index];
    }

    lower() {
        this.range = this.range.slice(0, this.index);
    }

    greater() {
        this.range = this.range.slice(this.index, this.range.length);
    }
}

module.exports = GuessingGame;
