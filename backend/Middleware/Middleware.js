import admin from "../Config/firebaseAdmin.js";

export async function verifyFirebaseToken(req, res, next){
    const authHeader = req.headers.authorization;

    if(!authHeader) return res.status(401).send("No token");

    const token = authHeader.split(" ")[1];

    try{
        const decoded = await admin.auth().verifyIdToken(token);
        req.user = decoded;
        next();
    } catch {
        res.status(401).send("Invalid token");
    }
}