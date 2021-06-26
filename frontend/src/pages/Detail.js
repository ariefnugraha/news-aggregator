import { useState, useEffect } from 'react';
import style from './css/detail.module.css';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import NavbarDetail from '../components/NavbarDetail';
import NewsCard from '../components/NewsCard';
import Shuffle from '../components/Shuffle';

const Detail = () => {

    const [scrollPosition, setscrollPosition] = useState(0);
    const handleScroll = () => {
        setscrollPosition(window.scrollY);
    }

    let renderNavbar = <Navbar />;

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollPosition]);

    scrollPosition > 200 ? renderNavbar = <NavbarDetail /> : renderNavbar = <Navbar />

    return (
        
        <div className={style.container}>
            {/* START NAVBAR */}
            {renderNavbar}
            {/* END NAVBAR */}
                
            {/* START ARTICLE     */}
            <section className={style.article}>
                <h1>Indonesia calls for international support to resolve Israel-Palestine crisis</h1>
                <p className={style.subtitle}>Indonesia has reiterated its call for international leaders' support to end violence during and ahead of international forums that seek to resolve the Israeli-Palestinian conflict. "Indonesia strongly condemns Israel’s attacks, which have resulted in the loss of hundreds of lives, including women and children. Israel's aggression must be put to a stop," President Joko "Jokowi" Widodo said on Twitter on Saturday.
                </p>
                <div className={style.image}>
                    <img src="https://mojok.co/wp-content/uploads/2019/06/menangis-laki-laki.jpg" alt="TITLE" />
                </div>
                <div className={style.info}>
                    <Link to="#">Sabrina Muhammad Sholihin</Link>
                    <span>11 Januari 2021</span>
                    <Link to="#">General</Link>
                </div>

                <p>Indonesia has reiterated its call for international leaders' support to end violence during and ahead of international forums that seek to resolve the Israeli-Palestinian conflict.</p>

                <p>"Indonesia strongly condemns Israel’s attacks, which have resulted in the loss of hundreds of lives, including women and children. Israel's aggression must be put to a stop," President Joko "Jokowi" Widodo said on Twitter on Saturday</p>

                <p>Indonesia has reiterated its call for international leaders' support to end violence during and ahead of international forums that seek to resolve the Israeli-Palestinian conflict.

                    "Indonesia strongly condemns Israel’s attacks, which have resulted in the loss of hundreds of lives, including women and children. Israel's aggression must be put to a stop," President Joko "Jokowi" Widodo said on Twitter on Saturday

                    Jokowi has been urging the United Nations Security Council, which was due to meet on Sunday, to take measures against what he described as repeated violations carried out by Israel, saying on Monday that Indonesia would continue to stand with the people of Palestine.

                    Foreign Minister Retno Marsudi attended an emergency meeting of the Organization of Islamic Cooperation (OIC) on Sunday evening, in which she tried to push the OIC to have a stronger stance on ending the violence

                    “We are focusing on gaining international support so we can put huge pressure on Israel to stop the violence,” Abdul Kadir Jailani, director general for Asia Pacific and Africa, who accompanied Retno at the OIC meeting, told The Jakarta Post on Sunday.

                    The tensions between Israel and Palestine drew international outcry after the severe escalation of violence in Gaza and East Jerusalem. Israeli air strikes on the Gaza Strip killed eight children and demolished a building housing media offices, sparking international outcry.

                    Before the OIC meeting, Retno reached out to several counterparts, such as the foreign ministers of Egypt, Malaysia and Brunei, regarding this issue.

                    At the OIC meetings, Indonesia proposed three key points to resolve the conflict, including the need to unite support for Palestinian independence.

                    Retno also suggested that each country use its influence to encourage a ceasefire and that the OIC has to work harder to restart credible multilateral negotiations.

                    “Together we have to act now. The Palestinian people deserve justice. And I emphasize that Indonesia will continue to support the Palestinian struggle,” she told a press conference on the sidelines of the OIC meeting.

                    Later on Sunday, in a statement issued after the emergency meeting, the OIC condemned "in the strongest terms Israel's brutal aggression" against the Palestinian people. The statement, carried by Saudi state media, called for an immediate halt to the attacks on civilians, saying they were "a violation of international law and the UN resolutions", Reuters reported.
                </p>

                <hr></hr>

                <span className={style.writer}>
                    By <Link to="#">Alexander Christian Hutabarat</Link>
                </span>
                <Link className={style.read_original} to="#">Read in Original Source</Link>
            </section>
            {/* END ARTICLE */}

            {/* START MORE */}
            <section className={style.more}>
                <p className={style.title}>More in General</p>
                <div className={style.flex}>
                <NewsCard width={{width: "20%"}} />
                <NewsCard width={{width: "20%"}} />
                <NewsCard width={{width: "20%"}} />
                <NewsCard width={{width: "20%"}} />
                <NewsCard width={{width: "20%"}} />
                </div>
                
            </section>
            {/* END MORE */}

            {/* START LATEST */}
            <section className={style.latest}></section>
            {/* END LATEST */}

            {/* START SHUFFLE */}
            <section className={style.shuffle}>
                <p className={style.title}>Shuffle This Week</p>
                <Shuffle/>
            </section>
            {/* END SHUFFLE */}
        </div>
    )
}

export default Detail;