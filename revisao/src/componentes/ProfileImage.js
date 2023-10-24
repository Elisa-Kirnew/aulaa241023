import React from 'react'
import '../App.css'

const ProfileImagem = ({titulo, imagem, alt}) => {
    return(
        <div className="card">
            <h2 className='titulo'>{titulo}</h2>
            <img src={imagem} alt={alt} className='imagem'/>
        </div>
    )
}

export default ProfileImagem