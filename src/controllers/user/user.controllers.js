import { handleServerError, releaseConnections, verifyPassword } from "../../lib/helpers.js";
import statusCodes from "../../lib/statusCodes.js";

const loginUser =async (req, res, next) => {
    const { userid, password } = req.body;

    try {

        // validations

        const user = req.clientDb.execute("SELECT cardnumber , name from borrowers where userid = ?", [userid]);

        if (!user && user.length === 0) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // validate password
        const isPasswordMatch = await verifyPassword(password, user[0].password);
        if (!isPasswordMatch) {
            res.status(statusCodes.UNAUTHORIZED[0]).json({ status: false, statusCode: statusCodes.UNAUTHORIZED[1], message: "Incorrect userid or password!" });
            return;
        }

        // Generate JWT
        const token = "token";


        res.status(200).json({ message: "Success", token, user })

    } catch (error) {
        handleServerError(res, error);
    } finally {
        releaseConnections(req.apidb, req.clientDb);
    }
}


export {
    loginUser
}