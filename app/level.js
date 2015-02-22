var base = 80;
var increaseCoefficient = 1.1;

function getXpForNextLevel(level) {
    return Math.round(base * Math.pow(increaseCoefficient, level));
}

module.exports = {
    xpForNextLevel: getXpForNextLevel
};
