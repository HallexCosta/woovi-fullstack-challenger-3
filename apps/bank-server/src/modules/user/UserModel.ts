import mongoose, { type Document } from 'mongoose'

export type User = {
  email: string
  publicId: number
  fullName: string
  pixKey: string
  profileImage: string
  createdAt: Date
  updatedAt: Date | null
}

export type UserModelDocument = User & Document

const UserSchema = new mongoose.Schema<UserModelDocument>(
  {
    publicId: Number,
    fullName: String,
    email: String,
    pixKey: String,
    profileImage: String,
    createdAt: Date,
    updatedAt: Date
  },
  {
    collection: 'User',
    timestamps: true
  }
)

export const UserModel = mongoose.model<UserModelDocument>('User', UserSchema)
