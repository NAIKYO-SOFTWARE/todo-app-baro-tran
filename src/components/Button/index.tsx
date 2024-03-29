import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

interface ButtonProps {
  to?: string;
  children: React.ReactNode;
  primary?: boolean;
  btn?: boolean;
  onClick?: () => void
}

function Button({ to, children, primary, btn ,onClick }: ButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  const classes = cx("wrapper", { primary, btn });
  if (to) {
    return (
      <Link className={classes} to={to}>
        <span>{children}</span>
      </Link>
    );
  }
  return (
    <button className={classes} onClick={handleClick}>
      <span>{children}</span>
    </button>
  );
}

export default Button;

//style={{backgroundColor: color}
