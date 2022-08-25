import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";

import Footer from "./components/navigation/Footer";
import LoginContainer from "./components/auth/LoginContainer";
import DefaultContainer from "./components/auth/DefaultContainer";
import { StandardUser } from "./components/helpers/userRoles";
import UserProvider from "./components/UserProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <StandardUser>
            <NavBar />
          </StandardUser>

          <Route path="/" component={LoginContainer} />

          <StandardUser withRedirect>
            <Route path="/" component={DefaultContainer} />
          </StandardUser>

          <Footer />
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
