const dbDetails = {
    host: 'localhost',
    user: 'user2',
    password: 'password',
    database: 'database2',
    client: {
        isDbAccessWritable: false, // database access if db user dont have permission to write / insert / update access then false else true
        clientConfigId: 2,
        isRenewalAllowed: false,
        acceptPaymentOnline: false,
    }
};

export default dbDetails;