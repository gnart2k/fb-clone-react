import './App.css';
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Feed from './components/feed/Feed'
import Notification from './components/notification/Notification'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App__body">
       <Sidebar/>
       <Feed/>
       <Notification/>
      </div>
    </div>
  );
}

export default App;
