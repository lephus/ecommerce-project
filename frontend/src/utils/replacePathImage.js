const replacePathImage = (path) => {
  // let path = '\\frontend\\public\\images\\image-1681924143963.jpg';
  if (path.includes("frontend")) {
    path = path.replace(/\\/g, "/");
    path = path.substring(path.indexOf("/images"));
  }
  console.log("path: ", path);
  return path;
};

export default replacePathImage;
