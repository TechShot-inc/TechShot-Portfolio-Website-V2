import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

const app = express()
const port = process.env.PORT || 4000

//importing mongoose
import mongoose from 'mongoose';
//importing routes
import TeamMemberRoutes from './routes/TeamMemberRoutes.js';
import ProjectRoutes from './routes/ProjectsRoutes.js';
import Email from './NodeMailer - Email Service/mail.js';
import ResourcesRoutes from './routes/ResourceRoutes.js';
import StackRoutes from './routes/StackRoutes.js';
import rateLimit from 'express-rate-limit';


//middleware
app.use(cors())
app.use(express.json())
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
    message: "Too many requests from this IP, please try again later",
});

// app.use(limiter);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    // console.log(req.path, req.method)
    next()
})
//routes
app.use('/api/v1/members', TeamMemberRoutes)
app.use('/api/v1/projects', ProjectRoutes)
app.use('/api/v1/sendEmail', Email)
app.use('/api/v1/resources', ResourcesRoutes)
app.use('/api/v1/stack', StackRoutes)


const start = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Optionally add other connection options here
        });

        // Listen for requests
        app.listen(port, () => {
            // console.log(`Connected to DB & listening on port ${port}...`);
        });
    } catch (error) {
        // console.error('Error connecting to the database:', error);
        process.exit(1); // Exit process with failure code
    }
};
start()