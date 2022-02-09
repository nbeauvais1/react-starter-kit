// **** Components must start from a single node (element)
// <></> -> React fragment, an empty html tag that can be used as your single node

import Button from './components/button/Button'

function App() {
  return (
    <header>
      <h1>React Starter Kit</h1>
      <Button title="default" type="default"/>
      <Button title="warning" type="smallWarning"/>
      <Button title="danger" type="danger"/>
      <Button title="hiphop"type="hiphop"/>
    </header>
  );
}

export default App;
