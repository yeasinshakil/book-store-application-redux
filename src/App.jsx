import Navigation from "./components/Navigation";
import BookContainer from "./components/BookContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className=" min-w-full">
        <Navigation />
        <BookContainer />
      </div>
    </Provider>
  );
}

export default App;
