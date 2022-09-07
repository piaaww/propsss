
import './App.css';
import FullName from './Profile/FullName';
import Bio from './Profile/Bio';
import Profession from './Profile/Profession';
function App() {
  return (
    <div className="App">
        <FullName firstName="nadhir" lastName="souei">
      </FullName>
      <Bio Age="21" Gender="Male" Interests="full stack developper" > </Bio>
      <Profession Skill="HTML CSS AND REACT ,REDUX THINGS"></Profession>

    </div>
  );
}
export default App;
