const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// MongoDB connection
const uri =
  "mongodb+srv://connect-care:p6s5S4iDlNPuVzTt@faisal.yl6wev4.mongodb.net/?appName=Faisal";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("ConnectCare");
    const doctorsCollection = db.collection("doctors");

    // GET ALL DOCTORS
    app.get("/doctors", async (req, res) => {
      const result = await doctorsCollection.find().toArray();
      res.send(result);
    });

    // GET SINGLE DOCTOR BY ID
    app.get("/doctors/:id", async (req, res) => {
      const id = req.params.id;

      try {
        const result = await doctorsCollection.findOne({ id: Number(id) });

        if (!result) return res.status(404).send({ message: "Doctor not found" });

        res.send(result);
      } catch (err) {
        res.status(500).send({ message: "Invalid ID format", error: err });
      }
    });


    // CREATE APPOINTMENT
    const appointmentsCollection = db.collection("appointments");

    // CREATE APPOINTMENT
    app.post("/appointments", async (req, res) => {
    try {
        const appointment = req.body;

        if (!appointment.userEmail || !appointment.doctorId) {
        return res.status(400).send({ message: "Missing required fields" });
        }

        const result = await appointmentsCollection.insertOne(appointment);
        res.send({ success: true, insertedId: result.insertedId });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Server error", error: err });
    }
    });

    // GET APPOINTMENTS FOR A USER
    app.get("/appointments/user/:email", async (req, res) => {
    try {
        const email = req.params.email;
        const result = await appointmentsCollection
        .find({ userEmail: email })
        .toArray();

        res.send(result);
    } catch (err) {
        res.status(500).send({ message: "Server error", error: err });
    }
    });

    // DELETE APPOINTMENT
    app.delete("/appointments/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const result = await appointmentsCollection.deleteOne({
        _id: new ObjectId(id),
        });

        if (result.deletedCount === 0) {
        return res.status(404).send({ message: "Appointment not found" });
        }

        res.send({ success: true });
    } catch (err) {
        res.status(500).send({ message: "Delete failed", error: err });
    }
    });


    // GET TOP 5 DOCTORS (sort by rating desc)
    app.get("/doctors", async (req, res) => {
    try {
        const result = await doctorsCollection
        .find()
        .sort({ rating: -1 })
        .limit(5)
        .toArray();

        res.send(result);
    } catch (err) {
        res.status(500).send({ message: "Failed to fetch top doctors", error: err });
    }
    });


    // Root route
    app.get("/", (req, res) => {
      res.send("ConnectCare API running...");
    });

  } catch (error) {
    console.error(error);
  }
}

run().catch(console.dir);

app.listen(port, () => console.log(`Server running on port ${port}`));
