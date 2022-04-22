import Counter from "./components/Counter";
import User from "./components/User";

import TimerParent from "./components/TimerParent";
import CounterRed from './components/CounterRed';
import Form from "./components/Form";
import Form2 from "./components/Form2";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <h2>useState</h2>
      <Counter/>
      <User/>

      <h2>useEffect - useRef</h2>
      <hr />
      <TimerParent/>

      <h2>useReducer</h2>
      <hr />
      <CounterRed/>

      <h2>Custom Hooks</h2>
      <hr />
      <Form/>
      <br />
      <Form2/>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
