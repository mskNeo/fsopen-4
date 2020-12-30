import React from 'react'

const Form = (props) => {
  return (
    <form onSubmit={props.submit} class='form'>
      <div>
        message: <input
                value={props.post}
                onChange={props.postChange} />
      </div>

      <div>
        name: <input
                value={props.author}
                onChange={props.authorChange} />
      </div>
      
      <button type="submit">Add Post</button>
    </form>
  )
}

export default Form