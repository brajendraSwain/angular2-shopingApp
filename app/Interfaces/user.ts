export interface User {
	id: number;
	accountExpired: boolean;
	accountLocked: boolean;
	email: string;
	enabled: boolean;
	fullName: string;
	passwordExpired: boolean;
	username: string;
}