import classNames from "classnames/bind";
import styles from "./Page.module.scss";
import Button from "../../components/Button";
import { DiApple } from "react-icons/di";
import { DiIe } from "react-icons/di";
import { DiChrome } from "react-icons/di";
import { useAppSelector } from "../../redux/hooks";

const cx = classNames.bind(styles);
interface RootState {
  login: {
    email: string;
    password: string;
  };
}
function Page() {
  const user = useAppSelector((state: RootState) => state.login);
  return (
    <div className={cx("wrapper-page")}>
      <div className={cx("title")}>
        <p>{user.email} </p>
        <p>{user.password} </p>

        <p className={cx("text")}>
          Do your <br />
          tasks <br />
          quickly <br />
          and easy
        </p>
        <p>Your tasks, your rules, our support</p>
      </div>
      <div className={cx("content")}>
        <Button to="/login" primary>
          Login
        </Button>
        <Button to="#">Create an account</Button>
        <div className={cx("line")}>
          <p></p>
          <span>OR</span>
          <p></p>
        </div>
        
        <div className={cx("icon")}>
          <span>
            <DiChrome />
          </span>
          <span>
            <DiApple />
          </span>
          <span>
            <DiIe />
          </span>
        </div>

      </div>
    </div>
  );
}

export default Page;
