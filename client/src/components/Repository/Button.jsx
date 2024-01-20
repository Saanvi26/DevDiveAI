import React from 'react'

const Button = ({label}) => {
  return (
    // Inside the Button component
<button className="bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
  {label}
</button>


  )
}

export default Button
