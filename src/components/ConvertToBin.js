function toBin(ip) {
  if(!ip) return "";

  return ip
    .split(".")
    .map((num) => {
      const bin = parseInt(num, 10).toString(2)
      return bin.padStart(8, "0");
    })
    .join(".");
  }
  export default toBin;