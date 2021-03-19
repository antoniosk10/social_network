import React, {Fragment} from "react";
import Sidebar from "components/Sidebar";
import { Switch,Route,Redirect } from "react-router-dom";
import News from 'components/News';
import MessagesPage from 'components/MessagesPage';
import FriendsPage from 'components/FriendsPage';
import Widget from 'components/Widget';

const App = () =><Fragment> 
  <main> 
    <Sidebar/>
    <Switch>
      <Route exact path="/">
        <Redirect to="/feed" />
      </Route>

      <Route path="/feed">
        <News isFavoriteNews={false} idUser={1}/>
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
        <News isFavoriteNews={true} idUser={1}/>
      </Route>
    </Switch>
  </main>
  <Widget/>
</Fragment>
export default App;
