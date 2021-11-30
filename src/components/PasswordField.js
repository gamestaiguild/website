const PasswordField = (props) => {
  const { setEyeStatus, eyeStatus } = props;
  return (
    <div className="container">
      <div className="account-header">
        <div className="account-header-intro">
          <div className="section-text">
            <p>
              Game Password
              <div className="tooltipCSS">
                <svg
                  className="tooltipCSS"
                  width="24"
                  height="27"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 5.04603C7.58172 5.04603 4 8.91131 4 13.6794C4 18.4474 7.58172 22.3127 12 22.3127C16.4183 22.3127 20 18.4474 20 13.6794C20 8.91131 16.4183 5.04603 12 5.04603ZM2 13.6794C2 7.71929 6.47715 2.8877 12 2.8877C17.5228 2.8877 22 7.71929 22 13.6794C22 19.6394 17.5228 24.471 12 24.471C6.47715 24.471 2 19.6394 2 13.6794Z"
                    fill="#B0B0B0"
                    fill-opacity="0.5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 11.521C12.5523 11.521 13 12.0042 13 12.6002V19.0752C13 19.6712 12.5523 20.1544 12 20.1544C11.4477 20.1544 11 19.6712 11 19.0752V12.6002C11 12.0042 11.4477 11.521 12 11.521Z"
                    fill="#B0B0B0"
                    fill-opacity="0.5"
                  />
                  <path
                    d="M13.5 8.82311C13.5 9.71713 12.8284 10.4419 12 10.4419C11.1716 10.4419 10.5 9.71713 10.5 8.82311C10.5 7.9291 11.1716 7.20436 12 7.20436C12.8284 7.20436 13.5 7.9291 13.5 8.82311Z"
                    fill="#B0B0B0"
                    fill-opacity="0.5"
                  />
                </svg>
                <span className="tooltiptext tooltipRight">
                  Here you’ll be able to: View,copy,manage account password, the
                  account password will be use to enter the game
                </span>
              </div>
            </p>
          </div>
        </div>
      </div>

      <ul className="some-list" style={{ maxWidth: `1200px` }}>
        <li className="some-list-item first-item">
          <div className="input-password input" id="show_hide_password">
            <input
              type="password"
              name="password"
              placeholder="Gaming Password"
              className="password"
              id="password"
              required="required"
              autocomplete="off"
              value="5GMSOWM2O92MXX2JMMKLL"
              readOnly
              // id="copy-text"
            />
            <i
              className="pas-icon"
              id="password_icon"
              onClick={() => {
                setEyeStatus(!eyeStatus);
              }}
            >
              {eyeStatus ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 24C30 27.3137 27.3137 30 24 30C20.6863 30 18 27.3137 18 24C18 20.6863 20.6863 18 24 18C27.3137 18 30 20.6863 30 24Z"
                    fill="#999999"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M43.7889 23.1056C39.4724 14.4727 31.8063 10 24 10C16.1937 10 8.52758 14.4727 4.21115 23.1056C3.92962 23.6686 3.92962 24.3314 4.21115 24.8944C8.52758 33.5273 16.1937 38 24 38C31.8063 38 39.4724 33.5273 43.7889 24.8944C44.0704 24.3314 44.0704 23.6686 43.7889 23.1056ZM24 34C18.0624 34 11.9961 30.7584 8.25932 24C11.9961 17.2416 18.0624 14 24 14C29.9376 14 36.0039 17.2416 39.7407 24C36.0039 30.7584 29.9376 34 24 34Z"
                    fill="#999999"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.41421 6.58579C8.63317 5.80474 7.36684 5.80474 6.58579 6.58579C5.80474 7.36683 5.80474 8.63317 6.58579 9.41421L11.4341 14.2625C8.57279 16.4147 6.0785 19.3709 4.21115 23.1056C3.92962 23.6686 3.92962 24.3314 4.21115 24.8944C8.52758 33.5273 16.1937 38 24 38C27.1103 38 30.1984 37.29 33.0612 35.8896L38.5858 41.4142C39.3668 42.1953 40.6332 42.1953 41.4142 41.4142C42.1953 40.6332 42.1953 39.3668 41.4142 38.5858L9.41421 6.58579ZM30.0275 32.856L26.5868 29.4153C25.8036 29.7901 24.9263 30 24 30C20.6863 30 18 27.3137 18 24C18 23.0737 18.2099 22.1964 18.5847 21.4132L14.2968 17.1252C11.9756 18.7588 9.89442 21.0427 8.25932 24C11.9961 30.7584 18.0624 34 24 34C26.0268 34 28.0685 33.6223 30.0275 32.856Z"
                    fill="#999999"
                  />
                  <path
                    d="M37.1046 27.791C38.0706 26.6803 38.9569 25.4175 39.7406 24C36.0038 17.2416 29.9375 14 23.9999 14C23.7759 14 23.5517 14.0046 23.3275 14.0139L19.7588 10.4452C21.1548 10.149 22.575 10 23.9999 10C31.8062 10 39.4723 14.4727 43.7888 23.1056C44.0703 23.6686 44.0703 24.3314 43.7888 24.8944C42.7008 27.0703 41.4001 28.982 39.9379 30.6243L37.1046 27.791Z"
                    fill="#999999"
                  />
                </svg>
              )}
            </i>

            <i className="copy-icon" id="copy">
              <svg
                width="24"
                height="24"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.761383 3.52114C0.761383 1.77872 2.16272 0.366211 3.89136 0.366211H19.5412C21.2699 0.366211 22.6712 1.77872 22.6712 3.52114V9.831H28.9312C30.6598 9.831 32.0611 11.2435 32.0611 12.9859V28.7606C32.0611 30.503 30.6598 31.9155 28.9312 31.9155H13.2813C11.5526 31.9155 10.1513 30.503 10.1513 28.7606V22.4507H3.89136C2.16272 22.4507 0.761383 21.0382 0.761383 19.2958V3.52114ZM13.2813 22.4507V28.7606H28.9312V12.9859H22.6712V19.2958C22.6712 21.0382 21.2699 22.4507 19.5412 22.4507H13.2813ZM19.5412 19.2958H3.89136V3.52114L19.5412 3.52114V19.2958Z"
                  fill="#626262"
                />
              </svg>
              <span className="done" aria-hidden="true">
                Copied
              </span>
            </i>
          </div>
        </li>
        <li className="some-list-item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=com.Binamon.Runner&hl=en_US"
            className="some-list-link"
          >
            <button className="play-button">
              <i>
                <svg
                  width="23"
                  height="27"
                  viewBox="0 0 23 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_151:62)">
                    <path
                      d="M12.906 13.1506L15.4189 10.1938L4.99197 3.42052C4.84374 3.32404 4.7001 3.25929 4.56378 3.22266L12.906 13.1506Z"
                      fill="#BCBCBC"
                    />
                    <path
                      d="M15.7835 16.575L18.935 14.5279C19.8029 13.9642 19.8029 13.0416 18.935 12.478L15.8769 10.4912L13.2594 13.571L15.7835 16.575Z"
                      fill="#BCBCBC"
                    />
                    <path
                      d="M3.91658 3.2937C3.60802 3.48021 3.41406 3.90413 3.41406 4.51236V22.4934C3.41406 23.107 3.61147 23.5335 3.92505 23.7173L12.5504 13.5688L3.91658 3.2937Z"
                      fill="#BCBCBC"
                    />
                    <path
                      d="M12.9039 13.9895L4.5849 23.7775C4.71493 23.7398 4.85137 23.6767 4.99192 23.5853L15.3262 16.8723L12.9039 13.9895Z"
                      fill="#BCBCBC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_151:62">
                      <rect width="23" height="27" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
              Play
            </button>
          </a>
        </li>
        <li className="some-list-item">
          <a href="#" className="some-list-link">
            <button className="play-button">
              <i>
                <svg
                  width="34"
                  height="10"
                  viewBox="0 0 34 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.0436 1.00003C14.8346 0.975963 13.0243 2.74721 13.0003 4.95622C12.9762 7.16523 14.7474 8.97549 16.9565 8.99955C19.1655 9.02361 20.9757 7.25237 20.9998 5.04336C21.0238 2.83435 19.2526 1.02409 17.0436 1.00003Z"
                    fill="#999999"
                  />
                  <path
                    d="M29.0429 1.13073C26.8339 1.10667 25.0236 2.87792 24.9995 5.08693C24.9755 7.29594 26.7467 9.1062 28.9557 9.13026C31.1648 9.15432 32.975 7.38307 32.9991 5.17406C33.0231 2.96506 31.2519 1.1548 29.0429 1.13073Z"
                    fill="#999999"
                  />
                  <path
                    d="M5.0443 0.869319C2.8353 0.845256 1.02503 2.6165 1.00097 4.82551C0.97691 7.03452 2.74816 8.84478 4.95717 8.86885C7.16617 8.89291 8.97644 7.12166 9.0005 4.91265C9.02456 2.70364 7.25331 0.893381 5.0443 0.869319Z"
                    fill="#999999"
                  />
                </svg>
              </i>
            </button>
          </a>
        </li>
      </ul>

      <span className="hint">
        By clicking the <span className="highlight">Copy</span> button, you will
        able to copy the password to your clipboard
      </span>
    </div>
  );
};

export default PasswordField;
