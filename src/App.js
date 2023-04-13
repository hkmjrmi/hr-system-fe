import { Space } from "antd";
import './App.css';
import AppFooter from './Components/AppFooter/AppFooter';
import AppHeader from './Components/AppHeader/AppHeader';
import SideMenu from './Components/SideMenu/SideMenu';
import PageContent from "./Components/PageContent/PageContent";

function App() {
  return (
    <div className="App">
     <AppHeader/>
     <Space className="SideMenuAndPageContent">
     <SideMenu></SideMenu>
     <PageContent></PageContent>
     </Space>
     <AppFooter/>
    </div>
  );
}

export default App;
