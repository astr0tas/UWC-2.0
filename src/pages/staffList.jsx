import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/staffList.css';
import { Janitor } from '../data/staff.js';
import { Collector } from '../data/staff.js';

export const StaffList = () =>
{
      const effectRan = useRef(false);

      useEffect(() =>
      {
            if (effectRan.current === false)
            {
                  let setColor = document.getElementsByClassName('StaffManage');
                  setColor[0].style.color = "blue";
                  // for (let key in Janitor)
                  // {
                  //       document.getElementById("staffList").innerHTML += "<tr>"
                  //             + "<td>" + Janitor[key].ten + "</td>"
                  //             + "<td>" + Janitor[key].ID + "</td>"
                  //             + "<td>"
                  //             + "<button class = 'Staffs' id =" + Janitor[key].ID + "> Chi tiết </button>"
                  //             + "<button class = 'Area' id =Area_" + Janitor[key].ID + "> Phân công khu vực</button>"
                  //             + "<button class='StaffDel'>Xóa</button>"
                  //             + "</td>"
                  //             + "<tr/>";
                  // }

                  // let obj = document.getElementById('renderJanitors');
                  // obj.style.background = "bisque";
                  // obj = document.getElementById('renderCollectors');
                  // obj.style.background = "antiquewhite";

                  // obj = document.getElementsByClassName('StaffDel');
                  // for (let i = 0; i < obj.length; i++)
                  //       obj[i].addEventListener('click', handleClickNotDev);
                  // obj = document.getElementsByClassName('Staffs');
                  // for (let i = 0; i < obj.length; i++)
                  //       obj[i].addEventListener('click', handleClickInfo);
                  // obj = document.getElementsByClassName('Area');
                  // for (let i = 0; i < obj.length; i++)
                  //       obj[i].addEventListener('click', taskingArea);
                  renderJanitors();

                  effectRan.current = true;
            }
      });

      const renderJanitors = () =>
      {
            // event.preventDefault();
            document.getElementById("staffList").innerHTML = "";
            for (let key in Janitor)
            {
                  document.getElementById("staffList").innerHTML += "<tr>"
                        + "<td>" + Janitor[key].ten + "</td>"
                        + "<td>" + Janitor[key].ID + "</td>"
                        + "<td>"
                        + "<button class = 'Staffs' id =" + Janitor[key].ID + "> Chi tiết </button>"
                        + "<button class = 'Area' id =Area_" + Janitor[key].ID + "> Phân công khu vực</button>"
                        + "<button class='StaffDel'>Xóa</button>"
                        + "</td>"
                        + "<tr/>";
            }

            let obj = document.getElementById('renderJanitors');
            obj.style.background = "bisque";
            obj = document.getElementById('renderCollectors');
            obj.style.background = "antiquewhite";

            obj = document.getElementsByClassName('StaffDel');
            for (let i = 0; i < obj.length; i++)
                  obj[i].addEventListener('click', handleClickNotDev);
            obj = document.getElementsByClassName('Staffs');
            for (let i = 0; i < obj.length; i++)
                  obj[i].addEventListener('click', handleClickInfo);
            obj = document.getElementsByClassName('Area');
            for (let i = 0; i < obj.length; i++)
                  obj[i].addEventListener('click', taskingArea);
      }

      const renderCollectors = (event) =>
      {
            event.preventDefault();
            document.getElementById("staffList").innerHTML = "";
            for (let key in Collector)
            {
                  document.getElementById("staffList").innerHTML += "<tr>"
                        + "<td>" + Collector[key].ten + "</td>"
                        + "<td>" + Collector[key].ID + "</td>"
                        + "<td>"
                        + "<button class = 'Staffs' id =" + Collector[key].ID + "> Chi tiết </button>"
                        + "<button class = 'Route' id =Route_" + Collector[key].ID + "> Tạo tuyến đường</button>"
                        + "<button class='StaffDel'>Xóa</button>"
                        + "</td>"
                        + "<tr/>";
            }

            let obj = document.getElementById('renderCollectors');
            obj.style.background = "bisque";
            obj = document.getElementById('renderJanitors');
            obj.style.background = "antiquewhite";

            obj = document.getElementsByClassName('StaffDel');
            for (let i = 0; i < obj.length; i++)
                  obj[i].addEventListener('click', handleClickNotDev);
            obj = document.getElementsByClassName('Staffs');
            for (let i = 0; i < obj.length; i++)
                  obj[i].addEventListener('click', handleClickInfo);
            obj = document.getElementsByClassName('Route');
            for (let i = 0; i < obj.length; i++)
                  obj[i].addEventListener('click', taskingRoute);
      }

      const Navigate = useNavigate();

      const handleClickNotDev = (event) =>
      {
            event.preventDefault();
            Navigate("/sideMenu/inDev");
      }

      const handleClickInfo = (event) =>
      {
            event.preventDefault();
            Navigate("./" + event.currentTarget.id);
      }

      const taskingArea = (event) =>
      {
            event.preventDefault();

      }

      const taskingRoute = (event) =>
      {
            event.preventDefault();
      }

      return (
            <div class="myStaffList">
                  <h1>Danh sách nhân viên</h1>
                  <div class="rendering">
                        <button onClick={ renderJanitors } id="renderJanitors">Danh sách nhân viên gom rác (Janitors)</button>
                        <button onClick={ renderCollectors } id="renderCollectors">Danh sách nhân viên chở rác (Collectors)</button>
                  </div>
                  <table>
                        <thead>
                              <tr>
                                    <th><h3>TÊN NHÂN VIÊN</h3></th>
                                    <th><h3>MÃ NHÂN VIÊN</h3></th>
                                    <th><h3>TÁC VỤ</h3></th>
                              </tr>
                        </thead>
                        <tbody id="staffList">
                        </tbody>
                  </table>
                  <br />
                  <br />
                  <view>
                        <button onClick={ handleClickNotDev }>Thêm nhân viên</button>
                  </view>
            </div>
      );
}