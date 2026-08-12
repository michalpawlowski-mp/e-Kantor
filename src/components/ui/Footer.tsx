const Footer = () => {
  return (
    <footer>
      <p>
        Kursy walut pochodzą z
        <a
          href="https://api.nbp.pl"
          className="nbp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Narodowego Banku Polskiego
        </a>
        i są odświeżane raz na dobę.
      </p>
      <p className="footer-author">© {new Date().getFullYear()} Michał Pawłowski</p>
    </footer>
  );
};

export default Footer;
