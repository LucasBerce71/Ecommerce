import { IPosts, } from '../models/post'
import { Post } from '../schemas/post'
export class postService {

  async createPost(data: IPosts) {
    try {
      const newPost = await Post.create(data)
      return newPost

    } catch (error) {
      console.log(error)
    }
  }

  async getPosts() {
    try {
      const posts = await Post.find({})
      return posts

    } catch (error) {
      console.log(error)
    }
  }

  async getPost(id: string) {

    try {
      const post = await Post.findById({ _id: id })
      if (!post) {
        return 'post not available'
      }
      return post

    } catch (error) {
      console.log(error)
    }
  }

  async updatePost(id: string, data: IPosts) {
    try {
      const posts = await Post.findByIdAndUpdate({ _id: id }, data,)
      if (!posts) {
        return "post not available"
      }
      return posts
    } catch (error) {
      console.log(error)
    }
  }

  async deletePost(id: string) {
    try {
      const post = await Post.findByIdAndDelete(id)
      if (!post) {
        return 'post not available'
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const postServices = new postService()