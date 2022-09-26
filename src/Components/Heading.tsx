import React from "react";

const Heading = () => {
  //월
  const today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  const dateStr = year + "년 " + month + "월 " + date + "일";

  // 시간
  const hours = ("0" + today.getHours()).slice(-2);
  const minutes = ("0" + today.getMinutes()).slice(-2);
  const timeStr = hours + ":" + minutes;

  return (
    <h1 className="heading">
      {dateStr} , {timeStr}
    </h1>
  );
};
export default Heading;
