import { Button } from 'react-bootstrap';
import './App.css';
import style from './style.module.css'

function handleClick(warna) {
    alert(`anda mengklik ${warna}`) 
}

function App() {
  return (
    <>
      <Button variant='outline-danger' className={style['padding-content']} onClick={() => handleClick('Merah')}>Merah</Button>
      <Button variant='outline-success' className={style['padding-content']} onClick={() => handleClick('Hijau')}>Hijau</Button>
      <Button variant='outline-primary' className={style['padding-content']} onClick={() => handleClick('Biru')}>Biru</Button>
    </>
  )
}

export default App;
