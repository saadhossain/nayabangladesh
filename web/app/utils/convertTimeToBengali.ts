import moment from 'moment';
import 'moment/locale/bn';

export const convertTimeToBengali = (isoDate: string | undefined) => {
    moment.locale('bn');
    const date = moment(isoDate);

    // Format the date in Bengali
    const formattedDate = date.format('LL, dddd, LT');

    //Get the Date and Day
    const dateAndDay = date.format('LL, dddd');
    //Get the Date only
    const dateOnly = date.format('LL');
    // Get "time ago" in Bengali
    const timeAgo = date.fromNow();

    const timeInfo = { timeAgo, formattedDate, dateAndDay, dateOnly }
    // Return formatted date and time ago
    return timeInfo;
};
