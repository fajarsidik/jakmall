import { Link, useLocation } from "react-router-dom";
export const Tabs = () => {
  const location = useLocation();
  return (
    <div className={"layout layout--tabs"}>
      <div className={"tabs-wrapper"}>
        <Link to={"/delivery"}>
          <a className={location.pathname === '/delivery' || location.pathname === '/payment' || location.pathname === '/finish'? 'active' : ''}>
            <span className={"step"}>1</span> Delivery
            <span className={"ml-3 material-symbols-rounded"}>
              chevron_right
                      </span>
          </a>
        </Link>

        <Link to={"/payment"}>
          <a className={location.pathname === '/payment' || location.pathname === '/finish'? 'active' : ''}>
            <span className={"step"}>2</span> Payment
            <span className={"ml-3 material-symbols-rounded"}>
              chevron_right
            </span>
          </a>
        </Link>
        <Link to={"/finish"}>
          <a className={location.pathname === '/finish' ? 'active' : ''}>
            <span className={"step"}>3</span> Finish
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Tabs;
