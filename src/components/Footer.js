import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('');

	function checkValue(){
		if(!inputValue.includes('@')){
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
		}
	}
	
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				La passion des plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>
				Laissez-nous votre mail :
				<input placeholder='Entrez votre email' value={inputValue} onChange={(e) => setInputValue(e.target.value)} onBlur={checkValue}/>
			</div>
		</footer>
	)
}

export default Footer