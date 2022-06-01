import React , {Component} from 'react'
import IconSwitch from './IconSwitch'
import CardsView from './CardsView'
import ListView from './ListView'

class Store extends Component { 
    
  constructor(props) {
    super(props);
    this.state = {
      icon: "view_list",
    }
  }
  
  selectIcon = () => {
    if (this.state.icon === "view_list"){
      this.setState({icon: "view_module"});
    } else {
      this.setState({icon:"view_list"});
    }
    console.log("Icon selected : ",this.state.icon);
  }
  
  render() {
    return ( 
      <div>
        <IconSwitch icon={this.state.icon} onSwitch={this.selectIcon}/>
          {this.state.icon === "view_module" ? <CardsView products={this.props.products} /> :
        <ListView products={this.props.products} />}
      </div>
      )
    } 
  
  }
  

  export default Store;