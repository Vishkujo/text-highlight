import { createSignal, createEffect } from 'solid-js';
import { createStore } from "solid-js/store";

// Highlight a word
function highlight(word: string) {
  return (
    <span>
      <span class="bg-sky-600 p-0.5 text-white rounded inline-block animate-zoominandout">{word}</span><span>&nbsp;</span>
    </span>
  )
}

// Create type for props
type WordProps = {
  text: string;
}

// Create a signal to keep track of which word is highlighted
const [highlighted, setHighlighted] = createSignal(0);

// Create a store which holds a boolean value of whether the effect is paused or not
const [pauseState, setPause] = createStore(
  { paused: false }
);

// Go through the text and highlight each word
const Highlighter = ({ text }: WordProps) => {
  return startHighlighting(text);
}

function startHighlighting(text: string) {
  // Split the text into an array using a space
  let words = text.split(" ");

  // Create an effect that sets a highlighted word
  createEffect(() => {
    // Make an interval to set the highlighted word every 350 milliseconds
    const interval = setInterval(() => {
      // Increase the highlighted word index if not paused
      if (pauseState.paused === false) {
        // Initialize highlighted word index at 0 then add 1 each time
        setHighlighted(highlighted => highlighted + 1);
      }
      // Once it reaches the end of the word list
      if (highlighted() === words.length) {
        // Stop the interval from increasing
        clearInterval(interval);
        setHighlighted(-1);
        setPause({ paused: true });
      }
    }, 350);
  })

  return (
    <div class="m-8 mr-5">
      {/* Go through each word in the text */}
      {words.map((word, index) => {
        {/* If the word at the current index matches the highlighted one in the signal then...*/ }
        if (index === highlighted()) {
          {/* Highlight the word at that index */ }
          return highlight(words[index]);
        }
        else {
          {/* Otherwise just display the regular word with a space after (since spaces were removed with .split()) */ }
          return word + " ";
        }
      })}
    </div>
  )
}

function App() {
  return (
    <div class="App">
      <Highlighter
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />

      <div class="mt-3 px-8">
        <button class="rounded play-button p-2 m-1 border-2 bg-blue-700 hover:bg-blue-900 text-white border-blue-900" onClick={() => setPause({ paused: false })}>Play</button>
        <button class="rounded pause-button p-2 m-1 border-2 bg-blue-700 hover:bg-blue-900 text-white border-blue-900" onClick={() => setPause({ paused: true })}>Pause</button>
      </div>
    </div>
  );
}

export default App;
