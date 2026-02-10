// 1. HTMLの要素を取得する（Pythonで変数に代入する感覚）
const form = document.querySelector('form'); // <form>タグを見つけてくる

// 2. イベントリスナーを設定する（「もし送信されたら...」という待機命令）
form.addEventListener('submit', function(event) {
    
    // 3. デフォルトの動作（ページのリロード）を止める
    event.preventDefault();

    // 4. アラートを出す（ポップアップ）
    alert('お問い合わせありがとうございます！\n（※これはデモです。実際には送信されません）');

    // 5. フォームの中身を空にする
    form.reset();
});