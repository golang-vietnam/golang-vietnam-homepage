export default function truncate(str, len = 175) {
  return str.length >= len ? str.substring(0, len - 3) + '...' : str;
}
