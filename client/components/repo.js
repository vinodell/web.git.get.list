import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'

const Repo = () => {
  const { repo } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div>
        <div>{repo}:</div>
        <Link to="/first"> back</Link>
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          The Repo is Here
        </div>
      </div>
    </div>
  )
}

Repo.propTypes = {}

export default Repo
