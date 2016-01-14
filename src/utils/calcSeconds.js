export default function calcSeconds(t) {
  return t.m * 60 + t.s + t.x * 0.01;
}
