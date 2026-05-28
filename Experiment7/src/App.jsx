import './App.css'
import Card from './Card.jsx';

function App() {
 
  return(
    <>
    <Card name="Prabhanshu" branch="Computer Science" marks={98} />
    <Card name="Gujjar" branch="Information Technology" marks={-200} />
    <Card name="Luffy" branch="Berojgar" marks={-900} />
    </>
  );
}
export default App