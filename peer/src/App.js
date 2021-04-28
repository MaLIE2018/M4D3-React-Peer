//import logo from './logo.svg';
import WarnSign from "./components/WarnSign";
import Badge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import ShowBooks from "./components/BookList";

function App() {
  return (
    <>
      <WarnSign message="This is an error!" />
      <Badge color="primary" text="Whatever" />
      <br />
      <SingleBook
        title="The Sign Upon His Head"
        img="https://images-na.ssl-images-amazon.com/images/I/51sJ-l9UV3L.jpg"
      />
      <ShowBooks getMonth="April" />
    </>
  );
}

export default App;
