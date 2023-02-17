
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Line from './components/Line/Line';
import Text from './components/Text/Text';
function App() {
  let a = "hello people"
  return (
    <div className="App">
      <Header/>
      <Line b={a}/>
      <Footer/>
      <Text/>
    </div>
  );
}

export default App;
