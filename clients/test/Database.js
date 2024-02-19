const dbDetails = {
    host: 'localhost',
    user: 'user1',
    password: 'password',
    database: 'database1',
    client: {
        isDbAccessWritable: false, // database access if db user dont have permission to write / insert / update access then false else true
        clientConfigId: 1,
        isRenewalAllowed: false,
        acceptPaymentOnline: false,
    }
};

export default dbDetails;