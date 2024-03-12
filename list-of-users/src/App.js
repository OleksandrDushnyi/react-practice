import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
const [users, setUsers] = React.useState([])
const [isLoading, setLoading] = React.useState(true)
const [searchValue, setSearchValue] = React.useState('')
const [Invites, setInvites] = React.useState([])
const [success, setSuccess] = React.useState(false)

React.useEffect(() => {
  fetch('https://reqres.in/api/users')
  .then(res => res.json())
  .then(json =>{
    setUsers(json.data)
  })
  .catch((err) => {
    console.warn(err)
    alert('Помилка при полученні результату')
  }).finally(() => setLoading(false))
}, [])

const onChangeSearchValue = (event) => {
  setSearchValue(event.target.value)

}

const onClickInvite = (id) => {
  if(Invites.includes(id)){
    setInvites(prev => prev.filter(_id => _id != id))
  } else {
    setInvites(prev => [...prev, id])
  }
}

const onClickSendInvites = () => {
  setSuccess(true)
}

  return (
    <div className="App">
      {
        success ? (<Success count={Invites.length} />) :(
           <Users 
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue} 
          items={users} 
          isLoading={isLoading}
          Invites={Invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
          />)
      }
     
    
    </div>

  );
}

export default App;
