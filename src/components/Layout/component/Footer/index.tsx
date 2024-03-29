import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import ButtonCircle from '../../../ButtonCircle'

const cx = classNames.bind(styles)

export default function Footer() {
  return (
    <div className={cx("wrapper")}>
        <ButtonCircle  >
          <img src='/footerImages/calendar_month.png' alt='' />
        </ButtonCircle>
        <ButtonCircle >
          <img src='/footerImages/checklist.png' alt='' />
        </ButtonCircle>
        <ButtonCircle >
          <img src='/footerImages/person.png' alt='' />
        </ButtonCircle>
    </div>
  )
}
