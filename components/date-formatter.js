import { parseISO, format, formatDistanceToNow } from 'date-fns';

export default function DateFormatter({ dateString, displayDistance }) {
  const date = parseISO(dateString)
  if (displayDistance) {
    return <time dateTime={dateString}>{format(date, 'EEEE, MMMM	d, yyyy')} (about {formatDistanceToNow(date)} ago)</time>
  } else {
    return <time dateTime={dateString}>{format(date, 'EEEE, MMMM	d, yyyy')}</time>
  }
  
}
