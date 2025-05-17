export function capitalize(text: string, sep = " ") {
  if (text.includes(sep)) {
    return text.split(sep).map(section => capitalize(section, sep)).join(sep);
  }

  const head = text.slice(0, 1).toUpperCase();
  const tail = text.slice(1).toLowerCase();

  return head + tail;
}
