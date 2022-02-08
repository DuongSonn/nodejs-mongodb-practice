export default {
    port: 1998,
    dbUri: 'mongodb://localhost:27017/nodejs-mongodb-practice',
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey: `-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDGNwFBZsnDw/QKfQhlKn2VdQUt
    2kNG0oOx0CxhVlZ+F8De8LoeCW1i9Iv0qLp/Cx2UfHdgEvkZdSSUsjzw85e16wY9
    hI0tA5nd5vO/bvulK+PqaQeD2My16hntkqdShwjDdgIdDw19qlfw4Gr8g+ibStdM
    FRlWGDk0Ujf6KeVADwIDAQAB
    -----END PUBLIC KEY-----`,
};
