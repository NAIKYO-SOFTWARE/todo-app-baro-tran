import classNames from 'classnames/bind'
import styles from './Layout.module.scss'
import Footer from '../component/Footer'

const cx = classNames.bind(styles)

function DefaultLayout({ children, footer }: { children: React.ReactNode, footer?: boolean }) {
  return (
    <div className={cx('wrapper')}>
      <div>{children}</div>
      {footer &&<Footer/>}
    </div>
  )
}

export default DefaultLayout
