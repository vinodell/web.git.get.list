import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'

const ReactMarkdown = require('react-markdown')

const Text = () => {
  const { repo, text } = useParams()
  const [file, getFile] = useState('')
  useEffect(() => {
    axios(`https://raw.githubusercontent.com/${repo}/${text}/master/README.md`).then((it) => {
      getFile(it.data)
    })
    return () => {}
  }, [])

  return (
    <div>
      <Head title="Hello" />
      <div id="repository-name"> Readme.MD from {text}</div>
      <div>
        <Link id="go-back" to={`/first/${repo}`}>
          back
        </Link>
      </div>
      <div>
        <Link id="go-repository-list" to="/first">
          back to search
        </Link>
      </div>
      <div id="description">
        <ReactMarkdown source={file} />
      </div>
    </div>
  )
}

Text.propTypes = {}

export default Text
