import React from 'react';
import SideBar from './Components/SideBar/SideBar';
import Header from './Components/Header/Header';
import "./App.css"
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import Login from './Components/Login/Login'
import Signup from './Components/Login/Signup'
import Module from './Components/Navigation/Module/Module'
import Analysis from './Components/Navigation/Analysis/Analysis'
import Assesments from './Components/Navigation/Assesments/Assesments'
import CaMarks from './Components/Navigation/CaMarks/CaMarks'
import LoList from './Components/Navigation/LoList/LoList'
import Normalize from './Components/Navigation/Normalize/Normalize'
import PoList from './Components/Navigation/PoList/PoList'
import DefineLo from './Components/Define/DefineLo/DefineLo'
import DefinePo from './Components/Define/DefinePo/DefinePo'




function App() {



  return (
    <BrowserRouter>
      <div className="App">

        <div className="app_login">
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
        </Switch>
        </div>
    
        <div className="app__home">
          <Header/>
          <SideBar />
        </div>
       
         <div className="app__component">
         <Switch>
            {/* <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} /> */}
            <Route path="/module" component={Module} />
            <Route path="/analysis" component={Analysis} />
            <Route path="/assesments" component={Assesments} />
            <Route path="/camarks" component={CaMarks} />
            <Route path="/loslist" exact component={LoList} />
            <Route path="/poslist" exact  component={PoList} />
            <Route path="/normalize" component={Normalize} />
            <Route path="/loslist/definelo" component={DefineLo} />
            <Route path="/poslist/definepo" component={DefinePo} />

         
       </Switch>

         </div>
         
      

       
    </div>
    </BrowserRouter> 
        
        
  );
}


export default App;

