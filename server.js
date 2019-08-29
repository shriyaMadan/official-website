const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const nodeMailer = require('nodemailer')

app.use('/public',express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


var transporter = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'babumbrella',
    pass: 'EggrollHunter@123'
  }
});

app.get('/',(req,res)=>{
	res.sendFile(__dirname + '/public/index.html');
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/public/contact.html');
});

app.post('/contact/',(req,res)=>{
    var data = req.body;

    var str = "Name : " + data.firstName + " " + data.lName + "\nEmail : " + data.email + 
               "\nCompany : " + data.company + "\nBudget : " + data.budget + "$" + "\nProject-Type : " + 
               data.pType + "\nMessage : " + data.msg;

        console.log(str);

    var mailOptions = {
     from: 'babumbrella@gmail.com',
     to: 'getandpostsolutions@gmail.com',
     subject: 'order!',
     text: str
      };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    res.send('success');
});

app.listen(process.env.PORT || 3000,()=>{
	console.log('server is running at port 3000');
});



