export interface TimeParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function getRemainingTime(targetTimeStr: string): TimeParts {
  const now = new Date();
  const targetTime = new Date(targetTimeStr.replace(' ', 'T'));
  const diffMs = targetTime.getTime() - now.getTime();

  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  return {
    days: diffDays,
    hours: diffHours,
    minutes: diffMinutes,
    seconds: diffSeconds,
  };
}
