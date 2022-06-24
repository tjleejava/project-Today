import FooterCSS from './Footer.module.css';

function Footer() {
  
  return (
    <div className={ FooterCSS.area }>
      <span className= { FooterCSS.copyright}>
        © 2022. 오늘하루. All Rights Reserved.
      </span>
      <span className= { FooterCSS.qna}>
        1:1 플랫폼 문의
      </span>
    </div>
  );
}

export default Footer;