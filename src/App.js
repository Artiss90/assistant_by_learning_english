import AppearMessage from 'components/AppearMessage/AppearMessage';
import { useEffect, useState } from 'react';
import PageWordsStorage from './components/PageWordsStorage/PageWordsStorage';
import StackBtn from './components/StackBtn/StackBtn';

function App() {
  const [words, setWords] = useState(
    localStorage.getItem('myWords').split(','),
  );
  const [toggleModal, setToggleModal] = useState(false);
  const [wordForDelete, setWordForDelete] = useState('');

  useEffect(() => {
    if (localStorage.getItem('myWords').split(',') !== words) {
      localStorage.setItem('myWords', words.sort());
    }
  }, [words]);

  const onSelectWord = function (e) {
    e.preventDefault();
    setToggleModal(true);
    setWordForDelete(e.target.textContent);
  };

  const hideModal = () => setToggleModal(false);

  const deleteWord = () => {
    const withoutDeleteWord = words.filter(item => item !== wordForDelete);
    setWords(withoutDeleteWord);
    setWordForDelete('');
    hideModal();
  };

  return (
    <div>
      <PageWordsStorage setWords={setWords} words={words}>
        {words && <StackBtn array={words} onClick={onSelectWord} />}
      </PageWordsStorage>

      {toggleModal && (
        <AppearMessage
          ok={deleteWord}
          cancel={hideModal}
          text="Вы уверенны что хотите удалить"
          current={wordForDelete}
        />
      )}
    </div>
  );
}

export default App;
