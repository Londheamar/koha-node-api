export const handleServerError = (res, err) => {
    console.error("500-Internal-server-error", err);
    res.status(statusCodes.INTERNAL_SERVER_ERROR[0]).json({ status: false, statusCode: statusCodes.INTERNAL_SERVER_ERROR[1], message: "Internal server error!", err: err?.message });
};

export const releaseConnections = async (apidb, clientDb) => {
    try {
        if (apidb) {
            await apidb.release();
        }
        if (clientDb) {
            await clientDb.release();
        }
    } catch (err) {
        console.error("Error releasing connections:", err);
    }
};

export const releaseDBConnections = async (req, res, next) => {
    releaseConnections(req.apidb, req.clientDb);
    next();
}

export const verifyPassword = async (password, hash) => {
    try {
        const match = await bcrypt.compare(password, hash);
        return match;
    } catch (err) {
        console.error("Error verifying password:", err);
        return false;
    }
};