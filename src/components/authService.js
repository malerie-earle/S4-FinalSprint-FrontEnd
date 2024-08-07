import AWS from 'aws-sdk';
import crypto from 'crypto'; // Ensure crypto is available in your environment

// Configure AWS SDK
AWS.config.update({
  region: 'us-east-2',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:7e7cbae7-1ed2-4e4d-9283-f88298c2c77c'
  })
});

const cognito = new AWS.CognitoIdentityServiceProvider();

const clientId = '675kdn76u0o1f1b5om2unrbfn0'; // Your client ID
const clientSecret = 'your-client-secret'; // Your client secret

function calculateSecretHash(clientId, clientSecret, username) {
  const message = username + clientId;
  const hmac = crypto.createHmac('sha256', clientSecret);
  hmac.update(message);
  const digest = hmac.digest('base64');
  return digest;
}

export function authenticateUser(username, password) {
  const params = {
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: clientId,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
      SECRET_HASH: calculateSecretHash(clientId, clientSecret, username)
    }
  };

  return new Promise((resolve, reject) => {
    cognito.initiateAuth(params, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}
