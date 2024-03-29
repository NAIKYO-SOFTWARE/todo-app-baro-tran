import classNames from 'classnames/bind'
import styles from './DayBox.module.scss'

const cx = classNames.bind(styles)

export default function DayBox() {
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat']

  // Lấy ngày hiện tại
  const today = new Date()

  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("title")}>Today</h3>
      <div className={cx('container')}>
        {daysOfWeek.map((day, index) => {
          const currentDay = new Date(today)
          currentDay.setDate(today.getDate() + index - today.getDay())

          const formattedDate = currentDay.toLocaleDateString('en-US', {
            weekday: 'short',
            day: '2-digit'
          })

          const dayNumber = formattedDate.split(' ')[0]

          const isCurrentDay = currentDay.toDateString() === today.toDateString()
          //   const classes = cx("wrapper", { primary });
          const classes = isCurrentDay ? '#e67af9' : '#f1c1f8'

          return (
            <div style={{backgroundColor: classes}} className={cx('day-box')} key={index}>
              <div>{day}</div>
              <div style={{width: "20px", height: "20px" ,borderRadius: "999px",backgroundColor:"#fff"}}>{dayNumber}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
