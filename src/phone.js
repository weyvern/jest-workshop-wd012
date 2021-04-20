export default function isPhoneNumber(string) {
  const isValid = string.match(/\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/g);
  return isValid ? string : undefined;
}
