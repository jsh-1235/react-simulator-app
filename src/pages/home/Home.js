import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../../redux/user";
import { changeColor } from "../../redux/theme";

import styles from "./Home.module.css";
import "../../Components.css";
import { AiFillQuestionCircle } from "react-icons/ai";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(window.history);

    return () => {};
  }, []);

  const handleAbout = (e) => {
    e.preventDefault();

    // navigate("/about");
    navigate("/about", { replace: true }); // REPLACE, redirect

    // window.open("about:blank", "_self");
    // window.close();
  };

  const handleLogin = (e) => {
    console.log(e.target.dataset);

    dispatch(login({ name: "jsh", age: 41, email: "jsh@naver.com" }));

    dispatch(changeColor("blue"));
  };

  const handleLogout = (e) => {
    console.log(e.target.dataset);

    dispatch(logout());

    dispatch(changeColor("green"));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>Select Mode</header>
      <main className={styles.menu}>
        <div className={styles.buttonStyle}>
          <div className="button">
            <div className="button" onClick={(e) => navigate("/ecg")}>
              ACTB
            </div>
          </div>
        </div>
        <div className={styles.buttonStyle}>
          <div className="button" onClick={(e) => navigate("/intro")}>
            ACTB Lite
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <AiFillQuestionCircle data-role="about" className="image-button" size="64" onClick={handleAbout} />
        <AiFillQuestionCircle data-role="login" className="image-button" size="64" onClick={handleLogin} />
        <AiFillQuestionCircle data-role="logout" className="image-button" size="64" onClick={handleLogout} />
      </footer>
    </div>
  );
}
