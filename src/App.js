import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Login } from './pages/login.jsx';
import { MCPInfo } from './pages/mcpInfo.jsx';
import { MCPList } from './pages/mcpList.jsx';
import { Sorry } from './pages/inDevelopment.jsx';
import { MyMenu } from './pages/sidemenu.jsx';
import { Message } from './pages/message.jsx';
import { VehicleList } from './pages/vehicleList.jsx';
import { VehicleInfo } from './pages/vehicleInfo.jsx';

function App()
{
      return (
            <div className="App">
                  <BrowserRouter>
                        <Routes>
                              <Route index element={ <Login /> } />
                              <Route path="sideMenu" element={ <MyMenu /> }>
                                    <Route path="mcpList" element={ <MCPList /> } />
                                    <Route path="mcpList/:MCPxx" element={ <MCPInfo /> } />
                                    <Route path="message" element={ <Message /> } />
                                    <Route path="inDev" element={ <Sorry /> } />
                                    <Route path="vehicleList" element={ <VehicleList /> } />
                                    <Route path="vehicleList/:vehiclexx" element={ <VehicleInfo /> } />
                              </Route>
                        </Routes>
                  </BrowserRouter>
            </div>
      );
}

export default App;
