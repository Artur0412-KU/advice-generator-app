import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import buttonImg from './images/icon-dice.svg'
import PatternImg from './images/pattern-divider-desktop.svg'

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState(null);

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
       .then((res) => {
          setAdvice(res.data.slip.advice)
          setAdviceId(res.data.slip.id);
       })
  }



  useEffect(() => {
      fetchAdvice();
  }, [])

  return (
    <>
    <div className='advice-card'>
      <p>Advice #{adviceId}</p>
      <h1>"{advice}"</h1>
      <img className='pattern-img' src={PatternImg}/>

      
    </div>
    <div className='button-container'>
      <a href='' className='button-img' onClick={fetchAdvice}>
        <img src={buttonImg}/>
      </a>
    </div>
    
    </>
    

    
  )
}

export default App
