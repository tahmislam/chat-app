const expect = require('expect');
const{Users} = require('./users');

describe('Users', () => {
	var users;
  beforeEach(() => {
  	users = new Users();
  	users.users = [{
  	   id: '1',
  	   name: 'Tahmid',
  	   room: 'IUT'
  	}, {
  	  id: '2',
  	  name: 'Aurko',
  	  room: 'BUET'	
  	},{
  	  id: '3',
  	  name: 'Mujtahid',
  	  room: 'BUET',
  	}];
  });	

 it('should add new user', ()=>{
 	var users = new Users();
 	var user = {
 		id : '123',
 		name : 'Tahmid',
 		room : 'IUTIAN'
 	};
 	var resUser = users.addUser(user.id, user.name , user.room);

 	expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
  	var userId ='1';
  	var user = users.removeUser(userId);

  	expect(user.id).toBe(userId);
  	expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
  	var userId ='99';
  	var user = users.removeUser(userId);

  	expect(user).toNotExist();
  	expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
  	var userId = '2';
  	var user = users.getUser(userId);

  	expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
  	var userId = '99';
  	var user = users.getUser(userId);

  	expect(user).toNotExist();
  });

  it('should return names for BUET', () => {
  	var userList = users.getUserList('BUET');
  	expect(userList).toEqual(['Aurko' , 'Mujtahid']);
  });
  it('should return names for IUT', () => {
  	var userList = users.getUserList('IUT');
  	expect(userList).toEqual(['Tahmid']);
  });
});