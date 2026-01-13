function buildTree(data) {
  const map = new Map();
  const roots = [];

  data.forEach(item => {
    map.set(item.name, { ...item, children: [] });
  });

  data.forEach(item => {
    const node = map.get(item.name);
    if (item.parent && map.has(item.parent)) {
      map.get(item.parent).children.push(node);
    } else {
      roots.push(node);
    }
  });

  return roots;
}

module.exports = buildTree;
