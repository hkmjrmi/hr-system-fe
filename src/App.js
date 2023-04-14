import { Space } from "antd";
import './App.css';
import AppFooter from './Components/AppFooter';
import AppHeader from './Components/AppHeader';
import SideMenu from './Components/SideMenu';
import PageContent from "./Components/PageContent";
import Login from "./Pages/Login";

import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = (isAuth) => {
    setIsAuthenticated(isAuth);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <AppHeader />
          <Space className="SideMenuAndPageContent">
            <SideMenu logout={() => setIsAuthenticated(false)} />
            <PageContent></PageContent>
          </Space>
          <AppFooter />
        </>
      ) : (
        <Login doAuth={handleAuth} />
      )}
    </div>
  );
}

export default App;