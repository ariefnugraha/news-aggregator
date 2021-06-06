import style from './css/bigheadline.module.css';
import {Link} from 'react-router-dom';

const BigHeadline = () => {
    return (
        <div className={style.big_headline}>
            <h1>
                <Link to="" title="Warga Palestina yang Terancam Digusur Israel di Yerusalem Masih Menunggu Kepastian">Warga Palestina yang Terancam Digusur Israel di Yerusalem Masih Menunggu Kepastian</Link>
            </h1>
            <p>Proses pengadilan empat keluarga Palestina inilah yang memicu konflik besar hingga merembet ke Jalur Gaza. Rumah mereka terancam diambil paksa untuk permukiman Yahudi.</p>
            <div className={style.image_container}>
                <Link to="/">
                    <img src="https://video-images.vice.com/articles/609eafb6344058009b8d01e0/lede/1621013114379-israelphoto-6.jpeg?crop=1xw:0.8426xh;0xw,0.0639xh&resize=711:*" alt="Warga Palestina yang Terancam Digusur Israel di Yerusalem Masih Menunggu Kepastian" />
                    </Link>    
            </div>
        </div>
    )
}

export default BigHeadline;