import React, { useState, useEffect } from 'react'
import blogService from './services/blogs'
import Posts from './components/Posts'
import Form from './components/Form'
import './style.css'

const App = () => {
  const [ blogs, setBlogs ] = useState([])
  const [ post, setPost ] = useState('')
  const [ author, setAuthor ] = useState('')

  useEffect(() => {
    blogService
      .getAll()
      .then(response => {
        setBlogs(response)
      })
    }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    const blogObject = {
      title: post,
      author: author,
      url: '/api/4',
      likes: 0
    }

    blogService
      .create(blogObject)
      .then(returnedPost => {
        setBlogs((blogs) => blogs.concat(returnedPost))
        setPost('')
        setAuthor('')
      })
  }

  const handlePostChange = (event) => setPost(event.target.value)
  const handleAuthorChange = (event) => setAuthor(event.target.value)


  return (
    <div>
      <h1>Blogs</h1>

        <Form 
          submit={handleSubmit} 
          post={post} 
          postChange={handlePostChange}
          author={author}
          authorChange={handleAuthorChange}
          />

      <div class='content'>
        <Posts blogItems={blogs} />
      </div>
    </div>
  )
}

export default App