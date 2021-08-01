import React from 'react';
import style from './css/longnewscard.module.css';
import { Link } from 'react-router-dom';

const LongNewsCard = () => {
    
    return (
        <div className={style.longnewscard}>
            <div className={style.info}>
                <p>20 Agustus 2010</p>
                <p>oleh <span>Alexander Bima Hutabarat</span></p>
                <p>di <Link to="">Internasional</Link></p>
            </div>
            <div className={style.caption}>
                <h2>
                    <Link to="" title="Title">Tool for censorship’: Newly effective regulation could curb free speech in Indonesia</Link>
                </h2>
                <p>A regulation that grants the government sweeping authority to censor content deemed inappropriate on digital platforms starting on Monday has raised concerns that it might further restrict freedom of speech and information in the digital space.</p>
            </div>
            <div className={style.image_container}>
                <img src="https://thumb.viva.co.id/media/frontend/thumbs3/2021/04/20/607e729baf042-presiden-joko-widodo-dan-ketua-umum-kadin-indonesia-rosan-roslani_665_374.jpg"  alt="Title" />
            </div>
        </div>
    )
}

export default LongNewsCard;