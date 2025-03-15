// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import moment from "moment-timezone";
import { buildCountries, buildRegions } from "../../global";
import { adminDb } from "../../firebase/firebase-admin";

export default async function handler(req, res) {
  const collection = req.body.collection ? req.body.collection : "Other";
  let result = "x";
  let data = {};
  const currentTime = moment().utc().format();
  const currentTimeStamp = Date.now();
  const mobile = req.headers["user-agent"].match(
    /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  )
    ? true
    : false;

  let platform = "";
  if (req.headers["user-agent"].match(/Windows/i)) {
    platform = "Windows";
  } else if (req.headers["user-agent"].match(/Macintosh/i)) {
    platform = "Mac";
  } else if (req.headers["user-agent"].match(/Linux/i)) {
    platform = "Linux";
  }

  const country = req?.headers["x-vercel-ip-country"]
    ? req.headers["x-vercel-ip-country"]
    : "";
  const city = req?.headers["x-vercel-ip-city"]
    ? req.headers["x-vercel-ip-city"]
    : "";
  const region = req?.headers["x-vercel-ip-country-region"]
    ? req.headers["x-vercel-ip-country-region"]
    : "";
  const longitude = req?.headers["x-vercel-ip-longitude"]
    ? req.headers["x-vercel-ip-longitude"]
    : "";
  const latitude = req?.headers["x-vercel-ip-latitude"]
    ? req.headers["x-vercel-ip-latitude"]
    : "";

  let ip = req.headers["x-real-ip"];
  if (!ip) {
    const forwardedFor = req.headers["x-forwarded-for"];
    if (Array.isArray(forwardedFor)) {
      ip = forwardedFor.at(0);
    } else {
      ip = forwardedFor?.split(",").at(0) ?? "Unknown";
    }
  }

  data = {
    project: collection,
    createdAt: currentTimeStamp,
    ip: ip,
    dateTime: currentTime,
    country: country,
    city: city,
    region: region,
    longitude: longitude,
    latitude: latitude,
    mobile: mobile,
    platform: platform,
  };
  result = data;

  if (req.headers["host"] != "localhost:3000") {
    if (
      !(
        buildCountries.includes(country) &&
        buildRegions.includes(decodeURI(city))
      )
    ) {
      // const res = await addDoc(dbRef, data);
      const res = await adminDb
        .collection("visitors")
        .doc("Projects")
        .collection(collection)
        .add(data);
      result = "entry added";
    }
  }

  res.status(200).json({ result: result, data: data });
}
