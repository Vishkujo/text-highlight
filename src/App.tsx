import type { Component } from 'solid-js';

// Highlight a word
function highlight(word: string) {
  return (
    <span class="bg-sky-600 p-1 text-white rounded inline-block">
      {word}
    </span>
  )
}

// Create type for props
type WordProps = {
  text: string;
}

// Go through all the words and highlight
const Highlighter = (props: WordProps) => {

  // Split the text into an array using a space
  let words = props.text.split(" ");

  return (
    <div class="text-left px-8 mr-2 mt-5">
      {words.map((word, index) => {
        return (
          highlight(word)
      )
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

      <div class="mt-3">
        <button class="rounded play-button p-2 m-1 border-2 bg-blue-800 text-white border-blue-900">Play</button>
        <button class="rounded pause-button p-2 m-1 border-2 bg-blue-800 text-white border-blue-900">Pause</button>
      </div>
    </div>
  );
}

export default App;
