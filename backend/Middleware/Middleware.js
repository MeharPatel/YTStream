import admin from "../Config/firebaseAdmin";

export async function verifyFirebaseToken(req, res, next){
    const authUser = req.headers.authorization;

    if(!authHeader) return res.status(401).send("No token");

    const token = authHeader.spill(" ")[1];

    try{
        const decoded = await admin.auth().verifyIdToken(token);
        req.user = decoded;
        next();
    } catch {
        res.status(401).send("Invalid token");
    }
}