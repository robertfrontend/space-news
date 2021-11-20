import { launchers } from "../../../db/launcher";

export default function handler(req, res) {
  res.status(200).json(launchers);
}
