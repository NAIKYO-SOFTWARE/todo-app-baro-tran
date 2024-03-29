import { InputHTMLAttributes } from "react";
import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

interface InputProps extends InputHTMLAttributes<any>{
}

function Input(props : InputProps) {
  
  return (
    <div className={cx("input")}>
      <input
       {...props}
      />
    </div>
  );
}

export default Input;

//style={{backgroundColor: color}
