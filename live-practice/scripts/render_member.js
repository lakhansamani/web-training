// named exports
// default exports

export function renderMember(member, memberList) {
  const li = `<li>${member.name} (${member.email})</li>`;
  memberList.innerHTML += li;
}

export default function renderMembers(members, membersList) {
  members.forEach((member) => {
    renderMember(member, membersList);
  });
}
