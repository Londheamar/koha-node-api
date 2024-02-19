import { Router } from 'express'; //import express
const router = Router();

import apiRoutes from '../src/routes/api.routes.js';

import { connectToClientDatabase } from '../src/middlewares/dbconnect.middleware.js';

// import client database and create route

// Client / koha 1
import test from '../clients/test/Database.js';
router.use("/test", connectToClientDatabase(test), apiRoutes)

// Client / koha 1
import cl2 from '../clients/cl2/Database.js';
router.use("/cl2", connectToClientDatabase(cl2), apiRoutes)


export default router;