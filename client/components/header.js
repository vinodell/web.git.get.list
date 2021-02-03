import React from 'react'

const Header = () => {
  return (
    <nav className="flex bg-indigo-800 items-center justify-between flex-wrap p-6">
      <div className="text-white font-bold flex flex-shrink-0 mr-6">Header</div>
    </nav>
  )
}

export default React.memo(Header)
