import { useState } from 'react';
import PageWordsStorage from './components/PageWordsStorage/PageWordsStorage';
import StackBtn from './components/StackBtn/StackBtn';
const myWords = ['on', 'in', 'above', 'below', 'with', 'about'];

function App() {
  const [words, setWords] = useState(myWords);

  const onClick = function (e) {
    e.preventDefault();
    console.log(e.target.textContent);
    console.dir(e.target);
  };
  return (
    <div>
      <PageWordsStorage>
        <StackBtn array={words} onClick={onClick} />
      </PageWordsStorage>
    </div>
  );
}

export default App;
