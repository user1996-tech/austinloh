import { adminDb } from "../../firebase/firebase-admin";

export default async function handler(req, res) {
  console.log("getData -> START");
  const host = req.headers.host;
  // const referer = req.headers.referer;

  const isInternalRequest = host == process.env.BASE_URL;
  if (!isInternalRequest) {
    console.log("getData -> NOT INTERNAL REQUEST");
    return res.status(403).json({ message: "External requests not allowed" });
  }

  const area = req.body.area;
  const time = req.body.time;
  let temp = null;

  console.log("selected option -> ", area, " ", time);
  switch (area) {
    case "Home":
      console.log("getData -> HOME");
      temp = await adminDb
        .collection("visitors")
        .where("project", "==", "Home")
        .orderBy("createdAt", "desc")
        .get();
      break;
    case "About":
      console.log("getData -> ABOUT");
      temp = await adminDb
        .collection("visitors")
        .where("project", "==", "About")
        .orderBy("createdAt", "desc")
        .get();
      break;
    case "Projects":
      console.log("getData -> PROJECTS");
      temp = await adminDb
        .collection("visitors")
        .where("project", "not-in", ["Home", "About"])
        .orderBy("createdAt", "desc")
        .get();
  }

  let result = [];
  let length = 0;
  if (temp.docs.length != 0) {
    length = temp.docs.length;
    temp.docs.map((doc) => {
      result.push(doc.data());
    });
  }
  console.log(temp.docs[0].data());
  console.log("getData -> END");
  res.status(200).json({ length, rows: result });
}
