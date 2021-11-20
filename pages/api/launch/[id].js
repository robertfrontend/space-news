import { launchers } from "../../../db/launcher";

export default function hanlder({ query: { id } }, res) {
  const filtered = launchers.filter((launch) => launch.id === id);
  //   res.status(200).json(filtered);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `laun no encontrado ${id}` });
  }
}
