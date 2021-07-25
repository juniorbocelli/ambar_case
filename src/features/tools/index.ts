export function twoZeros(number: string | number): string {
  return ("0" + String(number)).slice(-2);
}

// Format dd/mm/yyyy 00:00
export function printDateTimeFromTimestamp(timestamp: Date | number | string): string {
  var date: Date | number | string;
  var year, month, day, hour, minute: string;

  if (timestamp instanceof Date && !isNaN(timestamp.valueOf())) {
    date = timestamp;
  } else {
    date = new Date(timestamp)
  }

  year = String(date.getUTCFullYear());
  month = twoZeros(date.getMonth() + 1);
  day = twoZeros(date.getDate());

  hour = twoZeros(date.getHours());
  minute = twoZeros(date.getMinutes());

  return day + "/" + month + "/" + year + " " + hour + ":" + minute;
}