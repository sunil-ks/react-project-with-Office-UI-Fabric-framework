import React from 'react'
import {Button, ButtonType} from 'office-ui-fabric-react/lib/Button'
import '../styles/Footer.css'
import {Dialog, DialogType, DialogFooter} from 'office-ui-fabric-react/lib/Dialog'

class Footer extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
  }

  open = () => this.setState({isOpen: true})

  close = () => this.setState({isOpen: false})
 
  render() {
    
    return (
      <div className="footer-container">
      <Button className="prevbtn"><i className="fa fa-arrow-left"></i>  VIEW PREVIOUS PAGE</Button>
      <Button className="approve" onClick={this.open}><i className="fa fa-check"></i>  APPROVE FILE</Button>
      <Button className="reject" onClick={this.open}><i className="fa fa-times"></i>  REJECT FILE</Button>
              <Dialog
          isOpen={this.state.isOpen}
          type={DialogType.close}
          onDismiss={this.close.bind(this)}
          title='Accept or Reject Confirmation'
          subText='Confirmation Dialogbox'
          isBlocking={false}
          closeButtonAriaLabel='Close'
        >
          <h4>Are you sure on this action ?</h4>
          <DialogFooter>
            <Button buttonType={ButtonType.primary} onClick={this.close}>YES</Button>
            <Button buttonType={ButtonType.primary} onClick={this.close}>NO</Button>
          </DialogFooter>
        </Dialog>
  </div>
  
    )
  }
}

export default Footer
