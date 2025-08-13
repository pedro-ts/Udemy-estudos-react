// Css
import "./App.css";
// React
import { useCallback, useEffect, useState } from "react";
// data
import { wordsList } from "../src/data/words";
// Componentes
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
// Criação de telas
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words, setWords] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    // pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    // return word and category
    return { word, category };

    // console.log(`categoria: ${category} - palavra: ${word}`); //teste de categoria e palavra
  };

  // start Secret Word
  const startGame = useCallback(() => {
    // clear all letters
    clearLetterStates();
    // pick word and pick category
    const { word, category } = pickWordAndCategory();
    // console.log(word, category) //show the category and words of a function

    // create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase()); //trasform all letters in lower case letters
    // console.log(wordLetters) //test the letters separation

    // fill useState's
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    // go to game screen
    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);
  // process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();
    // check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }
    // push letter in your group(wrong or right) && remove or no a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };
  // Check if guesses ended
  useEffect(() => {
        if (guesses <= 0) {
          // reset all states
          clearLetterStates();
          setGameStage(stages[2].name);
        }
      }, [guesses]);
  // Check win condition
  useEffect(()=>{
    const uniqueLetters = [... new Set(letters)]

    if(guessedLetters.length == uniqueLetters.length){
      // add score
      setScore((actualScore) => actualScore += 100);
      // restart game new word
      startGame();
    }
  }, [guessedLetters])
  
  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  // Restarts the game
  const retry = () => {
    setScore(0);
    setGuesses(3);
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}


export default App;
