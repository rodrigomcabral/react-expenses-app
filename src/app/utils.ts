export function formatValue(value: number): string {
  if (typeof value === "number" && !isNaN(value)) {
    return value.toFixed(2).replace(".", ",");
  } else {
    console.error("Invalid numeric value:", value);
    return "N/A"; // or any other default value or message
  }
}
