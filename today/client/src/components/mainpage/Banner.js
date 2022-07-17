import BannerCSS from './Banner.module.css';

function Banner() {
  return (
    <div className={ BannerCSS.area }>
      <img src='/images/banner/banner.png' />
    </div>
  );
}

export default Banner;