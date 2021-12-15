
const { test, expect } = require("@jest/globals");
const translate = require("./index");

describe("to Pig Latin", function(){

    test("word that starts with a", function(){
        expect(translate("Apple")).toEqual("appleway");
    })
    test("word that starts with e", function(){
        expect(translate("else")).toEqual("elseway");
    })
    test("word that starts with i", function(){
        expect(translate("icky")).toEqual("ickyway");
    })
    test("word that starts with o", function(){
        expect(translate("open")).toEqual("openway");
    })
    test("word that starts with u", function(){
        expect(translate("upon")).toEqual("uponway");
    })
    test("word that starts with one consonant", function(){
        expect(translate("giraffe")).toEqual("iraffegay");
    })
    test("word that starts with one consonant", function(){
        expect(translate("talk")).toEqual("alktay");
    })
    test("word that starts with 2 consonants", function(){
        expect(translate("clap")).toEqual("lapcay");
    })
    test("word that starts with 3 consonants", function(){
        expect(translate("chrome")).toEqual("hromecay")
    })
})

