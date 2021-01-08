import instaIcon from "../../images/vector/instagram-icon.svg";
import linkeIcon from "../../images/vector/linkedin-icon.svg";
import ytbIcon from "../../images/vector/youtube-icon.svg";

import "./index.css";

function Footer() {
  return (
    <footer className='footer'>
      <h4>
        App desenvolvido durante a 2ª ed. do evento{" "}
        <span>Semana DevSuperior</span>
      </h4>
      <div className='social-networks'>
        <a
          href='https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img src={ytbIcon} alt='icone youtube' />
        </a>
        <a
          href='https://www.linkedin.com/company/devsuperior/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BubOo3ikATrSyaimKWdu7OQ%3D%3D'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img src={linkeIcon} alt='icone linkedin' />
        </a>
        <a
          href='https://www.instagram.com/devsuperior.ig/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img src={instaIcon} alt='icone instagram' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
