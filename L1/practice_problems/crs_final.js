function generateClassRecordSummary(scores) {
  let allGrades      = [];
  let examsArrays    = [];
  let studentObjects = Object.values(scores);
  
  studentObjects.forEach(student => {
    let examScores     = student.scores.exams;
    let exerciseScores = student.scores.exercises;
    
    examsArrays.push(examScores);
    
    let numericGrade = findNumericGrade(examScores, exerciseScores);
    let letterGrade  = findLetterGrade(numericGrade);
    allGrades.push(`${numericGrade} (${letterGrade})`);
  });
  
  let examsInfoArray = generateExamsInfo(examsArrays);
  
  return {studentGrades: allGrades, exams: examsInfoArray};
}

function findNumericGrade(exams, exercises) {
  let averageExamScore   = exams.reduce((total, score) => total + score) / 4;
  let totalExerciseScore = exercises.reduce((total, score) => total + score);
  
  let finalGrade = (averageExamScore * 0.65) + (totalExerciseScore * 0.35);
  return Math.round(finalGrade);
}

function findLetterGrade(numericGrade) {
  if (numericGrade >= 93) {
    return 'A';
  } else if (numericGrade >= 85) {
    return 'B';
  } else if (numericGrade >= 77) {
    return 'C';
  } else if (numericGrade >= 69) {
    return 'D';
  } else if (numericGrade >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function generateExamsInfo(exams) {
  let scoreArraysForEachExam = [];
  let numberOfExams          = exams[0].length;
  
  for (let examIndex = 0; examIndex < numberOfExams; examIndex += 1) {
    let scoresForOneExam = [];
    exams.forEach(examArr => scoresForOneExam.push(examArr[examIndex]));
    scoreArraysForEachExam.push(scoresForOneExam);
  }
  
  return scoreArraysForEachExam.map(scores => {
    let avgScore = scores.reduce((total, num) => total + num) / scores.length;
    avgScore     = parseFloat(avgScore.toFixed(1), 10);
    let minScore = scores.reduce((min, num) => min < num ? min : num);
    let maxScore = scores.reduce((max, num) => max < num ? num : max);
    
    return ({average: avgScore, minimum: minScore, maximum: maxScore});
  });
}
