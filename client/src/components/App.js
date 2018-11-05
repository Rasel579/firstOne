import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


const Header = () => <div>Header</div>
const Dashboard = () => <div>Dashboard</div>
const SurveyNew = () => <div>SurveyNew</div>
const Landing = () => <div>Landing</div>

const App = () =>{
  return(
      <div>
          <BrowserRouter>
          <div>
              <Route path = '/' component = {Landing}/>
          </div>
          </BrowserRouter>
      </div>
  );
};

export default App;