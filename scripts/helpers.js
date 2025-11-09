/**
 * Clean Blog Theme Helper Functions
 */

hexo.extend.helper.register('clean_blog_title', function(page) {
  const config = this.config;
  const theme = this.theme;

  if (page.title) {
    return page.title + ' | ' + config.title;
  } else if (this.is_archive()) {
    return 'Archives | ' + config.title;
  } else if (this.is_category()) {
    return 'Category: ' + page.category + ' | ' + config.title;
  } else if (this.is_tag()) {
    return 'Tag: ' + page.tag + ' | ' + config.title;
  } else {
    return config.title + (config.subtitle ? ' - ' + config.subtitle : '');
  }
});

hexo.extend.helper.register('read_time', function(content) {
  const wordsPerMinute = 200;
  const words = content.replace(/<\/?[^>]+(>|$)/g, "").split(/\s+/).length;
  const readTime = Math.ceil(words / wordsPerMinute);
  return readTime;
});

hexo.extend.helper.register('excerpt', function(content, length) {
  length = length || 150;
  const text = content.replace(/<\/?[^>]+(>|$)/g, "");
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
});

hexo.extend.helper.register('is_current_path', function(path, strict) {
  const currentPath = this.page.path;

  if (strict) {
    return currentPath === path || currentPath === path + '/';
  }

  if (path === '/') {
    return currentPath === '' || currentPath === 'index.html';
  }

  return currentPath.indexOf(path.replace('/', '')) === 0;
});