export function addMember(members = []) {
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
}
