import "../styles/globals.css";
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default wrapper.withRedux(MyApp);
{/* <Provider store={store}> */ }
{/* </Provider> */ }
