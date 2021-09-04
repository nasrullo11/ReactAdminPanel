import "./widgetsm.css"
import {Visibility} from '@material-ui/icons'

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
          <li className="widgetSmListItem">
              <img src="https://i.pinimg.com/originals/9b/d5/6b/9bd56bbd3a34c9e61782125a24323cb1.jpg" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
              </button>
          </li>
          <li className="widgetSmListItem">
              <img src="https://i.pinimg.com/originals/9b/d5/6b/9bd56bbd3a34c9e61782125a24323cb1.jpg" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
              </button>
          </li>
          <li className="widgetSmListItem">
              <img src="https://i.pinimg.com/originals/9b/d5/6b/9bd56bbd3a34c9e61782125a24323cb1.jpg" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
              </button>
          </li>
          <li className="widgetSmListItem">
              <img src="https://i.pinimg.com/originals/9b/d5/6b/9bd56bbd3a34c9e61782125a24323cb1.jpg" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
              </button>
          </li>
          <li className="widgetSmListItem">
              <img src="https://i.pinimg.com/originals/9b/d5/6b/9bd56bbd3a34c9e61782125a24323cb1.jpg" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
              </button>
          </li>
      </ul> 
    </div>
  )
}

export default WidgetSm
