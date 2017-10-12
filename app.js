
/*
var express = require('express');
var app = express();

require('./config/express').configExpress(app);
require('./config/passport').configPassport(app);
require('./routes/routes')(app);
require('./routes/pedidos')(app);
require('./routes/users')(app);
require('./routes/prizes')(app);
*/

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'informer.rec@gmail.com',
        pass: 'aedkm8Sr'
    }
});
const mailOptions = {
    from: 'informer.rec@gmail.com', // sender address
    to: ['aidaf57.diaz@nauta.cu', 'randay.concepcion@nauta.cu', 'yuni.sanabria@nauta.cu'], // list of receivers
    subject: 'Probando mailer', // Subject line
    html: '<p>Enviando a todos los factores en masa desde el server. Finally!!!</p>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
    if(err)
        console.log(err)
    else
        console.log(info);
});
/*app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT ||  3000);
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var server = app.listen(app.get('port'),server_ip_address, function () {
    console.log('Listening on port %d', server.address().port);

});*/
/*var CronJob = require('cron').CronJob;
var job = new CronJob({
    cronTime: '* * * * * *',
    onTick: function() {
        /*
         * Runs every weekday (Monday through Friday)
         * at 11:30:00 AM. It does not run on Saturday
         * or Sunday.
         */
        console.log('Corriendo');
    },
    start: false,
    timeZone: 'America/Los_Angeles'
});
job.start();*/



