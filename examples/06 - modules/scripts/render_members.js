export function renderMember(member) {
  const memberElement = document.createElement('li');
  memberElement.innerText = member;
  document.getElementById('members').appendChild(memberElement);
}

export function renderMemberList(members = []) {
  members.forEach(renderMember);
}
