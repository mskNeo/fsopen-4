import React from 'react'

const Posts = ({ blogItems }) => {

  const blogElements = blogItems.map(d => {
    return (
      <div key={d._id} class='post'>
        <h3 class='post-title'>{d.title}</h3>
        <div class='info'>
          <p class='post-author'>{d.author}</p>
          <p class='post-likes'>{d.likes} likes</p>
        </div>
      </div>
    )
  })

  return (
    <div>
      {blogElements}
    </div>
  )
}

export default Posts