import express from 'express';
import {config} from 'dotenv';
import {authenticate } from './middleware/authentication.js'
import { certificate } from './middleware/authentication.js';
import cors from 'cors'
import productsRouter from './routes/products-routes.js';
import usersRouter from './routes/users-routes.js'
import cartRouter from './routes/cart-routes.js'
import loginRouter from './routes/login-routes.js'
import registerRouter from './routes/register-routes.js'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
config()

const PORT=process.env.MYSQL_ADDON_PORT || 9001

const app=express()

app.use(cors(
    { 
        origin: 'https://capstone-project-4ee89.firebaseapp.com',
        credentials: true
      }
))

app.use(express.json())

app.use(express.static('public'))

app.use(cookieParser())

app.use('/products',authenticate, productsRouter)

app.use('/cart', authenticate, cartRouter)

app.use('/users', authenticate, usersRouter)

app.use('/login',certificate, loginRouter)

app.use('/register', registerRouter)



app.listen (PORT,()=>{
    console.log(`this is listening on http://localhost:${PORT}`)
})



