import React from "react";
import Sidebar from "components/Sidebar";
import { Switch,Route,Redirect } from "react-router-dom";
import News from 'components/News';
import MessagesPage from 'components/MessagesPage';
import FriendsPage from 'components/FriendsPage';

const App = () => <main> 
  <Sidebar/>
  <Switch>
    <Route exact path="/">
      <Redirect to="/feed" />
    </Route>

    <Route path="/feed">
      <News isFavoriteNews={false}/>
    </Route>
  
    <Route path="/messages/:idInterlocutor" render={({ match }) =>
        <MessagesPage idUser={1} idInterlocutor={match.params.idInterlocutor}/>
      }>
    </Route>

    <Route path="/messages/">
      <MessagesPage idUser={1}/>
    </Route>

    <Route path="/friends">
      <FriendsPage idUser={1}/>
    </Route>

    <Route path="/favorite">
      <News isFavoriteNews={true}/>
    </Route>
  </Switch>
 </main>

export default App;
