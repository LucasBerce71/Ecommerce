
import { postServices } from '../services/post'
import { Request, Response } from 'express'
import { PostschemaValidate } from '../schemas/post'

class postController {
  addpost = async (req: Request, res: Response) => {
    const data = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      published: req.body.published
    }
    const { error, value } = PostschemaValidate.validate(data)

    if (error) {
      res.send(error.message)

    } else {
      const post = await postServices.createPost(value)
      res.status(201).send(post)
    }

  }

  getPosts = async (req: Request, res: Response) => {
    const posts = await postServices.getPosts()
    res.send(posts)
  }

  getAPost = async (req: Request, res: Response) => {
    //get id from the parameter
    const id = req.params.id
    const post = await postServices.getPost(id)
    res.send(post)
  }

  updatePost = async (req: Request, res: Response) => {
    const id = req.params.id
    const post = await postServices.updatePost(id, req.body)
    res.send(post)
  }

  deletePost = async (req: Request, res: Response) => {
    const id = req.params.id
    await postServices.deletePost(id)
    res.send('post deleted')
  }

}

export const PostController = new postController()