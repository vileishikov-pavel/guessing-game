class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.range = [];
        for(min; min <= max; min++) {
            this.range.push(min);
        }
        this.startIndex = 0;
        this.endIndex = this.range.length - 1;
    }

    guess() {
        this.curIndex = Math.round((this.startIndex + this.endIndex) / 2);
        return this.range[this.curIndex];
    }

    lower() {
        this.endIndex = this.curIndex;
    }

    greater() {
        this.startIndex = this.curIndex;
    }
}

module.exports = GuessingGame;
