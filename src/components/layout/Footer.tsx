import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-top">
          <div className="f-brand">
            <Link className="logo" to="/"><svg aria-label="FirstData" className="fdlogo" role="img"><use href="#fdlogo" /></svg></Link>
            <p>Regulated, AI-integrated infrastructure for tokenizing real-world assets.</p>
            <div className="f-slogan">Empowering solutions through Data & AI</div>
          </div>
          <div className="f-col"><h5>Company</h5><ul><li><Link to="/about">About</Link></li><li><Link to="/platform">Platform</Link></li><li><Link to="/solutions">Solutions</Link></li><li><Link to="/trust">Trust & Compliance</Link></li><li><Link to="/contact">Contact</Link></li></ul></div>
          <div className="f-col"><h5>Explore</h5><ul><li><Link to="/vision">Vision 2030</Link></li><li><Link to="/owners">For Asset Owners</Link></li><li><Link to="/investors">For Investors</Link></li><li><Link to="/partners">For Partners</Link></li></ul></div>
          <div className="f-col f-contact"><h5>Contact</h5><div>2239 Al Urubah Rd, Al Olaya Dist., 12214 Riyadh, KSA</div><div>info@1stdata.ai</div><div>+966 11 211 1556</div></div>
        </div>
        <div className="f-bottom"><span>© 2026 FirstData Group. All rights reserved.</span><div className="links"><a href="#">Privacy Policy</a><a href="#">Terms</a><a href="#">Cookie Notice</a></div></div>
      </div>
    </footer>
  );
}
