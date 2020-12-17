function convertSecondsToTimeString(inputSeconds: number): string {
    // unit
    const secondsInAMinute = 60;
    const secondsInAnHour = 60 * secondsInAMinute;
    const secondsInADay = 24 * secondsInAnHour;
    const secondsInAYear = 365 * secondsInADay;

    // get years
    const years = Math.floor(inputSeconds / secondsInAYear);

    // get days
    const daySeconds = inputSeconds % secondsInAYear;
    const days = Math.floor(daySeconds / secondsInADay);

    // get hours
    const hourSeconds = daySeconds % secondsInADay;
    const hours = Math.floor(hourSeconds / secondsInAnHour);

    // get minutes
    const minuteSeconds = hourSeconds % secondsInAnHour;
    const minutes = Math.floor(minuteSeconds / secondsInAMinute);

    // get remaining seconds
    const remainingSeconds = minuteSeconds % secondsInAMinute;
    const seconds = Math.ceil(remainingSeconds);

    // return strings.....
    const returnString =
        getReturnString(years, 'year') +
        getReturnString(days, 'day') +
        getReturnString(hours, 'hour') +
        getReturnString(minutes, 'minute') +
        getReturnString(seconds, 'second');

    return returnString.substr(0, returnString.length - 2);
}

function getReturnString(value: number, unit: string): string {
    return `${value > 1 ? `${value} ${unit}s, ` : value == 1 ? `${value} ${unit}, ` : ''}`;
}
