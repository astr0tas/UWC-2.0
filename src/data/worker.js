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

class Schedule
{
      constructor(Ngay, Thoigian, Mota, Trangthai)
      {
            this.Ngay = Ngay;
            this.Thoigian = Thoigian;
            this.Mota = Mota;
            this.Trangthai = Trangthai;
      }
}

var Janitor = [
      {
            ten: "Nguyễn Anh T",
            ID: "J01",
            CCCD: "023856000265",
            ngaysinh: "05/03/1990",
            diachi: "TP.HCM",
            sdt: "0365977562",
            email: "anht53@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 2 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom khu vực A01", "Đã hoàn thành"),
                  new Schedule(formatDate(new Date(new Date() + 2 * 24 * 60 * 60 * 1000)), "14h00-18h30", "Thu gom khu vực A08", "Chưa đến thời gian làm việc")
            ),
      },
      {
            ten: "Trần H",
            ID: "J02",
            CCCD: "036597000269",
            ngaysinh: "12/06/1989",
            diachi: "TP.HCM",
            sdt: "0322585123",
            email: "h12@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 1 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom khu vực A02", "Đã hoàn thành")),
      },
      {
            ten: "Lê Anh K",
            ID: "J03",
            CCCD: "065125000247",
            ngaysinh: "28/10/1994",
            diachi: "TP.HCM",
            sdt: "0254666732",
            email: "anhk28@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 2 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom khu vực A05", "Đã hoàn thành")),
      },
      {
            ten: "Lê Trung K",
            ID: "J04",
            CCCD: "023857000982",
            ngaysinh: "27/07/1993",
            diachi: "TP.HCM",
            sdt: "0897222876",
            email: "trungk@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 3 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom khu vực A02", "Đã hoàn thành")),
      },
      {
            ten: "Nguyễn Xuân A",
            ID: "J05",
            CCCD: "053432000232",
            ngaysinh: "18/01/1989",
            diachi: "TP.HCM",
            sdt: "0784002777",
            email: "anguyen@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 1 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom khu vực A04", "Đã hoàn thành")),
      },
      {
            ten: "Trần B",
            ID: "J06",
            CCCD: "078456000821",
            ngaysinh: "19/09/1996",
            diachi: "TP.HCM",
            sdt: "0789232177",
            email: "btran@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 1 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom khu vực A06", "Đã hoàn thành")),
      },
      {
            ten: "Dương Anh L",
            ID: "J07",
            CCCD: "098255000347",
            ngaysinh: "25/11/1993",
            diachi: "TP.HCM",
            sdt: "0122892732",
            email: "anhl93@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 2 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom khu vực A03", "Đã hoàn thành")),
      },
      {
            ten: "Đinh Xuân P",
            ID: "J08",
            CCCD: "098299000271",
            ngaysinh: "12/05/1991",
            diachi: "TP.HCM",
            sdt: "0902804277",
            email: "xuanp@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 1 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom khu vực A08", "Đã hoàn thành")),
      },
      {
            ten: "Nguyễn N",
            ID: "J09",
            CCCD: "090288000281",
            ngaysinh: "22/06/1996",
            diachi: "TP.HCM",
            sdt: "0908137822",
            email: "nguyenn22@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 2 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom khu vực A09", "Đã hoàn thành")),
      },
      {
            ten: "Võ Gia K",
            ID: "J10",
            CCCD: "097369000189",
            ngaysinh: "17/07/1989",
            diachi: "TP.HCM",
            sdt: "0909767255",
            email: "kvo17@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 3 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom khu vực A01", "Đã hoàn thành")),
      },
];

export { Janitor };

var Collector = [
      {
            ten: "Nguyễn Anh D",
            ID: "C01",
            CCCD: "058365000269",
            ngaysinh: "15/03/1992",
            diachi: "TP.HCM",
            sdt: "0957652236",
            email: "anhd15@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 2 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom tuyến đường R01", "Đã hoàn thành")),
      },
      {
            ten: "Trần Văn H",
            ID: "C02",
            CCCD: "067123000972",
            ngaysinh: "19/05/1987",
            diachi: "TP.HCM",
            sdt: "0962819002",
            email: "htran@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 3 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom tuyến đường R07", "Đã hoàn thành")),
      },
      {
            ten: "Đỗ Đức T",
            ID: "C03",
            CCCD: "097829000128",
            ngaysinh: "09/12/1996",
            diachi: "TP.HCM",
            sdt: "0907182666",
            email: "tdo09@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 1 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom tuyến đường R02", "Đã hoàn thành")),
      },
      {
            ten: "Nguyễn Cao C",
            ID: "C04",
            CCCD: "078129000777",
            ngaysinh: "15/11/1994",
            diachi: "TP.HCM",
            sdt: "0906123765",
            email: "caoc@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 1 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom tuyến đường R03", "Đã hoàn thành")),
      },
      {
            ten: "Đỗ Trọng A",
            ID: "C05",
            CCCD: "019272000891",
            ngaysinh: "22/07/1993",
            diachi: "TP.HCM",
            sdt: "0909436771",
            email: "trongado@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 2 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom tuyến đường R03", "Đã hoàn thành")),
      },
      {
            ten: "Trần Trọng N",
            ID: "C06",
            CCCD: "012298000281",
            ngaysinh: "09/08/1997",
            diachi: "TP.HCM",
            sdt: "0978127775",
            email: "ntran@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 3 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom tuyến đường R01", "Đã hoàn thành")),
      },
      {
            ten: "Bùi Minh T",
            ID: "C07",
            CCCD: "098193000212",
            ngaysinh: "25/10/1995",
            diachi: "TP.HCM",
            sdt: "0778291212",
            email: "minht@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 0 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom tuyến đường R05", "Đã hoàn thành")),
      },
      {
            ten: "Vũ Trần H",
            ID: "C08",
            CCCD: "078129000271",
            ngaysinh: "19/02/1996",
            diachi: "TP.HCM",
            sdt: "0782029120",
            email: "hvu19@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 2 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom tuyến đường R06", "Đã hoàn thành")),
      },
      {
            ten: "Nguyễn Minh Q",
            ID: "C09",
            CCCD: "079891000281",
            ngaysinh: "08/08/1996",
            diachi: "TP.HCM",
            sdt: "0901876555",
            email: "minhq@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 1 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom tuyến đường R08", "Đã hoàn thành")),
      },
      {
            ten: "Nguyễn Lâm N",
            ID: "C10",
            CCCD: "081922000891",
            ngaysinh: "13/03/1994",
            diachi: "TP.HCM",
            sdt: "0989137225",
            email: "nnguyen13@gmail.com",
            gioitinh: "Nam",
            lichlamviec: new Array(new Schedule(formatDate(new Date(new Date() - 0 * 24 * 60 * 60 * 1000)), "7h30-12h00", "Thu gom tuyến đường R06", "Đã hoàn thành")),
      },
];

export { Collector };