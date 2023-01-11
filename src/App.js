import './App.css';
import { LandingPage } from './components/landingPage';
import { GreetingList } from "./components/greetingList";

//initial example messages that will be displayed by default
const DATA = [
  {id: "21.12.1997, 13:41:56", greeting: "It's very cozy, but aren't we a bit early to use React?", keyID: "1"},
  {id: "31.12.1999, 23:59:59", greeting: "OMG the new millennium is coming!", keyID: "2"},
  {id: "31.02.2001, 24:00:00", greeting: "WTF is happening, is this even real...?", keyID: "3"}
]

function App() {
  return (
    <div className="App">
      <LandingPage />
      <GreetingList tasks={DATA}/>
    </div>
  );
}

export default App;