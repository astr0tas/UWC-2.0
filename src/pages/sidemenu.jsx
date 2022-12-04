import { useNavigate, Outlet } from 'react-router-dom';
import '../css/sidemenu.css'

export const MyMenu = () =>
{
    const Navigate = useNavigate();

    const handleClickLogin = (event) =>
    {
        event.preventDefault();
        Navigate("/");
    }

    return (
        <div>
            <div className='menu'>
                <h1>Quản trị</h1>
                <a href='' class="StaffManage">Quản lý nhân viên</a>
                <a href='' class="VehicleManage">Quản lý xe</a>
                <a href='' class="RouteManage">Quản lý tuyến đường</a>
                <a href='' class="AreaManage">Quản lý khu vực</a>
                <a href='/sideMenu/mcpList' class="MCPManage">Quản lý MCP</a>
                <a href='/sideMenu/message' class="Message">Tin nhắn</a>
                <button onClick={ handleClickLogin }>Đăng xuất</button>
            </div>
            <Outlet />
        </div>
    )
}