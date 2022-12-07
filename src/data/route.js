/**
 * ma: string
 * mcps: vector
 * streets: vector
 * vehile: string
 * worker: int
 */
//export const mcplist = ["MCP01", "MCP02", "MCP03", "MCP04", "MCP05", "MCP06", "MCP07", "MCP08", "MCP09", "MCP10"]
export const baseMCPPath = "/sideMenu/mcpList/"
export const baseVehiclePath = "/sideMenu/vehicleList/"
export const baseWorkerPath = "/sideMenu/workerList/"
var routeList = [
    {
        ma: "R01",
        cacmcp:  ["MCP01", "MCP10"],
        tenduong: 'Hùng Vương, Lê Hồng Phong, Lý Thái Tổ',
        xe: 'V10',
        congnhan: ["C01", "C06"]
    },
    {
        ma: "R02",
        cacmcp: ["MCP02", "MCP09"],
        tenduong: 'Nguyễn Chí Thanh, Sư Vạn Hạnh, Trần Nhân Tôn',
        xe: 'V09',
        congnhan: ['C03']
    },
    {
        ma: "R03",
        cacmcp: ["MCP03", "MCP08"],
        tenduong: 'Lý Thái Tổ, Ngô Gia Tự, Nguyễn Tri Phương',
        xe: 'V08',
        congnhan: ['C04', 'C05']
    },
    {
        ma: "R04",
        cacmcp: ["MCP04", "MCP07"],
        tenduong: 'Ngô Quyền, 3 Tháng 2, Nguyễn Tiểu La',
        xe: 'V07',
        congnhan: ''
    },
    {
        ma: "R05",
        cacmcp: ["MCP05", "MCP06"],
        tenduong: 'Lý Thường Kiệt, Nguyễn Kim',
        xe: 'V06',
        congnhan: ['C07']
    },
    {
        ma: "R06",
        cacmcp: ["MCP01", "MCP05"],
        tenduong: 'Lê Hồng Phong, Điện Biên Phủ, Nguyễn Thượng Hiền',
        xe: 'V05',
        congnhan: ['C08', 'C10']
    },
    {
        ma: "R07",
        cacmcp: ["MCP07", "MCP08"],
        tenduong: 'Cách Mạng Tháng 8, Trần Thiện Chánh',
        xe: 'V04',
        congnhan: ['C02']
    },
    {
        ma: "R08",
        cacmcp: ["MCP04", "MCP10"],
        tenduong: 'Tô Hiến Thành, Cách Mạng Tháng 8',
        xe: 'V03',
        congnhan: ['C09']
    },
    {
        ma: "R09",
        cacmcp: ["MCP02", "MCP06"],
        tenduong: 'Trường Sơn, Nguyễn Giàn Thanh, Đồng Nai',
        xe: 'V02',
        congnhan: ''
    },
    {
        ma: "R10",
        cacmcp: ["MCP03", "MCP09"],
        tenduong: 'Lý Thường Kiệt, Tô Hiến Thành, Thành Thái',
        xe: 'V01',
        congnhan: ''
    },
];

export default routeList;
