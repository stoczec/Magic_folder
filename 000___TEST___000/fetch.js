// Используя ресурс json placeholder получите всех юзеров и отправьте в консоль только
// 1) username-ы отсортированный по алфавиту
// 2) Количество постов каждого из юзеров в параметре: post_count
// 👉👉👉 Для получения всех юзеров: https://jsonplaceholder.typicode.com/users
// 👉👉👉 Для получения всех постов: https://jsonplaceholder.typicode.com/posts
const users = [];
fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((json) => sortUsers(json));

const sortUsers = (arr) => {
  // const array = [];
  for (let i = 0; i < arr.length; i++) {
    const obj = {};
    obj.id = arr[i].id;
    obj.username = arr[i].username;
    obj['post_count'] = 0;
    users.push(obj);
  }
  return users.sort((a, b) => (a.username > b.username ? 1 : -1));
};
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json())
  .then((json) => postsUsers(json));

const postsUsers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < users.length; j++) {
      arr[i].userId === users[j].id ? (users[j].post_count += 1) : '';
    }
  }
  return users;
};
console.log(users);

//==============================================
// Level 2
// Выведите всю информацию в виде таблицы на экран и предоставьте функции сортировки по каждой из двух колонок:
// а) username (default sort by alphabetical)
// b) post_count
// 👉👉👉 Название функций, названия переменных, названия самих колонок в HTML выберите так,
// чтобы было понятно что они из себя представляют!

let usersNew = [];
let sortedByUsername = false;
let sortedByPostCount = false;

function fetchUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((fetchedUsers) => {
      usersNew = fetchedUsers;
      usersNew.forEach((el) => (el.post_count = 0));
    });
  render();
}

function fetchPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((posts) => {
      posts.forEach((post) => {
        post.userId === usersNew.id ? (usersNew.post_count += 1) : '';
        const userIndex = post.userId - 1;
        if (userIndex >= 0 && userIndex < usersNew.length) {
          usersNew[userIndex].post_count++;
        }
      });

      render();
    });
}

const table = document.querySelector('.table');
const render = () => {
  usersNew.forEach(({ username, post_count }) => {
    // создаем элементы
    const tr = document.createElement('tr');
    const tdUsername = document.createElement('td');
    const tdPostcount = document.createElement('td');
    // добавляем элементы
    table.append(tr);
    tr.append(tdUsername, tdPostcount);
    // добавляем данные
    tdUsername.innerText = username;
    tdPostcount.innerText = post_count;
  });
};

fetchUsers();
fetchPosts();
