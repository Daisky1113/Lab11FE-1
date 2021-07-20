console.log('hello');

//DOMの取得

const header ={
    title : document.getElementById('title'),
}

const input = document.getElementById('js_input');
const text = document.getElementById('js_text');

const btns = {
    save : document.getElementById('js_save'),
    clear : document.getElementById('js_clear')
}

// 関数定義

const getInputContent = function(){
    return input.value;
}

const inputText = function(text){
    text.value = text;
}

const saveEvent = function(){
    btns.save.addEventListener('click', function(){
        inputText();
    })
}

//1.Save クリックイベント




//2.clear クリックイベント





//3.ページ読み込み：保存データ取得表示


