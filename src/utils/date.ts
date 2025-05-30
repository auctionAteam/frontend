import 'dayjs/locale/ko';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.locale('ko');
dayjs.extend(duration);

export const getRemainingTime = (end: string) => {
  const endTime = dayjs(end);
  const now = dayjs();

  if (now.isAfter(endTime)) {
    return '경매가 종료 되었습니다.';
  }

  const diff = dayjs.duration(endTime.diff(now));

  const days = diff.days();
  const hours = diff.hours();
  const minutes = diff.minutes();

  if (days > 0) return `${days}일 ${hours}시간 후 종료`;
  if (hours > 0) return `${hours}시간 ${minutes}분 후 종료`;
  return `${minutes}분 후 종료`;
};
