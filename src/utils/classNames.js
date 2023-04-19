export default function classnames(namesArray) {
  return []
    .concat(...namesArray)
    .filter(Boolean)
    .join(" ")
    .trim();
}
