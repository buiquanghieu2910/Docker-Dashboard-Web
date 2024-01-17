const db = require("../utils/db");

exports.create = async (req, res) => {
  const { name, containers } = req.body;

  const response = await db.newGroup({ name, containers });
  res.json(response);
};

exports.fetch = async (req, res) => {
  const response = await db.getGroups();
  response.map((item) => (item.containers_id = JSON.parse(item.containers_id)));
  res.json(response);
};

exports.delete = async (req, res) => {
  const { id } = req.query;
  await db.deleteGroup(id);
  res.json([]);
};
