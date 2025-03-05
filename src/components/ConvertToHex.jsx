function ipToHex(ip) {
  if (!ip) return "";

  return ip
    .split(".") 
    .map((octet) => {
      const hex = parseInt(octet, 10).toString(16).toUpperCase();
      return hex.padStart(2, "0");
    })
    .join(".");
}

export default ipToHex;
