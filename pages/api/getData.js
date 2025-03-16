import { adminDb } from "../../firebase/firebase-admin";

export default async function handler(req, res) {
  const host = req.headers.host;
  const monthInMs = 30 * 24 * 60 * 1000;
  const hYearInMs = 12 * 30 * 24 * 60 * 1000;
  const yearInMs = 12 * 30 * 24 * 60 * 1000;

  const isInternalRequest = host == process.env.BASE_URL;
  if (!isInternalRequest) {
    return res.status(403).json({ message: "External requests not allowed" });
  }

  const area = req.body.area;
  const time = req.body.time;
  const now = Date.now();
  let temp = null;

  switch (area) {
    case "Home":
      if (time == "Last month") {
        const timeLimit = now - monthInMs;
        temp = await adminDb
          .collection("visitors")
          .where("project", "==", "Home")
          .where("createdAt", ">=", timeLimit)
          .orderBy("createdAt", "desc")
          .get();
      } else if (time == "Last half year") {
        const timeLimit = now - hYearInMs;
        temp = await adminDb
          .collection("visitors")
          .where("project", "==", "Home")
          .where("createdAt", ">=", timeLimit)
          .orderBy("createdAt", "desc")
          .get();
      } else if (time == "Last year") {
        const timeLimit = now - yearInMs;
        temp = await adminDb
          .collection("visitors")
          .where("project", "==", "Home")
          .where("createdAt", ">=", timeLimit)
          .orderBy("createdAt", "desc")
          .get();
      } else {
        temp = await adminDb
          .collection("visitors")
          .where("project", "==", "Home")
          .orderBy("createdAt", "desc")
          .get();
      }
      break;
    case "About":
      if (time == "Last month") {
        const timeLimit = now - monthInMs;
        temp = await adminDb
          .collection("visitors")
          .where("project", "==", "About")
          .where("createdAt", ">=", timeLimit)
          .orderBy("createdAt", "desc")
          .get();
      } else if (time == "Last half year") {
        const timeLimit = now - hYearInMs;
        temp = await adminDb
          .collection("visitors")
          .where("project", "==", "About")
          .where("createdAt", ">=", timeLimit)
          .orderBy("createdAt", "desc")
          .get();
      } else if (time == "Last year") {
        const timeLimit = now - yearInMs;
        temp = await adminDb
          .collection("visitors")
          .where("project", "==", "About")
          .where("createdAt", ">=", timeLimit)
          .orderBy("createdAt", "desc")
          .get();
      } else {
        temp = await adminDb
          .collection("visitors")
          .where("project", "==", "About")
          .orderBy("createdAt", "desc")
          .get();
      }
      break;
    case "Projects":
      if (time == "Last month") {
        const timeLimit = now - monthInMs;
        temp = await adminDb
          .collection("visitors")
          .where("project", "not-in", ["Home", "About"])
          .where("createdAt", ">=", timeLimit)
          .orderBy("createdAt", "desc")
          .get();
      } else if (time == "Last half year") {
        const timeLimit = now - hYearInMs;
        temp = await adminDb
          .collection("visitors")
          .where("project", "not-in", ["Home", "About"])
          .where("createdAt", ">=", timeLimit)
          .orderBy("createdAt", "desc")
          .get();
      } else if (time == "Last year") {
        const timeLimit = now - yearInMs;
        temp = await adminDb
          .collection("visitors")
          .where("project", "not-in", ["Home", "About"])
          .where("createdAt", ">=", timeLimit)
          .orderBy("createdAt", "desc")
          .get();
      } else {
        temp = await adminDb
          .collection("visitors")
          .where("project", "not-in", ["Home", "About"])
          .orderBy("createdAt", "desc")
          .get();
      }
      break;
  }

  let result = [];
  let length = 0;
  if (temp.docs.length != 0) {
    length = temp.docs.length;
    temp.docs.map((doc) => {
      result.push(doc.data());
    });
  }
  res.status(200).json({ length, rows: result, host });
}
