
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListMemberComponent from './components/ListMemberComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
    <div className="container">
      <ListMemberComponent />
    </div>
    <FooterComponent/>
    </div>
  );
}

export default App;
