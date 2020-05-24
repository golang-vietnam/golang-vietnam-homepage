import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
dayjs.extend(relativeTime);

export default function toTimeAgo(date) {
  return dayjs().to(dayjs(date));
}
