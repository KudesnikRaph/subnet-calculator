function toNetworkAddress(ip, netmask) {
  const ipParts = ip.split('.').map(Number);
  const netmaskParts = netmask.split('.').map(Number);

  const networkParts = ipParts.map((part, index) => part & netmaskParts[index]);
  return networkParts.join('.');
}

export default toNetworkAddress;