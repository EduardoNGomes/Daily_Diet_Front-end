export const separateDate = (date: string): string[] => {
  const newDate = date.split(' ')[0].split('-').reverse().join('/')

  const hour = date.split(' ')[1].split(':')[0]
  const minutes = date.split(' ')[1].split(':')[1]

  const newTime = `${hour}:${minutes}`

  return [newDate, newTime]
}
