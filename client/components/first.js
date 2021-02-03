import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { history } from '../redux'
import Head from './head'

const First = () => {
  const [repo, setName] = useState('')
  const onChange = (e) => {
    setName(e.target.value)
  }
  const lol = () => {
    history.push()
  }
  return (
    <div>
      <input
        id="input-field"
        type="text"
        className="text-gray-700"
        onChange={onChange}
        value={repo}
      />
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <button
            id="search-button"
            type="button"
            onClick={() => {
              history = { lol }
            }}
          >
            <Link to={`/first/${repo}`}> search</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

First.propTypes = {}

export default First
