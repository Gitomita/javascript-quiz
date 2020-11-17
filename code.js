const quiz = [
    {
        question: 'facebook成功の一番の要因は？',
        answers: ['ザッカーバーグの才能', 'ダスティン・モスコビッツの働き', '安易に広告を付けなかったこと', 'ショーン・パーカーの働き'],
        correct: 'ショーン・パーカーの働き'
  }, {
        question: '富田裕之が最も好きな仮面ライダーシリーズはどれ？',
        answers: ['クウガ', 'アギト', 'ファイズ', 'アマゾンズ'],
        correct: 'アギト'
  }, {
        question: '伊坂幸太郎が著者の作品は？',
        answers: ['とんび', '教団X', '死神の精度', 'あなたの人生の物語'],
        correct: '死神の精度'
  }
];

const $window = window;


const $doc = document;

const $question = $doc.getElementById('js-question');

const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
    $question.textContent = quiz[quizCount].question;

    const buttonLen = $buttons.length;
    let btnIndex = 0;

    while (btnIndex < buttonLen) {
        $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
        btnIndex++;
    }
};

const goToNext = () => {
    quizCount++;
    if (quizCount < quizLen) {
        init(quizCount);
    } else {
        showEnd();
    }
};

const judge = (elm) => {
    if (elm.textContent === quiz[quizCount].correct) {
        $window.alert('正解!');
        score++;
    } else {
        $window.alert('不正解!');
    }
    goToNext();
};

const showEnd = () => {
    $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';

    const $items = $doc.getElementById('js-items');
    $items.style.visibility = 'hidden';
};




init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while (answersIndex < answersLen) {
    $buttons[answersIndex].addEventListener('click', (e) => {
        judge(e.target);
    });
    answersIndex++;
}
