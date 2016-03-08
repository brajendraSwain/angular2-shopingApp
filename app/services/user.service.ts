import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

	constructor(private _http: Http) { }

	getTitle() {
		return this._http.get('http://jsonplaceholder.typicode.com/posts/1')
			.map(res => res.json())
	}

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