import "./App.css";
/*import Greet from  './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import HelloSX from './components/HelloSX';
import Message from "./components/Meesage";*/
import Counter from "./components/Counter";
const App = () => {
  return (
    <div className="App">
       <Counter></Counter>
      {/*
      <Message />
      <Greet name="Angular" sirname="raja">
        <p>This is chlidren prop we can't render multiple tags so we haave to bind them in single tag this is the limitationn we currently have in jsx</p>
      </Greet>
      <Welcome></Welcome>
      <Hello sir="using jsx">
        <button >Touch me</button>
          </Hello>  
  <HelloSX></HelloSX> */}
    </div>
  );
};

export default App;
