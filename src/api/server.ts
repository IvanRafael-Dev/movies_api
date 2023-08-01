import { app } from "./api";

const API_PORT = process.env.API_PORT || 3000;

app.listen(API_PORT, () => console.log(`Server running on port: ${API_PORT}`))
