import React from "react";

const Heading = () => {
  //월
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDay()).slice(-2);
  const dateStr = year + "년 " + month + "월 " + day + "일";

  // 시간
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const timeStr = hours + ":" + minutes;

  return (
    <h1 className="heading">
      {dateStr} , {timeStr}
    </h1>
  );
};
export default Heading;
