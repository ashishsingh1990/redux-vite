import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Child from './components/Child'
import { fetchUsers } from './redux/user/user.action'

function App() {
  const dispatch = useDispatch();
  // const users = useSelector(state => state.user.data)
  //const [users, setUsers] = useState([]);
  const { data: users, isLoading, error} = useSelector(state => state.user);
 

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if (isLoading) return <div>Loading...</div>
  if(error) return <div>Error ...</div>
  return <>
    {users.map(user => {
      return <div key={user.id}>{user.name}</div>
    })
  }
  </>;
}

export default App
