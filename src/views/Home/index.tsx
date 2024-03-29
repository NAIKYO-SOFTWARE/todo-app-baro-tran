import DayBox from "./DayBox"
import classNames from 'classnames/bind'
import styles from './Home.module.scss'

const cx = classNames.bind(styles)
function Home(){
    return (
        <div className={cx("wrapper")}>
            <div><DayBox/></div>
            <div>

            </div>
            <div className={cx("content")}>
                <img src="./home.png" alt="" />
            </div>
        </div>
    )

}

export default Home