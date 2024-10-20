const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/connectDB");
const contactModel = require("./models/contact.model");
const subscribeModel = require("./models/subscribe.model");
const app = express();
const cors = require("cors");
const port = 8100;
dotenv.config();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cors({ origin: "https://next-artist.vercel.app" }))
app.use("/api/contactSubmit", async (req, res) => {
  const { name, email, phone, message } = req.body;
  const contactAlreadyExists = await contactModel.findOne({ email });
  if (contactAlreadyExists) {
    console.log("Contact Already Exists");
    return res.status(409).json({ message: "Contact already exists" });
  }
  const formData = new contactModel({
    name,
    email,
    phone,
    message,
  });
  await formData.save();
  console.log("Contact Created");
  res.status(201).json({ message: "Contact created successfully" });
});

app.use("/api/subs", async (req, res) => {
  const { email } = req.body;
  const subsAlreadyExists = await subscribeModel.findOne({ email });
  if (subsAlreadyExists) {
    console.log("Subs Already Exists");
    return res.status(409).json({ message: "Subs already exists" });
  }
  const subsEmail = new subscribeModel({
    email: email,
  });
  await subsEmail.save();
  console.log(`Subs added`);
  res.status(201).json({ message: "Subscribed successfully" });
});

app.use("/api/getContacts", async (req, res) => {
  try {
    const data = await contactModel.find();
    if (!data.length) {
      return res
        .status(404)
        .json({ success: false, message: "No contacts found" });
    }
    res.status(200).json({ success: true, data });
    console.log(`From BackEnd : `, data);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.use("/api/getSubscribers", async (req, res) => {
  try {
    const data = await subscribeModel.find();
    if (!data.length) {
      return res
        .status(404)
        .json({ success: false, message: "No contacts found" });
    }
    res.status(200).json({ success: true, data });
    console.log(`From BackEnd : `, data);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Running on ${port}`);
  connectDB();
});
