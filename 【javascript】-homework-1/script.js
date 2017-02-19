//声明年月日变量
var year=parseInt(prompt("请输入您的出生年份")),
    month=parseInt(prompt("请输入您的出生月份")),
    date=parseInt(prompt("请输入您的出生日期"));


//定义天数计算函数
function conutDay(year,month,date) {
    var sum=0;
    var months = [0,0,31,28,31,30,31,30,31,31,30,31,30,31];
    for (var i = 1; i <= month; i++){
        sum += months[i];
    }
    //判断是否闰年
    if ((year%4==0&&year%100!=0)||year%400==0) {
        if (month>=3) {
            return sum+date+1;
        }
    }
    return sum + date;
}
document.write("你的生日在" + year + "年是第" + conutDay(year,month,date) + "天");
