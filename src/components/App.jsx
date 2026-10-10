 
import { BrowserRouter, Routes ,Route} from "react-router"
import Body from "./Body.jsx"
import Login from "./login.jsx"
import Profile from "./profile.jsx"
import { Provider } from "react-redux"
import appStore from "../utils/appStore.js"
import Feed from "./Feed.jsx"
import Connection from "./connection.jsx"
function App() {
   

  return (
    <>
    <Provider store={appStore}>

    
     <BrowserRouter basename="/">
     <Routes>
      <Route path="/" element={<Body/>}> 
      {/* this upper is the parent route  and lower one is childreen route
      another thing is to working of childreen route depend on the parent node with outlet 
      */}
        <Route path="/" element={<Feed/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/connection" element={<Connection/>}></Route>
      </Route>
     </Routes>
     </BrowserRouter>
     </Provider>
    </>
  )
}

export default App
