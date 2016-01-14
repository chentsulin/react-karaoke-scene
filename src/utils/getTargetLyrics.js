import { findIndex, addIndex, map } from 'ramda';


export default function getTargetLyrics(lyrics, current) {
  lyrics = addIndex(map)((lyr, i) => ({ ...lyr, line: i + 1 }))(lyrics);
  const currentIndex = findIndex(
    lyr => lyr.start.m * 60 + lyr.start.s + lyr.start.x * 0.01 > current
  )(lyrics) -1;
  console.log('currentIndex:', currentIndex);
  return {
    prev: lyrics[currentIndex - 1],
    current: lyrics[currentIndex],
    next: lyrics[currentIndex + 1],
  };
}
