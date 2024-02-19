import { handleServerError, releaseConnections } from "../../lib/helpers.js";

const biblioDetails = async (req, res, next) => {
    const { biblionumber } = req.query;

    try {

        // Mysql query to get record details
        const bibRecordDetails = await req.clientDb.execute("SELECT title , author from biblio where biblionumber = ?", [biblionumber]);

        if (!bibRecordDetails && bibRecordDetails.length === 0) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // Other details fetch and process

        res.status(200).json({ message: "Success", bibRecordDetails });

    } catch (error) {
        handleServerError(res, error);
    } finally {
        releaseConnections(req.apidb, req.clientDb);
    }

}


export {
    biblioDetails
}