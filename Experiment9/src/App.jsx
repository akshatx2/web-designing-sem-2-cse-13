import { useState } from 'react'
import './App.css'

function App() {

  const [named, setName] = useState("")
  const [maile, setMail] = useState("")
  const [passw, setPass] = useState("")
  const [error, setError] = useState("")
  const [users, setUsers] = useState([])
  const [out, setOut] = useState("")

  function add(e) {

    e.preventDefault()

    if (named.trim() === "") {
      setError("Name cannot be empty")
      setOut("")
      return
    }

    if (!maile.includes("@")) {
      setError("Invalid Email")
      setOut("")
      return
    }

    if (passw.length < 6) {
      setError("Password must contain at least 6 characters")
      setOut("")
      return
    }

    setError("")

    let newPerson = {
      name: named,
      mail: maile,
      password: passw,
    }

    setUsers([...users, newPerson])

    setName("")
    setMail("")
    setPass("")

    setOut("Registered Successfully")
  }

  let userList = users.map((value, index) => (
    <li key={index}>
      <strong>{value.name}</strong> - {value.mail}
    </li>
  ))

  return (
    <>

      <div className='Body'>

        <div className='Card'>

          <h1>Registration Form</h1>

          <form>

            <input
              type='text'
              placeholder='Enter Name'
              value={named}
              onChange={e => setName(e.target.value)}
            />

            <input
              type='email'
              placeholder='Enter Email'
              value={maile}
              onChange={e => setMail(e.target.value)}
            />

            <input
              type='password'
              placeholder='Enter Password'
              value={passw}
              onChange={e => setPass(e.target.value)}
            />

            <button onClick={add}>
              Register
            </button>

          </form>

          <p className='error'>
            {error}
          </p>

          <p className='success'>
            {out}
          </p>

          <div className='users'>

            <h3>Registered Users</h3>

            <ul>
              {userList}
            </ul>

          </div>

        </div>

      </div>

    </>
  )
}

export default App