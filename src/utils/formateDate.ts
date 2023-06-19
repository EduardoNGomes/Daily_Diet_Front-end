export const formateDate = (date: string): string => {
  const nDate = date.split(' ').join(' às ').split(':')
  const dateResponse = nDate[0] + ':' + nDate[1]
  return dateResponse
}
