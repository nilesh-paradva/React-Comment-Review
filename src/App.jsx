import { useState } from 'react'
import './App.css'
import CommentReview from './components/comment-review/CommentReview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CommentReview/>
    </>
  )
}

export default App
