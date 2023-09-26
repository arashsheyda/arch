export function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }

  return new Intl.DateTimeFormat('en-US', options).format(new Date(date))
}
