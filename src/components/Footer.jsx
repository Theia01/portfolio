function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <nav>
        <h6 className="footer-title">Créations</h6>
        <a className="link link-hover">Site web</a>
        <a className="link link-hover">Application mobile</a>
      </nav>
      <nav>
        <h6 className="footer-title">Sur moi</h6>
        <a className="link link-hover">Parcours</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <a className="link link-hover">Linkedin</a>
        <a className="link link-hover">GitHub</a>
      </nav>
    </footer>
  );
}

export default Footer;
