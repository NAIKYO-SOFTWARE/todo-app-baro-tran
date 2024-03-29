import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import Button from "../../components/Button";
import { DiApple } from "react-icons/di";
import { DiIe } from "react-icons/di";
import { DiChrome } from "react-icons/di";
import Input from "../../components/Input";
import { useState } from "react";
import { loginSaga} from './LoginSlide';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { useSelector } from "react-redux";
const cx = classNames.bind(styles);

interface LoginFormData {
  delay: number;
  email: string;
  password: string;
}
interface RootState {
  login: {
    email: string;
    password: string;
  };
}

function Login() {
  const user = useAppSelector((state: RootState) => state.login);
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState<LoginFormData>({
    delay: 3000,
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleSubmit(){
    dispatch(loginSaga(formData));
  }
  return (
    <div className={cx("wrapper-page")}>
      <div className={cx("container")}>
        <p className={cx("title")}>Log in to HabitHUB</p>
        <p className={cx("text")}>
          Welcome back! Sign in using your social account or email to continue
          us
        </p>
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
        <div className={cx("line")}>
          <p></p>
          <span>OR</span>
          <p></p>
        </div>

        <div>
          <Input
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <Input
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={cx("content")}>
        <div>
          <Button to="/transition" onClick={handleSubmit} primary>
            Login
          </Button>
        </div>
      </div>
      <p>{user.email} </p>
      <p>{user.password} </p>
      
    </div>
  );
}

export default Login;
