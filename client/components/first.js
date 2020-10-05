import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const First = () => {
  const [repo, setName] = useState('')
  return (
    <div>
      <input
        type="text"
        className="text-gray-700"
        repo={repo}
        onChange={(e) => setName(e.target.repo)}
      />
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Link to={`/first/${repo}`}>search</Link>
        </div>
      </div>
    </div>
  )
}

First.propTypes = {}

export default First
