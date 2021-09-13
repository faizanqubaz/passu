import Navbar from './components/navbar/navbar';
import Slider from './components/slider/slider';
import Bar from './components/bar/bar';
import ShowCase from './components/showcase/showcase';
import Booking from './components/booking/booking';
import News from './components/news/news';
import MainLayout from './components/dashboard/layouts/main_layout';
import FoodLayout from './components/dashboard/layouts/food_layout';
import MessageLayout from './components/dashboard/layouts/message_layout';
import UserLayout from './components/dashboard/layouts/user_layout';
import ResturentLayout from './components/dashboard/layouts/resturnent_layout'
import Map from './components/maps/map';
import Footer from './components/footer/footer';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Staff from './components/staff/staff';
import Dashboard from './components/dashboard/dashboard'

function App() {
 
  return (
    <div className="App">
      <Switch>

        <Route exact path='/'>
          <Navbar home='Home'  />
          <Slider />
          <Bar />
          <ShowCase />
          <Booking />
          <News />
          <Map />
          <Staff />
          <Footer />

        </Route>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/main' component={MainLayout} />
        <Route path='/message' component={MessageLayout} />
        <Route path='/food' component={FoodLayout} />
        <Route path='/user' component={UserLayout} />
        <Route path='/resturnent' component={ResturentLayout} />

      </Switch>


    </div>
  );
}

export default App;
