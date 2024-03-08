import express from 'express';
import {config} from 'dotenv';
import { auth , authenticate } from './middleware/authentication.js'
import cors from 'cors'
import productsRouter from './routes/products-routes.js';
import usersRouter from './routes/users-routes.js'
import cartRouter from './routes/cart-routes.js'
import loginRouter from './routes/login-routes.js'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
config()

const PORT=process.env.MYSQL_ADDON_PORT || 9001

const app=express()

app.use(cors())

app.use(express.json())

app.use(express.static('views'))

app.use(cookieParser())

app.use('/products', authenticate, productsRouter)

app.use('/cart', authenticate, cartRouter)

app.use('/users', usersRouter)

app.use('/login', auth, loginRouter)



app.listen (PORT,()=>{
    console.log(`this is listening on http://localhost:${PORT}`)
})



