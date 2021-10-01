const { response, request } = require("express");

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  return resp.json({ req });
};

module.exports = { getPairsOfPlayers };
