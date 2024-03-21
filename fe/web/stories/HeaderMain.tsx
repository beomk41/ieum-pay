import SettingIcon from './icons/SettingIcon';
import classes from './HeaderMain.module.scss';
import Link from 'next/link';
function Logo() {
  return (
    <svg
      width="138"
      height="21"
      viewBox="0 0 138 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.28 1.336H38.76V19H35.28V1.336ZM40.9191 1.336H52.9671V4.696H44.3991V8.464H51.9831V11.824H44.3991V15.64H53.3031V19H40.9191V1.336ZM57.6234 12.472C57.6234 13.032 57.7914 13.568 58.1274 14.08C58.4634 14.592 58.9034 15.008 59.4474 15.328C60.0074 15.648 60.6154 15.808 61.2714 15.808C61.9914 15.808 62.6314 15.648 63.1914 15.328C63.7514 15.008 64.1914 14.592 64.5114 14.08C64.8474 13.568 65.0154 13.032 65.0154 12.472V1.336H68.4474V12.544C68.4474 13.84 68.1274 14.992 67.4874 16C66.8474 16.992 65.9834 17.776 64.8954 18.352C63.8074 18.912 62.5994 19.192 61.2714 19.192C59.9594 19.192 58.7594 18.912 57.6714 18.352C56.5994 17.776 55.7434 16.992 55.1034 16C54.4634 14.992 54.1434 13.84 54.1434 12.544V1.336H57.6234V12.472ZM70.2441 19V0.615999H70.2681L80.0841 14.536L78.5961 14.2L88.3881 0.615999H88.4361V19H84.9561V8.464L85.1721 10.264L79.1961 18.76H79.1481L73.0041 10.264L73.6041 8.608V19H70.2441ZM101.359 1.336C102.815 1.336 104.047 1.584 105.055 2.08C106.063 2.56 106.831 3.248 107.359 4.144C107.887 5.024 108.151 6.072 108.151 7.288C108.151 8.008 108.039 8.736 107.815 9.472C107.607 10.192 107.263 10.848 106.783 11.44C106.319 12.032 105.687 12.512 104.887 12.88C104.103 13.232 103.135 13.408 101.983 13.408H99.4866V19H96.0066V1.336H101.359ZM101.959 10.024C102.487 10.024 102.927 9.936 103.279 9.76C103.631 9.568 103.903 9.336 104.095 9.064C104.303 8.776 104.447 8.48 104.527 8.176C104.623 7.872 104.671 7.608 104.671 7.384C104.671 7.208 104.639 6.976 104.575 6.688C104.527 6.384 104.415 6.08 104.239 5.776C104.063 5.472 103.791 5.216 103.423 5.008C103.071 4.8 102.591 4.696 101.983 4.696H99.4866V10.024H101.959ZM105.091 19L113.059 0.639999H113.251L121.219 19H117.187L112.099 6.088L114.619 4.36L108.523 19H105.091ZM110.539 12.616H115.843L117.067 15.544H109.459L110.539 12.616ZM123.564 13.504L117.06 1.336H121.356L125.916 10.504L124.884 10.576L129.372 1.336H133.668L127.044 13.504V19H123.564V13.504Z"
        fill="#595959"
      />
      <path
        d="M9.51009 10.8333C9.51009 8.76498 10.1972 6.7552 11.4634 5.1197C12.7296 3.4842 14.5032 2.31563 16.5056 1.79754C18.508 1.27945 20.6258 1.4412 22.5263 2.25737C24.4269 3.07354 26.0024 4.4979 27.0056 6.30672C28.0087 8.11554 28.3826 10.2063 28.0685 12.2507C27.7544 14.2951 26.7701 16.1772 25.2702 17.6015C23.7703 19.0257 21.8398 19.9114 19.7819 20.1194C17.7241 20.3274 15.6554 19.8459 13.9009 18.7505L18.8434 10.8333L9.51009 10.8333Z"
        fill="#D6B7FE"
      />
      <path
        d="M18.8434 10.8333C18.8434 12.8999 18.1575 14.9081 16.8933 16.5429C15.6291 18.1777 13.8581 19.3467 11.858 19.8665C9.85784 20.3864 7.74174 20.2277 5.84149 19.4154C3.94124 18.6031 2.36432 17.1831 1.35802 15.3781C0.351719 13.5731 -0.0270522 11.4851 0.281103 9.44161C0.589259 7.39813 1.56691 5.5147 3.06075 4.08669C4.5546 2.65868 6.48014 1.76684 8.53543 1.55103C10.5907 1.33522 12.6595 1.80764 14.4174 2.89422L9.51009 10.8333H18.8434Z"
        fill="url(#paint0_linear_844_4095)"
      />
      <path
        d="M9.51009 10.8333C9.51009 9.23788 9.91908 7.66906 10.698 6.27666C11.4769 4.88427 12.5998 3.71479 13.9594 2.8799C15.3189 2.04501 16.8698 1.57258 18.464 1.50772C20.0581 1.44286 21.6423 1.78773 23.0652 2.50941L18.8434 10.8333L9.51009 10.8333Z"
        fill="#D6B7FE"
      />
      <defs>
        <linearGradient
          id="paint0_linear_844_4095"
          x1="4.10658"
          y1="3.71053"
          x2="14.4224"
          y2="17.4649"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7835F9" />
          <stop offset="1" stop-color="#C576F5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
function HeaderMain() {
  return (
    <header className={classes.container}>
      <Link href="/">
        <Logo />
      </Link>
      <Link href="/setting">
        <SettingIcon />
      </Link>
    </header>
  );
}
export default HeaderMain;