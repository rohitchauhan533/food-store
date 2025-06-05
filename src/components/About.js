import React from 'react'
import UserClass from './UserClass'
import User from './User'

const About = () => {
  return (
    <div>
    <h1>About</h1>
    <h2>This is all about this store</h2>
    <User name = {"Badmos function"}/>
    <UserClass name={"rohit"}  location = {"india"}  />

    </div>
  )
}

export default About