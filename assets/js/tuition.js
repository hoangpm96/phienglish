function calculateTuition() {
  var typeOfCourse = document.getElementById("tcourse").value;
  var numOfWeek = document.getElementById("nweek").value;
  var numOfDay = document.getElementById("nday").value;
  var numOfHour = document.getElementById("nhour").value;
  var pricetemplate = [0, 5,5, 4.506, 6, 7, 8, 8, 10
                      , 5.5,5.5, 4.6, 6.3, 7.2, 8.2, 8.5, 11
                      , 6,6, 5, 6.6, 7.5, 8.5, 10, 12.5];
  var extratemplate = [0, 0, 1, 2, 2.5,3,4,4.5,5, 7, 7.5, 8, 10]; // weeks
                   // 0T,1T,2T,3T,4T,5T,6T,7T,8T,9T,10T,11T,12T
  var vnd = 23270;

  //validate input
  if (typeOfCourse == "") {
    alert("Vui lòng chọn khóa học");
    return;
  }
  if (numOfWeek == "") {
    alert("Vui lòng chọn số tuần học");
    return;
  }
  if (numOfDay == "") {
    alert("Vui lòng chọn số buổi học/tuần");
    return;
  }
  if (numOfHour == "") {
    alert("Vui lòng chọn số giờ học/buổi");
    return;
  }

  // Clear information

  document.getElementById("typeOfTeacher").innerHTML = "";
  document.getElementById("changeTeacher").innerHTML = "";
  document.getElementById("tuitiontotal").innerHTML = "";
  document.getElementById("vndtuitiontotal").innerHTML = "";
  document.getElementById("tuitionperhour").innerHTML = "";
  document.getElementById("hourstostudy").innerHTML = "";
  document.getElementById("tryingclasses").innerHTML = "";
  document.getElementById("tryingclasses").innerHTML = "";
  document.getElementById("tryingclassesinfo").innerHTML = "";
  document.getElementById("extraweeks").innerHTML = "";
  document.getElementById("extrahours").innerHTML = "";
  document.getElementById("extravalue").innerHTML = "";

  var totalHour = numOfWeek * numOfDay * numOfHour;
  var id;
  if (totalHour >= 16) {
    id = 0;
  } else {
    if (totalHour >= 8) {
      id = 1;
    } else { id = 2; }
  };
  var extraHours = Math.floor(totalHour/32)*2
  var unitprice = pricetemplate[id * 8 + parseInt(typeOfCourse)];
  var tuitiontotal = totalHour * unitprice;
  var vndtuitiontotal = tuitiontotal * vnd;
  var nOfTrying = 1 + Math.floor(totalHour / 32);
  document.getElementById("introduction").innerHTML = "Kết quả:";
  document.getElementById("introduction2").innerHTML = "";
  if (typeOfCourse == 3) {
    document.getElementById("typeOfTeacher").innerHTML = "Giáo viên Việt Nam giảng dạy";
  }
  else {document.getElementById("typeOfTeacher").innerHTML = "Giáo viên Philippines giảng dạy"}
  document.getElementById("teachertitle").innerHTML = "Thông tin giáo viên:";
  document.getElementById("tuitiontitle").innerHTML = "Thông tin học phí:";
  document.getElementById("extratitle").innerHTML = "Quà tặng:";
  document.getElementById("chooseTeacher").innerHTML = "Đăng ký học ngay";
  document.getElementById("tuitiontotal").innerHTML = "Học phí của bạn là: $" + tuitiontotal;
  document.getElementById("vndtuitiontotal").innerHTML = "Học phí (vnd) của bạn là: " + formatvnd(vndtuitiontotal) + " đồng";
  document.getElementById("tuitionperhour").innerHTML = "Học phí mỗi giờ là: $" + unitprice  + " = " + formatvnd(unitprice*vnd) + " đồng";
  document.getElementById("hourstostudy").innerHTML = "Tổng số giờ học của bạn là: " + totalHour + " giờ";
  document.getElementById("tryingtitle").innerHTML = "Lớp học thử:"
  document.getElementById("tryingclasses").innerHTML = "Số buổi được học thử tối đa là: " + nOfTrying + " (25 phút/buổi)";
  if (nOfTrying > 1) {
    document.getElementById("tryingclassesinfo").innerHTML = "Mỗi buổi học thử cách nhau tối thiểu 32 giờ học, bạn có thể học thử để thay đổi giáo viên.";
    document.getElementById("changeTeacher").innerHTML = "Được phép đổi giáo viên.";
  }
  if ((extraHours >0)) {
    document.getElementById("extrahours").innerHTML = "Số giờ được tặng thêm: " + extraHours + " giờ.";
    document.getElementById("extravalue").innerHTML = "Giá trị quà tặng tương ứng: $" + extraHours*unitprice + " = " + formatvnd(extraHours*unitprice*vnd) + " đồng";
  } else {
    document.getElementById("extraweeks").innerHTML = "Không có quà tặng do số giờ học chưa đáp ứng đủ điều kiện.";
  }

}
function formatvnd(n) {
  return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

