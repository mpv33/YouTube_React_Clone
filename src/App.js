
import {Container} from 'react-bootstrap';
import './_app.scss';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import Vedio from './components/vedio/Vedio';
import HomeScreen from './screens/homescreen/HomeScreen';

function App() {
  return (
    <>
       <Header />
       <div className='app_container'>
           <SideBar />
           <Container fluid className='app_main'>
                   <HomeScreen />
           </Container>

       </div>

    </>
  );
}

export default App;
