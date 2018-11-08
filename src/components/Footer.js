import React from 'react'
import {Button} from 'office-ui-fabric-react/lib/Button'
import '../styles/Footer.css'

const Footer = () => (
  
  <div className="footer-container">
      <Button className="prevbtn"><i className="fa fa-arrow-left"></i>  VIEW PREVIOUS PAGE</Button>
      <Button className="approve"><i className="fa fa-check"></i>  APPROVE FILE</Button>
      <Button className="reject"><i className="fa fa-times"></i>  REJECT FILE</Button>
  </div>
  
)
export default Footer
