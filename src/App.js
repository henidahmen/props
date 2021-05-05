
import './App.css';
import Profile from './profile/Profile';
import logo from './profile/cat.jpg'

function App() {
  const FullName ='henidahmen'
  const Bio = '24 years old from sfax '
  const Profession = 'web developper'
  const Show =  ( name ) => {
    alert(name)
  }
  return (
    <div className="App">
      <Profile name={FullName} bio={Bio} pro={Profession} Show={Show} >
      <img className="pic" src={logo} alt=''/>
      </Profile>  
    </div>
  );
}

export default App;
