import express from 'express';


import { loginUser } from '../controllers/user/user.controllers.js';
import authenticateToken from '../middlewares/authenticate.js';
import { getNewSuggestions } from '../controllers/suggetions/suggetions.js';
import { biblioDetails } from '../controllers/biblio/biblio.js';

const router = express.Router();


router.route("/auth").post(loginUser);


/**
 * 
 * Protected routes
 * 
 */


// Circulation routes
router.route("/suggestions").get(authenticateToken, getNewSuggestions);


/**
 * 
 * Public routes
 * 
 */

// Biblio
router.route("/bib-details").get(biblioDetails);


export default router;