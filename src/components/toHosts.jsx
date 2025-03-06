function toHosts(subnetMask) {
  const maskBits = subnetMask.split('.').reduce((acc, part) => {
    const binary = parseInt(part).toString(2).padStart(8, '0');
    return acc + binary.split('1').length - 1;
  }, 0);

  const hostCount = Math.pow(2, (32 - maskBits)) - 2;
  return hostCount.toLocaleString();
}

export default toHosts;
