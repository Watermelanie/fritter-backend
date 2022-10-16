import type {HydratedDocument, Types} from 'mongoose';
import type {SensitivitySetting} from './model';
import SensitivitySettingModel from './model';

/**
 * This file contains a class with functionality to change the sensitivity setting for a User
 *
 * Note: HydratedDocument<User> is the output of the UserModel() constructor,
 * and contains all the information in User. https://mongoosejs.com/docs/typescript.html
 */
class SensitivitySettingCollection {
  /**
   * Hides sensitive content
   *
   * @param {string} userId - The id of the user
   */
  static async hideSensitiveContent(userId: Types.ObjectId | string): Promise<void> {
    //
  }

  /**
   * Shows sensitive content
   *
   * @param {string} userId - The id of the user
   */
  static async showSensitiveContent(userId: Types.ObjectId | string): Promise<void> {
    //
  }

  /**
   * Hides hidden freets
   *
   * @param {string} userId - The id of the user
   */
  static async hideHiddenFreet(userId: Types.ObjectId | string): Promise<void> {
    //
  }

  /**
   * Shows hidden freets
   *
   * @param {string} userId - The id of the user
   */
  static async showHiddenFreet(userId: Types.ObjectId | string): Promise<void> {
    //
  }
}

export default SensitivitySettingCollection;
