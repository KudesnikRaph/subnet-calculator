function toHostmax(broadcast) {
  const broadcastParts = broadcast.split('.').map(Number);
  
  broadcastParts[3] -= 1;

  return broadcastParts.join('.');
}

export default toHostmax;
