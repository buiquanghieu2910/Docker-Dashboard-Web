import { ElLoading } from "element-plus";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.locale(en);

export const timeAgo = (time) => {
  const timeAgo = new TimeAgo("en-US");
  return timeAgo.format(new Date(time));
};

/**
 * Loading page
 * @param {*} value
 */
export const loadingPage = (value) => {
  if (value) {
    ElLoading.service({
      lock: true,
      text: "Loading...",
      background: "rgba(0, 0, 0, 0.7)",
    });
  } else {
    ElLoading.service().close();
  }
};
