import Main from "./pages/Main";
import Home from './pages/Home'
import Auth from "./pages/Auth";
import {useAuth} from './hooks/useAuth'
import { useSelector } from "react-redux";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import profile from "./redux/actions/profile";

function App() {
  const {loginAuth} = useAuth()
  const profile = useSelector(({profile})=> profile)
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        {profile.JWT ?
          <Switch>
            <Route path="/home"  component={Home}/>
          </Switch> :
          <Switch>
            <Route path="/auth"  component={Auth}/>
          </Switch>
        }
        <Route path="*" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
