// Css
import './App.css'
// React
import { useCallback, useEffect, useState } from 'react';
// data
import {wordsList} from '../src/data/words';
// Componentes
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'
// Criação de telas
  const stages = [
    {id:1, name:"start"},
    {id:2, name:"game"},
    {id:3, name:"end"}
  ];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words, setWords] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () =>{
    // pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * categories.length)];

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    // return word and category
    return {word, category}

    // console.log(`categoria: ${category} - palavra: ${word}`); //teste de categoria e palavra
  }


  // start Secret Word
  const startGame = () =>{
    // pick word and pick category
    const {word, category} = pickWordAndCategory();
    // console.log(word, category) //show the category and words of a function

    // create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase()) //trasform all letters in lower case letters
    // console.log(wordLetters) //test the letters separation

    // fill useState's
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    // go to game screen
    setGameStage(stages[1].name);
  }
  // process the letter input
  const verifyLetter = () =>{
    setGameStage(stages[2].name);
  }
  // Restarts the game
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
      <div className='App'>
        {gameStage === "start" && <StartScreen startGame={startGame}/>}
        {gameStage === "game" && <Game verifyLetter={verifyLetter}/> }
        {gameStage === "end" && <GameOver retry={retry}/>}
      
      </div>
  )
}

export default App
