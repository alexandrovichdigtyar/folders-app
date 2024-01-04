import { Provider } from "react-redux";
import Navigator from "./src/components/Navigator/Navigator";
import { store } from "./src/redux/store";
import WithAuth from "./src/components/WithAuth/WithAuth";

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default WithAuth(App);