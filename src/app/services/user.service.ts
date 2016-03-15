import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

var baseUrl = 'http://localhost:8080/';

@Injectable()
export class UserService {

	constructor() { }


	getUsers(){
		return this.getJSON('sample/api/users');
	}

	addUser(userData){
		return this.postJSON('sample/api/users', userData);
	}

	postJSON(url, inputData) {
		console.log('inputData', inputData);
		return $.ajax(baseUrl+url, {
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

		return $.ajax(baseUrl+url, {
			method: 'GET',
			crossDomain: true
		});
	}
}