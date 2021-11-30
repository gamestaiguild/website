import logo2 from "../assets/logo2.png";

const Header = (props) => {
  const { scrollState, setWalletModal } = props;
  return (
    <div style={{ position: "fixed", width: "100%", zIndex: 10 }}>
      <header className={`header ${scrollState && `backdrop-effect`}`}>
        <div className="header-content responsive-wrapper">
          <div className="header-logo">
            <a href="#">
              <div>
                <img src={logo2} />
              </div>
              {/* Binamon */}
            </a>
          </div>
          <div className="header-navigation">
            <nav className="header-navigation-links"></nav>
            <div className="header-navigation-actions">
              <a
                href="#"
                className="button"
                onClick={() => {
                  setWalletModal(true);
                }}
              >
                <i className="ph-lightning-bold">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 34 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.0833 24.5001H9.91667C8.41377 24.5001 6.97243 24.0084 5.90973 23.1332C4.84702 22.2581 4.25 21.0711 4.25 19.8334V12.8334C4.25 11.5957 4.84702 10.4088 5.90973 9.53358C6.97243 8.65841 8.41377 8.16675 9.91667 8.16675H24.0833C25.5862 8.16675 27.0276 8.65841 28.0903 9.53358C29.153 10.4088 29.75 11.5957 29.75 12.8334V19.8334C29.75 21.0711 29.153 22.2581 28.0903 23.1332C27.0276 24.0084 25.5862 24.5001 24.0833 24.5001ZM9.91667 10.5001C9.16522 10.5001 8.44455 10.7459 7.9132 11.1835C7.38184 11.6211 7.08333 12.2146 7.08333 12.8334V19.8334C7.08333 20.4523 7.38184 21.0457 7.9132 21.4833C8.44455 21.9209 9.16522 22.1667 9.91667 22.1667H24.0833C24.8348 22.1667 25.5554 21.9209 26.0868 21.4833C26.6182 21.0457 26.9167 20.4523 26.9167 19.8334V12.8334C26.9167 12.2146 26.6182 11.6211 26.0868 11.1835C25.5554 10.7459 24.8348 10.5001 24.0833 10.5001H9.91667Z"
                      fill="#D0CECE"
                    />
                    <path
                      d="M5.66667 15.1667C5.29094 15.1667 4.93061 15.0438 4.66493 14.825C4.39926 14.6062 4.25 14.3094 4.25 14V4.66667C4.25 4.35725 4.39926 4.0605 4.66493 3.84171C4.93061 3.62292 5.29094 3.5 5.66667 3.5H12.75C12.9718 3.5011 13.1901 3.54505 13.3875 3.62833L24.7208 8.295C25.0273 8.44688 25.2527 8.68862 25.3517 8.97168C25.4508 9.25475 25.4161 9.55819 25.2547 9.82107C25.0933 10.084 24.8171 10.2868 24.4816 10.389C24.1461 10.4911 23.776 10.4849 23.4458 10.3717L12.41 5.83333H7.08333V14C7.08333 14.3094 6.93408 14.6062 6.6684 14.825C6.40272 15.0438 6.04239 15.1667 5.66667 15.1667Z"
                      fill="#D0CECE"
                    />
                  </svg>
                </i>
                <span>Connect Wallet</span>
              </a>
            </div>
          </div>
          <a
            href="#"
            className="button"
            onClick={() => {
              setWalletModal(true);
            }}
          >
            <i className="ph-list-bold"></i>
            <span>Connect</span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
