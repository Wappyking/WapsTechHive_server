function responseObject(message, type, data) {
  return {
    success: type,
    message,
    data,
  };
}

module.exports = { responseObject };
