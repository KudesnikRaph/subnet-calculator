function toBroadcastAddress(network, wildcard) {
  const networkParts = network.split('.').map(Number);
  const wildcardParts = wildcard.split('.').map(Number);

  const broadcastParts = networkParts.map((part, index) => part | wildcardParts[index]);
  return broadcastParts.join('.');
}

export default toBroadcastAddress;