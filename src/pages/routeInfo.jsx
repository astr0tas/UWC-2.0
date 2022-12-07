import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import '../css/routeInfo.css';
import routeList, { baseMCPPath, baseVehiclePath, baseWorkerPath } from '../data/route.js';


export const RouteInfo = () =>
{
      const currentRoute = useParams();
      const RouteId = currentRoute.Rxx;

      const effectRan = useRef(false);

      useEffect(() =>
      {
            if (effectRan.current === false)
            {
                  let setColor = document.getElementsByClassName('RouteManage');
                  setColor[0].style.color = "blue";

                  for (let key in routeList)
                  {
                        if (routeList[key].ma === RouteId)
                        {
                              if (routeList[key].congnhan.length !== 0)
                              {
                                    let i = 0;
                                    for (i; i < routeList[key].congnhan.length - 1; i++)
                                          document.getElementById('printWorkerList').innerHTML += "<a href=\"" + baseWorkerPath + routeList[key].congnhan[i] + "\">" + routeList[key].congnhan[i] + "</a>"
                                                + "<h2 class=\"Props\">,   </h2>";
                                    document.getElementById('printWorkerList').innerHTML += "<a href=\"" + baseWorkerPath + routeList[key].congnhan[i] + "\">" + routeList[key].congnhan[i] + "</a>";
                              }
                              break;
                        }
                  }

                  effectRan.current = true;
            }
      });

      //mcps, streets, vehicle, worker
      let mcps, streets, vehicle, worker;

      for (let key in routeList)
      {

            if (routeList[key].ma === RouteId)
            {
                  mcps = routeList[key].cacmcp;
                  streets = routeList[key].tenduong;
                  vehicle = routeList[key].xe;
                  //worker = routeList[key].congnhan;
                  break;
            }

      }

      const Navigate = useNavigate();

      const handleClick = (event) =>
      {
            event.preventDefault();
            Navigate(-1);
      }

      return (
            <div className="RouteID">
                  <h1>Thông tin chi tiết tuyến đường</h1>
                  <br />
                  <table className="Properties">
                        <thead><h2>Mã tuyến: </h2> <h2 class="Props">{ RouteId }</h2></thead>
                        <br />
                        {/* <thead><h2>Các MCPs: </h2> <h2 class="Props">{ mcps }</h2> <button> Chi tiết </button></thead>
                        <br /> */}
                        <thead>
                              <h2>Các MCPs: </h2>
                              <a href={ baseMCPPath + mcps[0] }>{ mcps[0] }</a>
                              <h2 class="Props">,  </h2>
                              <a href={ baseMCPPath + mcps[1] }>{ mcps[1] }</a>
                        </thead>
                        <br />
                        <thead><h2>Tên đường: </h2> <h2 class="Props">{ streets }</h2></thead>
                        <br />
                        <thead><h2>Xe: </h2> <a href={ baseVehiclePath + vehicle }>{ vehicle }</a></thead>
                        <br />
                        <thead>
                              <h2>Công nhân đảm nhận: </h2>
                              <div id="printWorkerList" />
                              {/* <a href={baseWorkerPath+worker[0]}>{worker[0]}</a>
                              <h2 class="Props">,  </h2>
                              <a href={baseWorkerPath+worker[1]}>{worker[1]}</a> */}
                        </thead>
                        <br />
                        <tbody id="RouteID"></tbody>
                  </table>
                  <br />
                  <br />
                  <button onClick={ handleClick }>Quay lại</button>
            </div >
      );
}