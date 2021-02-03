import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Head from './head'

const Repo = () => {
  const { repo } = useParams()
  const [user, getUser] = useState([])
  useEffect(() => {
    axios(`https://api.github.com/users/${repo}/repos`).then((it) => getUser(it.data))
    return () => {}
  }, [])
  return (
    <div>
      <Head title="Hello" />
      <div>
        <div id="repository-name">{repo}:</div>
        <Link id="go-back" to="/first">
          back
        </Link>
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          {user.map((repoName) => {
            return (
              <p>
                <Link to={`/first/${repo}/${repoName.name}`}>{repoName.name}</Link>
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Repo.propTypes = {}

export default Repo
