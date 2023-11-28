window.addEventListener('DOMContentLoaded', ()=>{
     const textarea = document.getElementById ('input-text');
     const wordCountDisplay = document.getElementById ('word-count');
     const characterCountDisplay = document.getElementById ('character-count');
     const uniqueWordsDisplay = document.getElementById ('unique-words');
     
     textarea.addEventListener('input', ()=>{
        const text = textarea.value.trim();
        const words = text === '' ? 0 : text.split(/\s+/).length;
        const characters = text.length;
        const uniqueWords = new Set(text.match(/\b\w+\b/g)).size;

        wordCountDisplay.innerHTML = `word count: ${words}`;
        characterCountDisplay.innerHTML = `character count: ${characters}`;
        uniqueWordsDisplay.innerHTML = `unique words: ${uniqueWords}`;
     });
});