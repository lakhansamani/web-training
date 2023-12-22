import { renderMemberList } from './scripts/render_members.js';
import { addMember } from './scripts/add_member.js';
import { searchMembers } from './scripts/search_member.js';

let members = ['Ram', 'Shyam', 'Hari', 'Sita', 'Gita'];

renderMemberList(members);
const addMemberButton = document.getElementById('add-member');
addMemberButton.addEventListener('click', function () {
  addMember(members);
});

const searchMemberInput = document.getElementById('search-member-input');
searchMemberInput.addEventListener('keyup', function (event) {
  const searchMemberName = event.target.value || '';
  searchMembers(searchMemberName, members);
});
