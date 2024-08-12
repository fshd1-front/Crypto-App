import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Crypto App</h1>
        <p>
          <a href="#">Tarak</a> | React.js
        </p>
      </header>
      {children}
      <footer>
        <p>Developed by Farshad with 💓</p>
      </footer>
    </>
  );
};

export default Layout;
