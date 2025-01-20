import { Provider } from "react-redux"
import Layout from "./components/layout/Layout"
import { store } from "./redux/store"

function App() {


  return (
    <>
    <Provider store={store}>
      <Layout />
    </Provider>
    </>
  )
}

export default App
