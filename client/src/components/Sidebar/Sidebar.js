import "./Sidebar.css";
import LineStyle from '@material-ui/icons/LineStyle';
import Inventory from '@mui/icons-material/Inventory';
import AccountCircleIcon from '@material-ui/icons/AccountCircleRounded';
import { Link } from 'react-router-dom';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="brand">Dashboard</div>
            <div className="links">
                <ul>
                    <li className="sidebarListItem">
                        <AccountCircleIcon className="sidebarIcon"/>
                        <a href='/dashboard' className="sidebar-link">Account</a>
                    </li>
                </ul>
                <ul>
                    <li className="sidebarListItem">
                        <Inventory className="sidebarIcon"/>
                        <a href='/dashboard/orders' className="sidebar-link">Orders</a>
                    </li>
                </ul>
                <ul>
                    <li className="sidebarListItem">
                        <LineStyle className="sidebarIcon"/>
                        <a href='/dashboard/products' className="sidebar-link">Products</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}


       // // <div className="sidebar">
       // //      <div className="sidebarWrapper">
       // //          <div className="sidebarMenu">
       // //              <h3 className="sidebarTitle">Dashboard</h3>
       // //              <ul className="sidebarList">
       //                  <li className="sidebarListItem active">
       //                      <AccountCircleIcon className="sidebarIcon"/>
       //                      <span>Account</span>
       //                  </li>
       // //                  <li className="sidebarListItem">
       // //                      <Inventory className="sidebarIcon"/>
       // //                      <span>Products</span>
       // //                  </li>
       // //                  <li className="sidebarListItem">
       // //                      <LineStyle className="sidebarIcon"/>
       // //                      <span>Orders</span>
       // //                  </li>
       // //              </ul>
       // //          </div>
       // //      </div>
       // //  </div>