const idGenerator = require("../utils/idGenerator");

let blogs = [
  {
    id: 1,
    title: 'My First Post',
    content: "Lorem ipsum dolor sit amet, veniam adipi sicing in nulla cillum adipisicing aute  duis enim ir",
    categories: [
      'sci-fi',
      'drama'
    ]
  },
  {
    id: 2,
    title: 'What is this?',
    content: "Lorem ipsum dolor sit amet, veniam adipi sicing in nulla cillum adipisicing aute  duis enim ir",
    categories: [
      'fantasy',
      'thriller'
    ]
  }
];

function getAll() {
  return blogs;
}

function getById(id) {
  return blogs.find((blog) => blog.id === id);
}

function add(title, content, categories) {
  const input = {
    id: idGenerator(blogs),
    title,
    content,
    categories
  };
  blogs.push(input);
  return input;
}

function edit(id, title, content, categories) {
  let isExist = false;

  const updated = {
    id,
    title,
    content,
    categories
  };

  blogs = blogs.map((current) => {
    if (current.id === id) {
      isExist = true;
      return updated;
    }
    return current;
  });
  
  if (isExist) {
    return updated;
  }

  return null;
}

function patch(id, payload) {
  let isExist = false;

  const instance = blogs.find((blog) => blog.id === id);

  blogs = blogs.map((current) => {
    if (current.id === id) {
      isExist = true;
      return {
        ...instance,
        ...payload
      };
    }
    return current;
  });
  
  if (isExist) {
    return {
      ...instance,
      ...payload
    };
  }

  return null;
}

function remove(id) {
  blogs = blogs.filter(blog => blog.id !== id);

  return blogs;
}

module.exports = {
  getAll,
  getById,
  add,
  edit,
  patch,
  remove
}