import classNames from "classnames/bind";
import styles from "./Transition.module.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

export default function Transition() {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/home")
        },1000)
    },[])
  return (
    <div className={cx("wrapper")}>
      <img src='/Designsem1.png' alt='' />
    </div>
  )
}
