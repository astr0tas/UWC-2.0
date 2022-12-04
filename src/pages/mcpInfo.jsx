import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import '../css/mcpInfo.css';
import mcpList from '../data/mcps.js';


export const MCPInfo = () =>
{

      const effectRan = useRef(false);

      useEffect(() =>
      {
            if (effectRan.current === false)
            {
                  let setColor = document.getElementsByClassName('MCPManage');
                  setColor[0].style.color = "blue";
                  effectRan.current = true;
            }
      });

      const currentRoute = useParams();
      const MCPId = currentRoute.MCPxx;
      let address, maximumCap, currentCap, latest, picture;

      for (let key in mcpList)
      {
            if (mcpList[key].ma === MCPId)
            {
                  address = mcpList[key].diaChi;
                  maximumCap = mcpList[key].sucChuaToiDa;
                  currentCap = mcpList[key].sucChuaHienTai;
                  latest = mcpList[key].lanThuGomGanDay;
                  picture = mcpList[key].linkAnh;
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
            <div className="MCPID">
                  <h1>Thông tin chi tiết MCP</h1>
                  <br />
                  <figure>
                        <img src='https://i0.wp.com/www.oakpark.com/wp-content/uploads/2022/06/Recycling_278963590.jpeg?fit=1200%2C800&ssl=1' alt="Ảnh MCP" />
                  </figure>
                  <table className="Properties">
                        <thead><h2>MCP ID: </h2> <h2 class="Props">{ MCPId }</h2></thead>
                        <br />
                        <thead><h2>Địa chỉ: </h2> <h2 class="Props">{ address }</h2></thead>
                        <br />
                        <thead><h2>Sức chứa tối đa: </h2> <h2 class="Props">{ maximumCap } tấn</h2></thead>
                        <br />
                        <thead><h2>Sức chứa hiện tại: </h2> <h2 class="Props">{ currentCap } tấn</h2></thead>
                        <br />
                        <thead><h2>Ngày thu gom gần đây nhất: </h2> <h2 class="Props">{ latest }</h2></thead>
                        <br />
                  </table>
                  <br />
                  <br />
                  <button onClick={ handleClick }>Quay lại</button>
            </div >
      );
}