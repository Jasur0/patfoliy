import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__email">
          <input type="text" placeholder="Ism" />
          <input type="text" placeholder="Familiya" />
          <input type="email" placeholder="Sizning elektiron manzilingiz" />
          <button>Xabaringizni yuboring</button>
        </div>
        <textarea
          className="footer__coment"
          rows="6"
          placeholder="Xabaringiz"
          required
        ></textarea>
      </div>
    </footer>
  );
}

export default Footer;
