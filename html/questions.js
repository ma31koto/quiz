const answersList = document.querySelectorAll("ol.answers li");

answersList.forEach((li) => li.addEventListener("click", checkClickedAnswer));

//正しい答え
const correctAnswers = {
  1: 'B',
  2: 'A',
  3: 'B',
  4: 'C'
};


function checkClickedAnswer(event) {
  //クリックされて答えの要素(liタグ)
  const clickedAnswerElement = event.currentTarget;

  //選択した答え
  const selectedAnswer = clickedAnswerElement.dataset.answer;

  const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;
  //正しい答え
  const correctAnswer = correctAnswers[questionId];

  
  // フォームデータの入れ物を作る
  const formData = new FormData();
  
  // 送信したい値を追加
  formData.append('id', questionId);
  formData.append('selectedAnswer', selectedAnswer);
  
  // xhr = XMLHttpRequestの頭文字です
  const xhr = new XMLHttpRequest();

  // HTTPメソッドをPOSTに指定、送信するURLを指定
  xhr.open('POST', 'answer.php');

  // フォームデータを送信
  xhr.send(formData);

  // loadendはリクエストが完了したときにイベントが発生する
  xhr.addEventListener('loadend', function(event) {
    /** @type {XMLHttpRequest} */
    const xhr = event.currentTarget

    //リクエストが成功したかステータスコードで確認
    if(xhr.status === 200) {

    } else {
      //エラー
      alert('Error: 回答データの取得に失敗しました’);
    }
   });

  //答えが正しいか判定
  const result = selectedAnswer === correctAnswer;
  //画面表示
  displayResult(result);

}

function displayResult(result) {
  //メッセージを入れる変数を用意
  let message;
  //カラーコードを入れる変数を用意
  let answerColorCode;
  
  //答えが正しいか判定
  if (result) {
    //正しい答えだった時
    message = '正解です！おめでとうございます！';
    answerColorCode = '';
  } else {
    //間違った答えだった時
    message = '残念！不正解です！';
    answerColorCode = 'red';
  }
  
  alert(message)
  
  //色を変更(間違っていた時だけ色が変わる)
  document.querySelector('span#correct-answers').style.color = answerColorCode;
  ///答え全体を表示
  document.querySelector('div#section-correct-answers').style.display = 'block';
  
}