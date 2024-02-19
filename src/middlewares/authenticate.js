import jwt from 'jsonwebtoken';
import statusCodes from '../lib/statusCodes.js';
import { releaseConnections } from '../lib/helpers.js';



// Middleware to authenticate the token
async function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(statusCodes.UNAUTHORIZED[0]).json({ status:false, statusCode:statusCodes.UNAUTHORIZED[1], message: 'Missing authentication token!' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if user exists in database
    // Test
    const user = { cardnumber: "123", borrowernumber: 1, name: "Amar" }
    // const user = { }


    if (!user) {
      return res.status(statusCodes.UNAUTHORIZED[0]).json({ status:false, statusCode:statusCodes.UNAUTHORIZED[1], message: 'User not found!' });
    }

    let borrowernumber = user.borrowernumber;

    req.user = {...decoded, borrowernumber};
    next();
  } catch (error) {
    console.error("500-Internal-server-error", error);
    res.status(statusCodes.UNAUTHORIZED[0]).json({ status: false, statusCode: statusCodes.UNAUTHORIZED[1], message: "Internal server error!", err: error?.message });

} finally {
    releaseConnections(req.apidb, req.clientDb);
}
}

export default authenticateToken;