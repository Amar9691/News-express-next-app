"use client";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

type Props = {
  time: string;
};

const LiveTimeStamp = ({ time }: Props) => {
  return <ReactTimeAgo date={Date.parse(time)} locale="en-US" />;
};

export default LiveTimeStamp;
