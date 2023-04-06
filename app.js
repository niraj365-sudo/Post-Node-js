const express =  require('express')
const mongoose = require('mongoose')
const dotenv =  require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const path = require('path')
const passport = require('passport')
const session = require('express-session')
const methodOverride = require('method-override')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/db')





//Load config
dotenv.config({ path: './config/config.env' })

//Passport config
require('./config/passport')(passport)

//Database Connection
connectDB()

const app = express()

//Body Parser
app.use(express.urlencoded({ extended:false }))
app.use(express.json())

//Method Overriding
app.use(methodOverride((req, res)=>{
    if(req.body && typeof req.body === 'object' && '_method' in req.body){
        // look in urlencoded POST bodies and delete it
        let method = req.body._method
        delete req.body._method
        return method
    }
}))

//Logging (morgan)
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//Handlebars Helpers
const { formatDate, stripTags, truncate, editIcon, select } = require('./helpers/hbs')

//Configure Handlebars
app.engine('.hbs', exphbs.engine({helpers:{
    formatDate,
    truncate,
    stripTags,
    editIcon,
    select
}, extname: '.hbs', defaultLayout: "main", layoutsDir: __dirname+ "/views/layouts"}))
app.set('view engine', '.hbs')

//Session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        clientPromise:false,
        mongoUrl: process.env.MONGO_URI,
        ttl: 1 * 24 * 60 * 60 // save session for 1 days
    }),
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 1// expires in 1 days
    }
}))

//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

//Set Global variable

   const user =  app.use((req, res, next)=>{
        res.locals.user = req.user || null
        next()
    })

   console.log(user);



//Static folder
app.use(express.static(path.join(__dirname, 'public')))

//Calling Routes
app.use('/', require('./routes/index'))



app.use('/auth', require('./routes/auth'))
app.use('/stories',require('./routes/stories'))

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})