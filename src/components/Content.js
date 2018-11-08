import React from 'react'
import {Breadcrumb} from 'office-ui-fabric-react/lib/Breadcrumb'
import '../styles/Content.css'

class Content extends React.Component {
 
  render() {
    const {breadcrumbs, maxBreadcrumbs} = this.props
    return (
      <div className="container">
        <Breadcrumb className="breadcrumbs" items={breadcrumbs}
          maxDisplayedItems={maxBreadcrumbs}
        />
        
          {/* File content */}
        <div className="selection">
          <h1>File is previewed here</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <img src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png" alt="demo 1"/>
          <img src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png" alt="demo 2"/>
         
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <img src="https://cdn-images-1.medium.com/max/1600/1*wjlfZatDlTnqfgYJ9iKnKQ.png" alt="demo 3"/>
          {/* <img src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png" alt="demo 4"/> */}

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <img src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png" alt="demo 1"/>
          <img src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png" alt="demo 2"/>
        </div>
      </div>
    )
  }
}
  // For file navigations and current file link info
Content.defaultProps = {
  maxBreadcrumbs: 3,
  breadcrumbs: [
    {text: 'File 1 of Doc 1', 'key': 'doc 1', href : '/doc1file1'},
    {text: 'File 2 of Doc 1', 'key': 'doc 2', href : '/doc1file2'},
    {text: 'File 3 of Doc 1', 'key': 'doc 3', href : '/doc1file3'},
    {text: 'File 4 of Doc 1', 'key': 'doc 4', href : '/doc1file4'},
    {text: 'File 5 of Doc 1', 'key': 'doc 5', href : '/doc1file5'},
    {text: 'File 6 of Doc 1', 'key': 'doc 6', href : '/doc1file6'},

    {text: 'File 1 of Doc 2', 'key': 'doc 11', href : '/file1'},
    {text: 'File 2 of Doc 2', 'key': 'doc 12', href : '/file1'},
    {text: 'File 3 of Doc 2', 'key': 'doc 13', href : '/file1'},
    {text: 'File 4 of Doc 2', 'key': 'doc 14', href : '/file1'},
    {text: 'File 5 of Doc 2', 'key': 'doc 15', href : '/file1'},

    {text: 'Document 2', 'key': 'docu 4', href : '/file1'},
    {text: 'File 32', 'key': 'f1', href : '/file1'},  
    {text: 'Quotation file(fn)', 'key': 'f4', href : '/file1'},
  ],
  
}

export default Content