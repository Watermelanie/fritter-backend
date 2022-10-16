import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';
import type {User} from 'user/model';

/**
 * This file defines the properties stored in a SensitivitySetting
 * DO NOT implement operations here ---> use collection file
 */

// Type definition for SensitivitySetting on the backend
export type SensitivitySetting = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  user: Types.ObjectId;
  sensitiveContent: boolean;
  hiddenFreet: boolean;
};

export type PopulatedSensitivitySetting = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  user: User;
  sensitiveContent: boolean;
  hiddenFreet: boolean;
};

// Mongoose schema definition for interfacing with a MongoDB table
// SensitivitySettings stored in this table will have these fields, with the
// type given by the type property, inside MongoDB
const SensitivitySettingSchema = new Schema<SensitivitySetting>({
// User that the setting is for
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  // Show sensitive content
  sensitiveContent: {
    type: Boolean,
    required: true
  },
  // Show hidden freets
  hiddenFreet: {
    type: Boolean,
    required: true
  }
});

const SensitivitySettingModel = model<SensitivitySetting>('SensitivitySetting', SensitivitySettingSchema);
export default SensitivitySettingModel;
