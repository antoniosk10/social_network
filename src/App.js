import React from "react";
import Sidebar from "components/Sidebar";
import { Switch,Route } from "react-router-dom";
import News from 'components/News';

function App() {
 return <main> 
  <Sidebar/>
  <Switch>
    <Route path="/feed">
      <News/>
    </Route>
    <Route path="/messages">

    </Route>
    <Route path="/friends">

    </Route>
    <Route path="/favorite">

    </Route>
  </Switch>
 </main>
}

export default App;
