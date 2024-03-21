import React from 'react';

/**
 *
 * @param props svg 설정
 * @returns
 */
const EyeFilledIcon = (props: any) => (
  <svg
    width="20"
    height="15"
    viewBox="0 0 20 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 6.81818C1.57273 2.82727 5.45455 0 10 0C12.2072 0 14.2579 0.666626 15.9637 1.80941L13.6557 4.11742C12.8274 2.99853 11.498 2.27273 10 2.27273C7.49091 2.27273 5.45455 4.30909 5.45455 6.81818C5.45455 8.31614 6.18035 9.6456 7.29923 10.4738L5.24551 12.5276C2.86389 11.3479 0.98191 9.30985 0 6.81818ZM6.32551 12.9904C7.47168 13.4083 8.70908 13.6364 10 13.6364C14.5455 13.6364 18.4273 10.8091 20 6.81818C19.3279 5.11263 18.234 3.61961 16.8469 2.46895L14.2111 5.10479C14.4266 5.63365 14.5455 6.21213 14.5455 6.81818C14.5455 9.32727 12.5091 11.3636 10 11.3636C9.39395 11.3636 8.81547 11.2448 8.28661 11.0292L6.32551 12.9904ZM9.77917 9.53669C9.852 9.5425 9.92565 9.54545 10 9.54545C11.5091 9.54545 12.7273 8.32727 12.7273 6.81818C12.7273 6.74383 12.7243 6.67018 12.7185 6.59735L9.77917 9.53669ZM12.3471 5.42601C11.8724 4.6259 11.0001 4.09091 10 4.09091C8.49091 4.09091 7.27273 5.30909 7.27273 6.81818C7.27273 7.81826 7.80772 8.69057 8.60783 9.16526L12.3471 5.42601Z"
      fill="#D6B7FE"
    />
    <line
      x1="16.7172"
      y1="0.353553"
      x2="2.53537"
      y2="14.5354"
      stroke="#D6B7FE"
    />
  </svg>
);

const EyeSlashFilledIcon = (props: any) => (
  <svg
    width="20"
    height="14"
    viewBox="0 0 20 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 0C5.45455 0 1.57273 2.82727 0 6.81818C1.57273 10.8091 5.45455 13.6364 10 13.6364C14.5455 13.6364 18.4273 10.8091 20 6.81818C18.4273 2.82727 14.5455 0 10 0ZM10 11.3636C7.49091 11.3636 5.45455 9.32727 5.45455 6.81818C5.45455 4.30909 7.49091 2.27273 10 2.27273C12.5091 2.27273 14.5455 4.30909 14.5455 6.81818C14.5455 9.32727 12.5091 11.3636 10 11.3636ZM10 4.09091C8.49091 4.09091 7.27273 5.30909 7.27273 6.81818C7.27273 8.32727 8.49091 9.54546 10 9.54546C11.5091 9.54546 12.7273 8.32727 12.7273 6.81818C12.7273 5.30909 11.5091 4.09091 10 4.09091Z"
      fill="#A176F5"
    />
  </svg>
);

export { EyeFilledIcon, EyeSlashFilledIcon };