// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2


// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var byeSpeaker =

(function (window) {
  let calculator = {};
  calculator.add = function (a, b) {
    console.log(a + b);
    return a + b;
  }
  window.calc = calculator;
})(window);

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
(function (window) {
  let goodbyeSpeaker = {};
  const speakWord = "Good Bye";
  
  goodbyeSpeaker.speak = function (firstName) {
    console.log(speakWord + " " + firstName);
  }

  window.goodbyeSpeaker = goodbyeSpeaker;

})(window);


//var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
// function speak(name) {
//   console.log(speakWord + " " + name);
// }

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
