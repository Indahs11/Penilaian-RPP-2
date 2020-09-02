import React, {Component} from 'react';
import './App.css';
import Alert from './Components/Alert';

class bmi extends Component {

	constructor(props){
		super(props);
		this.state = {
			berat: '',
			tinggi: '',
			hasil: "",
			pesan: ""
		};

		this.BeratChange = this.BeratChange.bind(this);
		this.TinggiChange = this.TinggiChange.bind(this);
		this.hitungBmi = this.hitungBmi.bind(this);
	}

	BeratChange(event) {
		this.setState({berat: event.target.value})
	}

	TinggiChange(event){
		this.setState({tinggi: event.target.value})
	}
	
	hitungBmi = (event) => {
		let tinggi = this.state.tinggi;
		let berat = this.state.berat;

		// hitung
		let hasil = berat / (tinggi*tinggi);

		// seleksi
		if(hasil <= 18.5){
			this.setState({hasil: "Kekurangan Berat Badan"}) 
		} else if(hasil >= 18.5 && hasil <= 22.9){
			this.setState({hasil: "Normal (Ideal)"})
		} else if(hasil >= 23 && hasil <= 24.9){
			this.setState({hasil: "Kelebihan Berat Badan"})
		} else{
			this.setState({hasil: "Kegemukan (Obesitas)"})
		}
			
		event.preventDefault();
	}

	render(){
		return(
			<div className="card col-sm-5 mx-auto m-5">
				<div className="card-header bg-light text-center text-black">
					<h4>Body Mass Index</h4>
				</div>
				<div className="card-body">
				<div class="form-group row">
          <label for="input-angka" class="col-sm-4 col-form-label">Berat (kg)</label>
          <div class="col-sm-8">
          <input type="number" className="form-control" value={this.state.berat} onChange={this.BeratChange}/>
          </div>
       </div>
       <div class="form-group row">
          <label for="input-angka" class="col-sm-4 col-form-label">Tinggi (m)</label>
          <div class="col-sm-8">
          <input type="number" className="form-control" value={this.state.tinggi} onChange={this.TinggiChange}/>
          </div>
       </div>
				</div>
				<div className="card-footer">
					<button className="form-control btn btn-info text-white" onClick={this.hitungBmi} >
						Hitung
					</button>
					<h4 className="text-center mt-4">Hasil</h4>
        				<input className="form-control mb-1" value={this.state.hasilA} readOnly/>
				</div>
			</div>
		);
	}
}

export default bmi;
