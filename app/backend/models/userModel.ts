import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  containerId?: string;
  userId?: string;
}

const userSchema: Schema<IUser> = new Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  containerId: {
    type: String,
    default: undefined
  },
  userId: {
    type: String,
    default: undefined
  }
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
