function initQuiz() {
  let rows = allQuestions.getRows();
  let tempQuestions = [];

  for (let r of rows) {
    tempQuestions.push({
      prompt: r.getString('prompt'),
      options: [
        r.getString('optionA'),
        r.getString('optionB'),
        r.getString('optionC'),
        r.getString('optionD')
      ],
      correct: int(r.getString('correct'))
    });
  }

  // Fisher-Yates 隨機洗牌
  for (let i = tempQuestions.length - 1; i > 0; i--) {
    let j = floor(random(i + 1));
    let temp = tempQuestions[i];
    tempQuestions[i] = tempQuestions[j];
    tempQuestions[j] = temp;
  }

  let numToDraw = min(5, tempQuestions.length);
  quizQuestions = tempQuestions.slice(0, numToDraw);
 
  currentQuestion = 0;
  score = 0;
  isAnswered = false;
  selectedOption = null;

  if (quizQuestions.length > 0) {
    resetOptionButtonStyles();
    updateButtonText(0); // 確保一開始就強制更新第一題按鈕文字
  }
}
