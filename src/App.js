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
import { CollectorList } from './pages/collectorList.jsx';
import { JanitorList } from './pages/janitorList.jsx';
import { WorkerInfo } from './pages/workerInfo.jsx';
import { WorkerSchedule } from './pages/workerSchedule.jsx';

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
                                    <Route path="workerList/collectorList" element={ <CollectorList /> } />
                                    <Route path="workerList/janitorList" element={ <JanitorList /> } />
                                    <Route path="workerList/:workerID" element={ <WorkerInfo /> } />
                                    <Route path="workerList/:workerID/schedule" element={ <WorkerSchedule /> } />
                              </Route>
                        </Routes>
                  </BrowserRouter>
            </div>
      );
}

export default App;
