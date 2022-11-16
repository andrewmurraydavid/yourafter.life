// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const statements = require('../statements.json');

export default function handler(req, res) {
  const {sid} = req.query;

  const statement = statements.find((s) => s.id === +sid);

  if (statement) {
    res.status(200).json(statement);
  } else {
    res.status(404).json({message: 'Statement not found'});
  }
}
