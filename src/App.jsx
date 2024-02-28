import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Title from './components/Title'
import Button from './components/Button'
import Button2 from './components/Button2'
import {BrowserRouter as Router, Link, Outlet, Route, Routes} from 'react-router-dom'; 
import Characters from './pages/Characters'


function App() {
  const [count, contador] = useState(0)
  console.log(count); 
  useEffect(() => {
    console.log("useEffect is working!!!")
  }, [count]);
  
  return (
    <div className='App'>
      <Button2 onClick={() => alert("I clicked")}/>
      <Button2 onClick={() => contador(count+1)} text={`+1`}/>
      <Button2 onClick={() => contador(0)} text={'reset count'}/>
      <Title text={count} />
      
      {/* <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}/> 
            <Route path="/" element={<Characters />} />
          
          </Route>
        </Routes>
      </Router> */}
    </div>
  );
  }
export default App
