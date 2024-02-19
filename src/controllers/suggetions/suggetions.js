import { handleServerError, releaseConnections } from "../../lib/helpers.js";

const getNewSuggestions = (req, res, next) => {


    try {

        // Mysql query to get suggetions
        const listOfSuggetions = {};

        res.status(200).json({message: "Success", listOfSuggetions})

    } catch (error) {
        handleServerError(res, error);
    } finally {
        releaseConnections(req.apidb, req.clientDb);
    }
}


export {
    getNewSuggestions
}