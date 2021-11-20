import React, { Component } from 'react'; //different
import './App.css';
    class App extends Component { //different
      constructor(){
        super()
        this.state={
          np:"",
          isValid:false,
          belongsto:"",
        }
      }
      handleOnChange=(e) => {
        const regExq=/^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/
        if(e.target.value.match(regExq)){
          this.setState({
            [e.target.name]:e.target.value,
            isValid:true
          })
        } else {
          this.setState({
          [e.target.name]:e.target.value,
          isValid:false
          })
        }
        const ani=/AN/
        const del=/DL/
        const mah=/MH/
        const cha=/CH/
        const pun=/PB/
        const har=/HR/
        const madp=/MP/
        const utrp=/UP/
        const andrp=/AP/
        const tamnd=/TN/
        const bhr=/BR/
        const arp=/AR/
        const asm=/AS/
        const dd=/DD/
        const chg=/CG/
        const goa=/GA/
        const guj=/GJ/
        const hmp=/HP/
        const jhr=/JH/
        const jak=/JK/
        const kar=/KA/
        const klr=/KL/
        const lad=/LA/
        const lkd=/LD/
        const meg=/ML/
        const mnp=/MN/
        const miz=/MZ/
        const nal=/NL/
        const odh=/OD/
        const pud=/PY/
        const raj=/RJ/
        const skm=/SK/
        const tri=/TR/
        const tel=/TS/
        const utk=/UK/
        const web=/WB/

        if(e.target.value.match(del)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Delhi"
          })
        }
        else if(e.target.value.match(mah)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Maharastra"
          })
        }
        else if(e.target.value.match(cha)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Chandigarh"
          })
        }
        else if(e.target.value.match(pun)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Punjab"
          })
        }
        else if(e.target.value.match(har)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Haryana"
          })
        }
        else if(e.target.value.match(madp)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Madhya Pradesh"
          })
        }
        else if(e.target.value.match(utrp)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Uttar Pradesh"
          })
        }
        else if(e.target.value.match(andrp)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Andhra Pradesh"
          })
        }
        else if(e.target.value.match(tamnd)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Tamil Nadu"
          })
        }
        else if(e.target.value.match(bhr)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Bihar"
          })
        }
        else if(e.target.value.match(chg)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Chhattisgarh"
          })
        }
        else if(e.target.value.match(dd)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Dadar and Nagar Haveli and Daman and Diu"
          })
        }
        else if(e.target.value.match(goa)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Goa"
          })
        }
        else if(e.target.value.match(guj)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Gujarat"
          })
        }
        else if(e.target.value.match(hmp)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Himachal Pradesh"
          })
        }
        else if(e.target.value.match(jhr)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Jharkhand"
          })
        }
        else if(e.target.value.match(ani)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Andaman & Nicobar"
          })
        }
        else if(e.target.value.match(arp)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Arunanchal Pradesh"
          })
        }
        else if(e.target.value.match(asm)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Assam"
          })
        }
        else if(e.target.value.match(jak)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Jammu & Kashmir"
          })
        }
        else if(e.target.value.match(kar)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Karnataka"
          })
        }
        else if(e.target.value.match(klr)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Kerala"
          })
        }
        else if(e.target.value.match(lad)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Ladak"
          })
        }
        else if(e.target.value.match(lkd)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Lakshadweep"
          })
        }
        else if(e.target.value.match(meg)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Meghalaya"
          })
        }
        else if(e.target.value.match(mnp)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Manipur"
          })
        }
        else if(e.target.value.match(miz)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Mizoram"
          })
        }
        else if(e.target.value.match(nal)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Nagaland"
          })
        }
        else if(e.target.value.match(odh)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Odisha"
          })
        }
        else if(e.target.value.match(pud)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Puducherry"
          })
        }
        else if(e.target.value.match(raj)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Rajasthan"
          })
        }
        else if(e.target.value.match(skm)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Sikkim"
          })
        }
        else if(e.target.value.match(tri)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Tripura"
          })
        }
        else if(e.target.value.match(tel)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Telangana"
          })
        }
        else if(e.target.value.match(utk)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "Uttarakhand"
          })
        }
        else if(e.target.value.match(web)){
          this.setState({
            [e.target.name]:e.target.value,
            belongsto: "West Bengal"
          })
        }
        else {
          this.setState({
         [e.target.name]:e.target.value,
         belongsto: " None "
          })
          
        }
      }

      render() { //different
        // The rest of the file is the same
        return(

          <div className="container">
        <div className="App">
        <h1 className="header"> VEHICLE NUMBER PLATE CHECKER </h1> 
        <h1><label className="np"> NUMBER PLATE:  </label> </h1>
        <input className="enteringvalue" name="np" value={this.state.np} onChange={this.handleOnChange} />
        {this.state.isValid? <h2> Number plate is correct and {<h2> The vehicle belongs to </h2> } <div>
          <h2>{this.state.belongsto}</h2>
        </div></h2>:<h2> Please Enter a Correct Number plate </h2>}
        
        </div>
        <div>
          <img className="carimage" src="https://wallpaperaccess.com/full/4260390.jpg" />
        </div>
        </div>
         
        );
      };
    }

    export default App;
