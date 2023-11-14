import Head from 'next/head'
import Block from './components/block'
import styles from './css/board.module.css'
import { useEffect, useState } from 'react'
export default function Home() {

  const [state,setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState('X');

  console.log(state);

  const isWin = (state:any)=>{
    const win = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for( let i =0;i< win.length; i++){
      const [a,b,c] = win[i];
      if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
        console.log(a,b,c);
        return true;
      }
    }
    return false;
  }
  const handleBlockClick = (index:number)=>{
    const stateCopy = Array.from(state);
    if(stateCopy[index] !== null) return;
    stateCopy[index] = currentTurn; 
    //Check for a Win
    const win = isWin(stateCopy);
    setState(stateCopy);
    if(win){
      alert(`${currentTurn} won the game`);
    }
    
    setCurrentTurn(currentTurn === 'X'?'O':'X');

  }

  return (
    <>
      <Head>
        <title>Tic Tac Toe</title>
      </Head>
      <div className={styles.board}>
        <div className={styles.row}>
          <Block value = {state[0]} onClick={()=> handleBlockClick(0)} />
          <Block value = {state[1]} onClick={()=> handleBlockClick(1)}/>
          <Block value = {state[2]} onClick={()=> handleBlockClick(2)}/>
        </div>
        <div className={styles.row}>
          <Block value = {state[3]} onClick={()=> handleBlockClick(3)}/>
          <Block value = {state[4]} onClick={()=> handleBlockClick(4)}/>
          <Block value = {state[5]} onClick={()=> handleBlockClick(5)}/>
        </div>
        <div className={styles.row}>
          <Block value = {state[6]} onClick={()=> handleBlockClick(6)}/>
          <Block value = {state[7]} onClick={()=> handleBlockClick(7)}/>
          <Block value = {state[8]} onClick={()=> handleBlockClick(8)}/>
        </div>
      </div>
  </>
  )
}
