
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Contact/>
      <Map location={{ lat: 37.7749, lng: -122.4194 }} zoomLevel={10} />
      <Footer />
    </div>
  );
}

export default App;
