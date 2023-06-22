import { Schema, model, } from 'mongoose'
import Joi from 'joi'
import { IPosts } from '../models/post'

export const PostschemaValidate = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  author: Joi.string().required(),
  published: Joi.boolean().required(),

})

const postSchema = new Schema<IPosts>({
  title: {
    type: String,

  },

  description: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  },
  published: {
    type: Boolean,
    required: true,
    default: false
  },


})

export const Post = model<IPosts>('Post', postSchema)