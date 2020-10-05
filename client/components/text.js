import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Text = () => {
  return (
    <div>
      <Head title="Hello" />
      <Link to="/first/:username">back</Link>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          The Text
        </div>
      </div>
    </div>
  )
}

Text.propTypes = {}

export default Text
