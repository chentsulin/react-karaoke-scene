import calcSeconds from './calcSeconds';


export default function mapLyricPercentage(lyrics, current) {
  let percentage = 0;
  if (lyrics.current) {
    const { start, end } = lyrics.current;
    const startTime = calcSeconds(start);
    const endTime = calcSeconds(end);
    const duration = endTime - startTime;
    console.log('startTime: ', startTime)
    console.log('endTime: ', endTime)
    console.log('current: ', current)
    console.log('duration: ', duration)
    percentage = ((current - startTime) / duration) * 100;
    percentage = percentage > 0 ? percentage : 0;
    console.log('percentage: ', percentage)
  }
  return {
    prev: lyrics.prev ? {
      ...lyrics.prev,
      percentage: 100,
    } : null,
    current: {
      ...lyrics.current,
      percentage,
    },
    next: lyrics.next ? {
      ...lyrics.next,
      percentage: 0
    } : null,
  }
}
