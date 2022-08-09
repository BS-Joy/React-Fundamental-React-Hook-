// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Todo from './components/useState/TodoFunction';
// import TodoClass from './components/useState/TodoClass';

// import ClickClass from './components/useEffect/ClickClass';
// import Click from './components/useEffect/Click';
import Title from './components/useCallback/Title';
import ShowCount from './components/useCallback/ShowCount';
import Button from './components/useCallback/Button';

function App() {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  // const incrementByOne = () => {
  //   setCount1((prevCount) => prevCount + 1);
  // }

  const incrementByOne = React.useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);
  
  // const incrementByFive = () => {
  //   setCount2((prevCount) => prevCount + 5);
  // };

  const incrementByFive = React.useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEvenOdd = React.useMemo(() => {
    let i = 0;
    while (i<1000000000){
      i++;
    }
    return count1 % 2 === 0;
  }, [count1]);


  return (
    <div>
      <Title />
      <ShowCount count={count1} title="Count 1" />
      <Button clickHandle={incrementByOne}>Increment By 1</Button>
      <p>{isEvenOdd ? 'Number is even' : 'Number is odd'}</p>
      <hr />
      <ShowCount count={count2} title="Count 1" />
      <Button clickHandle={incrementByFive}>Increment By 5</Button>
    </div>
  );
}

export default App;
