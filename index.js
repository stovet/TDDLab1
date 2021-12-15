function translate(word){
    word = word.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u']

        if(vowels.includes(word[0])){
            return word + "way";
        }
        let letter = word[0];
        word = word.slice(1, word.length);
        return word + letter + "ay";
}

module.exports = translate;