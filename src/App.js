//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Showalert from "./MyComponents/WarningSignFile";
import MyBadge from "./MyComponents/MyBadgeFile";
import SingleBookEx3 from "./MyComponents/SingleBook";
import OneBook from "./romanceBooks.json";
import ListTheBooks from "./MyComponents/BookList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Showalert alertText="This is the first exercice" />
        <SingleBookEx3 OneBook={OneBook[1]} />
        <MyBadge col="success" textBadge="This is the exercise 2 !" />
      </header>
      <br />
      <br />
      <main>
        <ListTheBooks OneBook={OneBook} />
      </main>
    </div>
  );
}

export default App;
