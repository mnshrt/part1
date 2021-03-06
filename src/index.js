import React from 'react'
import ReactDOM from 'react-dom'

const Header =({course})=>{
return (
<h1>{course}</h1>
)
}
const Content =({part1, part2, part3, exercises1, exercises2, exercises3})=>{
  return (
    <div>
       <Part part={part1}/>
       <Part part={part2}/>
       <Part part={part3}/>
       
    </div> 
  )
}
const Part = ({part:{name,exercises}}) => {
  return (
  <p>{name} {exercises}</p>
  )
}

const Total =({exercises1,exercises2,exercises3})=>{
  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}
const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById("root"));