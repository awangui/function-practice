//Write an arrow function named calculateAverageScore that takes in an array of scores and returns the average score.
const calculateAverageScore = scores => {
    let sum = 0;
    //If the array is empty, return 0
    if (scores.length === 0) {
        return console.log(0);
    }
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return console.log(sum / scores.length);
};
calculateAverageScore([80, 90, 70, 60]);
calculateAverageScore([]);