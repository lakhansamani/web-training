const apiURL = 'https://training-apis-production.up.railway.app';

// fetch users and render them in list
const getUsers = async () => {
  const users = await fetch(`${apiURL}/users`).then((res) => res.json());
  const list = document.querySelector('#members');
  list.innerHTML = users
    .map((user) => `<li>${user.name} (${user.email})</li>`)
    .join('');
};

getUsers();

// add user
const addUserForm = document.querySelector('#add-user-form');
addUserForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(addUserForm);
  const name = formData.get('name');
  const email = formData.get('email');
  fetch(`${apiURL}/signup`, {
    method: 'POST',
    body: JSON.stringify({ name, email, posts: [] }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then(getUsers)
    .then(() => {
      addUserForm.reset();
    });
});
