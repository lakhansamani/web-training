import { renderMember } from './render_members.js';

export function searchMembers(searchMemberName = '', members = []) {
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
}
