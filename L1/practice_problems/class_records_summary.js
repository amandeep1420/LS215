/*
P
  - create a function that creates a class record summary
  - input: object contaiing objects for each student key
  - output: see example
    - object with two keys: studentGrades and exams
      - studentGrades should contain an array with each student's numeric and letter grade
      - exams should contain an array of objects, each one showing an average, min, and max 
        for a given exam across all students
  ~
  - note: no specification made regarding mutation
  - note: num.toFixed() will be helpful
  - note: follow steps for computing scores in example
E
  - see book
D
  - object with specified properties
A
  > two main goals: find each student's grade, and find the average/min/max for each exam
  
  > find a student's grade    -----> should handle retrieving exam scores and storing them, too
    - skeleton for accessing and iterating
      - let studentGrades = []
      - let examsArrays = []
      - studentScores.each (student)
        - let examScores = student.scores.exams
        - let exerciseScores = student.scores.exercises
        
        - examsArrays.push(examScores)
        
        - let numericGrade = findNumericGrade(examScores, exerciseScores);
        - let letterGrade = findLetterGrade(numericGrade);
        - studentGrades.push(`${numericGrade} (${letterGrade})`)
        
  > this is the skeleton for finding a student's grade and rounding up all the exam
    arrays for later processing; let's tackle this first
    
  > skeleton done; create helper methods
  
  > handle the exam info object generation
    - here's what we have: [[exam1score, exam2score..], [exam1score, exam2score..]]
      - first, transform this into an array of arrays, each one containing the score for one exam
        - exams.map (array)
          - let scoresForThisExam = []
          - exams.forEach((array, index) => scoresForThisExam.push(array[index]))
          - return scoresForThisExam
*/

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
  
  let examsInfoArray = generateExamInfo(examsArrays);
  
  return {studentGrades: allGrades, exams: examsInfoArray};
}

function findNumericGrade(exams, exercises) {
  let averageExamScore   = exams.reduce((total, score) => total + score) / 4;
  let totalExerciseScore = exercises.reduce((total, score) => total + score);
  
  let finalPercentGrade = (averageExamScore * 0.65) + (totalExerciseScore * 0.35);
  return Math.round(finalPercentGrade);
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

/*
  > handle the exam info object generation
    - here's what we have: [[exam1score, exam2score..], [exam1score, exam2score..]]
      - first, create a new array to store the scores for each exam
      - next, figure out how many exams there are
      - next, create a loop
        - within the loop
          - scoresForOneExam = []
          - exams.forEach(examArr => scoresForOneExam.push(examArr[examIndex])
          - push the built array to the array containing the arrays for each exam
    - next, transform each array into an object containing the specified info
    
      
*/

function generateExamInfo(exams) {
  let scoreArraysForEachExam = [];
  let numberOfExams = exams[0].length;
  
  for (let examIndex = 0; examIndex < numberOfExams; examIndex += 1) {
    let scoresForOneExam = [];
    exams.forEach(examArr => scoresForOneExam.push(examArr[examIndex]));
    scoreArraysForEachExam.push(scoresForOneExam);
  }
  
  return scoreArraysForEachExam.map(scoreArray => {
    let avgScore = scoreArray.reduce((total, num) => total + num) / scoreArray.length;
    avgScore     = parseFloat(avgScore.toFixed(1), 10);
    let minScore = scoreArray.reduce((min, num) => min < num ? min : num);
    let maxScore = scoreArray.reduce((max, num) => max < num ? num : max);
    
    return ({average: avgScore, minimum: minScore, maximum: maxScore});
  });
}


let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

let result = generateClassRecordSummary(studentScores);

console.log(result);