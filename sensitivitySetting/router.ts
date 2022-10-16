import type {NextFunction, Request, Response} from 'express';
import express from 'express';
import SensitivitySettingCollection from './collection';
import * as userValidator from '../user/middleware';
import * as freetValidator from '../freet/middleware';
import * as util from './util';

const router = express.Router();

/**
 * Get sensitivity setting of user.
 *
 * @name GET /api/sensitivitySetting?userId=id
 *
 * @return {SensitivitySettingResponse[]}
 * @throws {400} - If userId is not given
 * @throws {404} - If no user has given userId
 *
 */
// router.get(
//   '/',
//   async (req: Request, res: Response, next: NextFunction) => {
//     // Check if userId query parameter was supplied
//     if (req.query.user !== undefined) {
//       next();
//       return;
//     }

//     const allFreets = await FreetCollection.findAll();
//     const response = allFreets.map(util.constructFreetResponse);
//     res.status(200).json(response);
//   },
//   [
//     userValidator.isAuthorExists
//   ],
//   async (req: Request, res: Response) => {
//     const authorFreets = await FreetCollection.findAllByUsername(req.query.author as string);
//     const response = authorFreets.map(util.constructFreetResponse);
//     res.status(200).json(response);
//   }
// );

// /**
//  * Modify a freet
//  *
//  * @name PUT /api/freets/:id
//  *
//  * @param {string} content - the new content for the freet
//  * @return {FreetResponse} - the updated freet
//  * @throws {403} - if the user is not logged in or not the author of
//  *                 of the freet
//  * @throws {404} - If the freetId is not valid
//  * @throws {400} - If the freet content is empty or a stream of empty spaces
//  * @throws {413} - If the freet content is more than 140 characters long
//  */
// router.put(
//   '/:freetId?',
//   [
//     userValidator.isUserLoggedIn,
//     freetValidator.isFreetExists,
//     freetValidator.isValidFreetModifier,
//     freetValidator.isValidFreetContent
//   ],
//   async (req: Request, res: Response) => {
//     const freet = await FreetCollection.updateOne(req.params.freetId, req.body.content);
//     res.status(200).json({
//       message: 'Your freet was updated successfully.',
//       freet: util.constructFreetResponse(freet)
//     });
//   }
// );

export {router as sensitivitySettingRouter};
