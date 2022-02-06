import { useEffect, useState } from 'react';
import PageWordsStorage from './components/PageWordsStorage/PageWordsStorage';
import StackBtn from './components/StackBtn/StackBtn';
const myWords = ['on', 'in', 'above', 'below', 'with', 'about'];

// localStorage.setItem('myWords', myWords);
// const listWords = localStorage.getItem('myWords').split(',');

function App() {
  const [words, setWords] = useState(
    localStorage.getItem('myWords').split(','),
  );
  console.log('🚀 ~ file: App.js ~ line 13 ~ App ~ words', words);

  useEffect(() => {
    if (localStorage.getItem('myWords').split(',') !== words) {
      localStorage.setItem('myWords', words);
    }
  }, [words]);

  const onClick = function (e) {
    e.preventDefault();
    console.log(e.target.textContent);
  };
  return (
    <div>
      <PageWordsStorage setWords={setWords} words={words}>
        {words && <StackBtn array={words} onClick={onClick} />}
      </PageWordsStorage>
    </div>
  );
}

export default App;
