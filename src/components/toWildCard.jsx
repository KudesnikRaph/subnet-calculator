function toWildcard(subnetMask) {
  if (!subnetMask) return "";
  
  const maskParts = subnetMask.split(".").map(Number);
  if (maskParts.length !== 4) return "";
  
  const wildcardParts = maskParts.map(part => 255 - part);
  return wildcardParts.join(".");
}

export default toWildcard;
