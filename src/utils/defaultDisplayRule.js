import calcSeconds from './calcSeconds';


export default function defaultDisplayRule(lyrics, current) {
  const currentIsEven = lyrics.current.line % 2 === 0;
  let left, right;
  const shouldDisplayNext =
    !lyrics.prev || (current - calcSeconds(lyrics.prev.end) > 0.25);

  if (currentIsEven) {
    right = lyrics.current;
    left = shouldDisplayNext ? lyrics.next : lyrics.prev;
  } else {
    left = lyrics.current;
    right = shouldDisplayNext ? lyrics.next : lyrics.prev;
  }
  console.log(left, right);
  return {
    left,
    right,
  }
}
