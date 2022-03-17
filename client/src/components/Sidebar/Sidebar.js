import "./Sidebar.css";
import LineStyle from '@material-ui/icons/LineStyle';
import Inventory from '@mui/icons-material/Inventory';
import AccountCircleIcon from '@material-ui/icons/AccountCircleRounded';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <AccountCircleIcon className="sidebarIcon"/>
                            Account
                        </li>
                        <li className="sidebarListItem">
                            <Inventory className="sidebarIcon"/>
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/>
                            Orders
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
