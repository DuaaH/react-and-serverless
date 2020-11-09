const getAccessTokenFromHeaders = (headers) => {
  const rawAuthorization = headers.authorization;
  if (!rawAuthorization) {
    return null;
  }

  const authorizationParts = rawAuthorization.split(' '); // to split the Bearer and token
  if (authorizationParts.length !== 2 || authorizationParts[0] !== 'Bearer') {
    return null;
  }

  const accessToken = authorizationParts[1];
  return accessToken;
};

module.exports = {
  getAccessTokenFromHeaders,
};