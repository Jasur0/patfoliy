import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <form className="container">
        <div className="footer__email">
          <input type="text" placeholder="Ism" required />
          <input type="text" placeholder="Familiya" required />
          <input
            type="email"
            placeholder="Sizning elektiron manzilingiz"
            required
          />
          <button>Xabaringizni yuboring</button>
        </div>
        <textarea
          className="footer__coment"
          rows="6"
          placeholder="Xabaringiz"
          required
        ></textarea>
      </form>
    </footer>
  );
}

export default Footer;
