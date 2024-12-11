import moment from 'moment';
import 'moment/locale/bn';

export const convertTimeToBengali = (isoDate: string | undefined) => {
    moment.locale('bn');
    const date = moment(isoDate);

    // Format the date in Bengali
    const formattedDate = date.format('LL, dddd, LT');

    // Get "time ago" in Bengali
    const timeAgo = date.fromNow();

    // Return formatted date and time ago
    return `(${timeAgo}) ${formattedDate}`;
};
