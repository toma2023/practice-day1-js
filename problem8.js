let friends = ['rahim', 'karim', 'jolil', 'mahim', 'mahi', 'alia', 'ranbir', 'katrina', 'deepika']
//koita element ache
console.log(friends.length);
//value change korte
friends[4]= 'pori moni';
console.log(friends);
 var newFriends = friends.push('mina', 'rina');
console.log(newFriends);
const newTotalFriend = friends.splice(3, 1);
console.log(newTotalFriend);