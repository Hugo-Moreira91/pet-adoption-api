export function capitalize(text: string): string {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function capitalizeAll(text: string): string {
  return text
    .toLowerCase()
    .split(" ")
    .map(word => capitalize(word))
    .join(" ");
}
