"use client"

import {useState} from 'react'

export default function Home() {
  const [counter, setCounter] = useState(0)
  const [user, setUser] = useState<undefined | {
    firstName: string
    lastName: string
  }>()

  const incrementCounter = () => setCounter(counter + 1)

  const decrementCounter = () => setCounter(counter - 1)

  const getUser = async () => {
    const response = await fetch("http://127.0.0.1:8080/user")
    const body = await response.json()
    setUser(body)
  }

  return (
    <div>
      <div>counter: <span data-testid="counter">{counter}</span></div>
      <button onClick={incrementCounter} data-testid="incrementBtn">increment</button>
      <button onClick={decrementCounter} data-testid="decrementBtn">decrement</button>
      <button onClick={getUser} data-testid="getUserBtn">get user</button>
      {user && (
        <>
          <div>first name: <span data-testid="firstName">{user.firstName}</span></div>
          <div>last name: <span data-testid="lastName">{user.lastName}</span></div>
        </>
      )}
    </div>
  )
}
