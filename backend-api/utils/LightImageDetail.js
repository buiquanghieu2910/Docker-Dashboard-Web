exports.lightImageDetail = (image, inspectedData) => ({
  id: image.ID,
  repository: inspectedData.RepoTags[0],
  created: inspectedData.Created,
  size: image.Size,
  virtual_size: image.VirtualSize
})