let members = ['Ram', 'Shyam', 'Hari', 'Sita', 'Gita'];

function renderMember(member) {
  const memberElement = document.createElement('li');
  memberElement.innerText = member;
  document.getElementById('members').appendChild(memberElement);
}

members.forEach(renderMember);

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

const searchMemberInput = document.getElementById('search-member-input');
searchMemberInput.addEventListener('keyup', function (event) {
  const searchMemberName = event.target.value || '';
  console.log({ searchMemberName });
  if (searchMemberName.trim() === '') {
    document.getElementById('members').innerHTML = '';
    members.forEach(renderMember);
    return;
  }
  const filteredList = members.filter(function (member) {
    if (member.toLowerCase().includes(searchMemberName.toLowerCase())) {
      return true;
    }
  });
  if (filteredList.length === 0) {
    alert('Member not found');
    return;
  }

  document.getElementById('members').innerHTML = '';
  filteredList.forEach(renderMember);
});
