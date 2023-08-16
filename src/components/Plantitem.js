import React from 'react'
import CareScale from './CareScale'
import '../styles/PlantItem.css'

export default function Plantitem({id, name, cover, light, water}) {

	
  return (
    <li key={id} className='lmj-plant-item'>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale  careType='water' scaleValue={water} />
				<CareScale  careType='light' scaleValue={light} />
			</div>
	</li>
  )
}

