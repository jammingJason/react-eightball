import logo from './logo.svg';
import './App.css';
import EightBall from './EightBall';
import Answers from './Answers';
function App() {
  return (
    <>
      <EightBall answers={Answers} />
    </>
  );
}

export default App;
