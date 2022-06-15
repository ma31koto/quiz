<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <script src="questions.js" defer></script>
    <title>問題1 ｜ Quiz</title>
  </head>
  <body>
    <div id="main">
      <h1>Quiz</h1>

      <div class="section">
        <h2>問題1</h2>
        <p>
          <?php echo $question; ?>
      
        </p>
        <h3>選択肢</h3>
        <ol class="answers" data-id="question1">
          <li data-answer="A">HyperTextMakingLanguage</li>
          <li data-answer="B">HyperTextMarkupLanguage</li>
          <li data-answer="C">HonmaniTensaitekinaMajidesugoiLanguage</li>
          <li data-answer="D">そもそも略称ではない</li>
        </ol>
      </div>

      <div id="section-correct-answers" class="section">
        <h2>答え</h2>
        <p>
          <span id="correct-answers"> B. HyperTextMarkupLanguage </span><br />
          これが間違えてたら「HTMLとは？」の動画を復習お願いします！
        </p>
      </div>

      <div class="section">
        <a href="index.html">戻る</a>
      </div>
    </div>
  </body>
</html>
