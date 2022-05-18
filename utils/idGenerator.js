module.exports = function(blogs) {
  const lastBlog = blogs.slice().pop();
  const lastId = lastBlog.id;

  return lastId + 1;
}