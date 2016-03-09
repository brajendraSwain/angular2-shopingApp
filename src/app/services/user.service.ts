import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

	constructor() { }


	getUsers(){
		return this.getJSON('http://localhost:8080/sample/api/users');
	}

	addUser(userData){
		return this.postJSON('http://localhost:8080/sample/api/users', userData);
	}

	postJSON(url, inputData) {
		console.log('inputData', inputData);
		return $.ajax(url, {
			method: 'POST',
			crossDomain: true,
			data: JSON.stringify(inputData),
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			error: function(error){
				console.log('error', error);
			}
		});
	}

	getJSON(url) {
		return $.ajax(url, {
			method: 'GET',
			crossDomain: true
		});
	}
}