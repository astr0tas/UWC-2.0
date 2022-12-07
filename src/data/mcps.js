const padTo2Digits = (num) =>
{
      return num.toString().padStart(2, '0');
}

const formatDate = (date) =>
{
      return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
      ].join('/');
}

var mcpList = [
      {
            ma: "MCP01",
            diaChi: "Quận 10, TP.HCM",
            sucChuaToiDa: 30,
            sucChuaHienTai: 15,
            lanThuGomGanDay: formatDate(new Date(new Date() - 2 * 24 * 60 * 60 * 1000)),
            linkAnh: ""
      },
      {
            ma: "MCP02",
            diaChi: "Quận 10, TP.HCM",
            sucChuaToiDa: 20,
            sucChuaHienTai: 17,
            lanThuGomGanDay: formatDate(new Date(new Date() - 3 * 24 * 60 * 60 * 1000)),
            linkAnh: ""
      },
      {
            ma: "MCP03",
            diaChi: "Quận 10, TP.HCM",
            sucChuaToiDa: 40,
            sucChuaHienTai: 9,
            lanThuGomGanDay: formatDate(new Date(new Date() - 1 * 24 * 60 * 60 * 1000)),
            linkAnh: ""
      },
      {
            ma: "MCP04",
            diaChi: "Quận 10, TP.HCM",
            sucChuaToiDa: 18,
            sucChuaHienTai: 13,
            lanThuGomGanDay: formatDate(new Date(new Date() - 4 * 24 * 60 * 60 * 1000)),
            linkAnh: ""
      },
      {
            ma: "MCP05",
            diaChi: "Quận 10, TP.HCM",
            sucChuaToiDa: 24,
            sucChuaHienTai: 19,
            lanThuGomGanDay: formatDate(new Date(new Date() - 3 * 24 * 60 * 60 * 1000)),
            linkAnh: ""
      },
      {
            ma: "MCP06",
            diaChi: "Quận 10, TP.HCM",
            sucChuaToiDa: 20,
            sucChuaHienTai: 20,
            lanThuGomGanDay: formatDate(new Date(new Date() - 1 * 24 * 60 * 60 * 1000)),
            linkAnh: ""
      },
      {
            ma: "MCP07",
            diaChi: "Quận 10, TP.HCM",
            sucChuaToiDa: 15,
            sucChuaHienTai: 0,
            lanThuGomGanDay: formatDate(new Date(new Date() - 4 * 24 * 60 * 60 * 1000)),
            linkAnh: ""
      },
      {
            ma: "MCP08",
            diaChi: "Quận 10, TP.HCM",
            sucChuaToiDa: 30,
            sucChuaHienTai: 27,
            lanThuGomGanDay: formatDate(new Date(new Date() - 5 * 24 * 60 * 60 * 1000)),
            linkAnh: ""
      },
      {
            ma: "MCP09",
            diaChi: "Quận 10, TP.HCM",
            sucChuaToiDa: 17,
            sucChuaHienTai: 15,
            lanThuGomGanDay: formatDate(new Date(new Date() - 2 * 24 * 60 * 60 * 1000)),
            linkAnh: ""
      },
      {
            ma: "MCP10",
            diaChi: "Quận 10, TP.HCM",
            sucChuaToiDa: 15,
            sucChuaHienTai: 10,
            lanThuGomGanDay: formatDate(new Date(new Date() - 5 * 24 * 60 * 60 * 1000)),
            linkAnh: ""
      }
];

export default mcpList;