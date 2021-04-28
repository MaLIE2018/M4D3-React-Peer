import WarnSign from './components/WarnSign'
import SingleBook from './components/SingleBook'

const OneBook = {
  "asin": "0345546792",
  "title": "The Silent Corner: A Novel of Suspense (Jane Hawk)",
  "img": "https://images-na.ssl-images-amazon.com/images/I/91dDIYze1wL.jpg",
  "price": 7.92,
  "category": "horror"
};


function App() {
  return (
    <WarnSign message="This is an error!"/>,
    <SingleBook book={OneBook}/>
  )
}

export default App;
