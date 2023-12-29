import dotenv from 'dotenv';
dotenv.config();


export default function User() {
const api = process.env.API;
    return (
<div>
<h1>User{api}</h1>
</div>
    )
}