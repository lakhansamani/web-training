let members = ['Ram', 'Shyam', 'Hari', 'Sita', 'Gita'];
members.forEach(function (member) {
  const memberElement = document.createElement('li');
  memberElement.innerText = member;
  document.getElementById('members').appendChild(memberElement);
});

const addMemberButton = document.getElementById('add-member');
addMemberButton.addEventListener('click', function () {
  const memberInput = document.getElementById('add-member-input');
  const memberName = memberInput.value;
  if (memberName && memberName.trim() === '') {
    alert('Please enter member name');
    return;
  }
  members.push(memberName);
  const memberElement = document.createElement('li');
  memberElement.innerText = memberName;
  document.getElementById('members').appendChild(memberElement);
  memberInput.value = '';
});
