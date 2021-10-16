import "./Sidebar.css"
import {LineStyle, Timeline, TrendingUp, PersonOutline, Storefront, AttachMoney, BarChartOutlined, MailOutlineOutlined, DynamicFeedOutlined, ChatBubbleOutlineOutlined, WorkOutline, Report} from "@material-ui/icons"
import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
      <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon"/>
                Home 
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>
              Sales
            </li>
          </ul>
        </div> 
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/user">
              <li className="sidebarListItem">
                <PersonOutline className="sidebarIcon"/>
                Users
              </li>
            </Link>
            <Link to="/products">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon"/>
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon"/>
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChartOutlined className="sidebarIcon"/>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineOutlined className="sidebarIcon"/>
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeedOutlined className="sidebarIcon"/>
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineOutlined className="sidebarIcon"/>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon"/>
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon"/>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
