import styles from './Stoper.module.scss'
import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

const Stoper = () =>{
	
	const [time, setTime] = useState(0)
	const [running, setRunning] = useState(false)

const timer = useRef()

	useEffect(() => {
		if (running) {
			timer.current = setInterval(() => {
				setTime(pre => pre + 1)
			}, 10)
		}
		return () =>  clearInterval(timer.current)
		}, [running])

	return(
		<div className={styles.timer}>	
			<p className={styles.time}>{format(time)}</p>
			<div className={styles.buttons}>
				<button className={styles.button} onClick={() => {
					if (!running) setRunning(true)
					setTime(0) 
				}}>{( time !== 0)? 'Restart' : 'Start'}</button>
				<button className={styles.button} onClick={() =>{
					if (running) clearInterval(timer.current)
					setRunning(!running)
				}}>{running ? 'Stop' : 'Resume'}</button>
			</div>
		</div>
	)
}

function format(time) {
	console.log(time)
	let hours = Math.floor(time / 100 / 60 / 60 % 24);
	let minutes = Math.floor(time / 100 / 60 % 60) ;
	let seconds = Math.floor(time / 100 % 60);
	let mSec = Math.floor(time % 100);

	hours = hours < 10 ? '0' + hours : hours
	minutes = minutes < 10 ? '0' + minutes : minutes
	seconds = seconds < 10 ? '0' + seconds : seconds
	mSec = mSec < 10 ? '0' + mSec : mSec
	

	return hours + ':' + minutes + ':' + seconds + '.' + mSec
}
export default Stoper 