import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Collector, Janitor } from '../data/staff.js';
import '../css/schedule.css';

export const StaffSchedule = () =>
{
      const currentRoute = useParams();
      const staffID = currentRoute.staffID;

      let name, job;
      if (staffID[0] === 'J')
      {
            for (let key in Janitor)
            {
                  if (Janitor[key].ID === staffID)
                  {
                        name = Janitor[key].ten;
                        job = "công nhân thu gom rác"
                        break;
                  }
            }
      }
      else
      {
            for (let key in Collector)
            {
                  if (Collector[key].ID === staffID)
                  {
                        name = Collector[key].ten;
                        job = "công nhân chở rác"
                        break;
                  }
            }
      }

      const effectRan = useRef(false);
      useEffect(() =>
      {
            if (effectRan.current === false)
            {
                  let setColor = document.getElementsByClassName('StaffManage');
                  setColor[0].style.color = "blue";

                  let schedule;

                  if (staffID[0] === 'J')
                  {
                        for (let key in Janitor)
                        {
                              if (Janitor[key].ID === staffID)
                              {
                                    schedule = Janitor[key].lichlamviec;
                                    break;
                              }
                        }
                  }
                  else
                  {
                        for (let key in Collector)
                        {
                              if (Collector[key].ID === staffID)
                              {
                                    schedule = Collector[key].lichlamviec;
                                    break;
                              }
                        }
                  }

                  for (let key in schedule)
                  {
                        document.getElementById('scheduleList').innerHTML += "<tr>"
                              + "<td>" + schedule[key].Ngay + "</td>"
                              + "<td>" + schedule[key].Thoigian + "</td>"
                              + "<td>" + schedule[key].Mota + "</td>"
                              + "<td>" + schedule[key].Trangthai + "</td>"
                              + "</tr>";
                  }

                  effectRan.current = true;
            }
      });

      const Navigate = useNavigate();

      const returnToPrevious = (event) =>
      {
            event.preventDefault();
            Navigate(-1);
      }

      return (
            <div class="schedule">
                  <h1>Lịch làm việc của công nhân { job } { name }</h1>
                  <br />
                  <table>
                        <tr>
                              <th><h3>Ngày</h3></th>
                              <th><h3>Thời gian</h3></th>
                              <th><h3>Mô tả</h3></th>
                              <th><h3>Trạng thái</h3></th>
                        </tr>
                        <tbody id="scheduleList" />
                  </table>
                  <br />
                  <br />
                  <button onClick={ returnToPrevious }>Quay lại</button>
            </div>
      );
}