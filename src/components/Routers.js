import {Route,Switch} from "react-router-dom";
import Homepage from './Homepage.js';
import About from './About.js';
import Links from './Links.js'
import Competitive from './Competitive.js'
import Project from './Project.js'
import Contact from './Contact.js'
import Streamroom from "./Streamroom.js";
import Github from "./Github.js";
import Blog from "./Blog.js";
import Keeper from "./Keeper.js";

 function Routers(){
     return(
         <Switch>
              <Route exact path='/' component={Homepage}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/link' component={Links}></Route>
              <Route exact path='/comp' component={Competitive}></Route>
              <Route exact path='/proj' component={Project}></Route>
              <Route exact path='/cont' component={Contact}></Route>
              <Route exact path='/streamroom' component={Streamroom}></Route>
              <Route exact path='/github' component={Github}></Route>
              <Route exact path='/blog' component={Blog}></Route>
              <Route exact path='/keeper' component={Keeper}></Route>
         </Switch>
     );
 }
 export default Routers;