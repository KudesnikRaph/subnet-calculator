function toBin(ip, maskBits = null) {
  if (!ip) return "";

  const binaryIp = ip
    .split(".")
    .map(num => parseInt(num, 10).toString(2).padStart(8, "0"))
    .join(".");

    if (maskBits === null) {
      return binaryIp;
    }
  
    const bitPosition = maskBits + Math.floor(maskBits / 8);
    

  return binaryIp.slice(0, bitPosition) + " | " + binaryIp.slice(bitPosition);
}

export default toBin;
