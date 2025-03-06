function toHex(ip) {
  if (!ip) return "";

  return ip
    .split(".") 
    .map(octet => {
      const hex = parseInt(octet, 10).toString(16).toUpperCase();
      return hex.length === 1 ? "0" + hex : hex; 
    })
    .join(".");
}

export default toHex;
