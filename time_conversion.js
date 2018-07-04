/* 
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Input Format
A single string  containing a time in 12-hour clock format (i.e.hh:mm:ssAM or hh:mm:ssPM), where 01<=hh<=12 and 
00<=mm, ss<=59

Output Format
Convert and print the given time in 24-hour format, where 00<=hh<=23


Sample Input 0
07:05:45PM

Sample Output 0
19:05:45

*/

function timeConversion(s) {
  time_arr = s.split(":");
  hour = time_arr[0];
  minute = time_arr[1];
  seconds = time_arr[2].slice(0, 2);
  format = time_arr[2].slice(-2);

  if (format == "PM") {
    if (hour == 12) {
      return s.slice(0, s.length - 2);
    }
    hour = parseInt(hour, 10) + 12;
    return (`${hour}:${minute}:${seconds}`);
  } else if (format == "AM") {
    if (hour == 12) {
      hour = "00";
      return (`${hour}:${minute}:${seconds}`);
    }
    return s.slice(0, s.length - 2);
  }
}

result = timeConversion("1:01:01PM")
console.log(result);