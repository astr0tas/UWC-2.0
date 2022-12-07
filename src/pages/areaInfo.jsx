import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import '../css/areaInfo.css';
import areaList, { baseMCPPath, baseWorkerPath } from '../data/area.js';


export const AreaInfo = () =>
{

      const effectRan = useRef(false);

      useEffect(() =>
      {
            if (effectRan.current === false)
            {
                  let setColor = document.getElementsByClassName('AreaManage');
                  setColor[0].style.color = "blue";
                  effectRan.current = true;
            }
      });

      const currentRoute = useParams();
      const AreaId = currentRoute.Axx;
      //mcps, streets, worker
      let mcps, streets, worker;

      for (let key in areaList)
      {
            if (areaList[key].ma === AreaId)
            {
                  mcps = areaList[key].cacmcp;
                  streets = areaList[key].tenduong;
                  worker = areaList[key].congnhan;
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
            <div className="AreaID">
                  <h1>Thông tin chi tiết khu vực</h1>
                  <br />
                  <table className="Properties">
                        <thead><h2>Mã khu vực: </h2> <h2 class="Props">{ AreaId }</h2></thead>
                        <br />
                        <thead>
                              <h2>Các MCPs: </h2>
                              <a href={ baseMCPPath + mcps[0] }>{ mcps[0] }</a>
                              <h2 class="Props">, </h2>
                              <a href={ baseMCPPath + mcps[1] }>{ mcps[1] }</a>
                        </thead>
                        <br />
                        <thead><h2>Tên đường: </h2> <h2 class="Props">{ streets }</h2></thead>
                        <br />
                        <thead>
                              <h2>Công nhân đảm nhận: </h2>
                              <a href={ baseWorkerPath + worker[0] }>{ worker[0] }</a>
                              <h2 class="Props">,  </h2>
                              <a href={ baseWorkerPath + worker[1] }>{ worker[1] }</a>
                        </thead>
                        <br />
                  </table>
                  <br />
                  <br />
                  <button onClick={ handleClick }>Quay lại</button>
            </div >
      );
}