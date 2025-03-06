function toHostmin(network) {
  const networkParts = network.split('.').map(Number);
  
  networkParts[3] += 1;

  return networkParts.join('.');
}

export default toHostmin;
