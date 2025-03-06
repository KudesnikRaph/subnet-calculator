function toBin(ip, maskBits = 0) {
  if (!ip) return "";

  const binaryIp = ip
    .split(".")
    .map(num => parseInt(num, 10).toString(2).padStart(8, "0"))
    .join(".");

  return binaryIp.slice(0, maskBits) + " | " + binaryIp.slice(maskBits);
}

export default toBin;
