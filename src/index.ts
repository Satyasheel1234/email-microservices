import { NodemailerEmailService } from "./services/NodemailerEmailService";
import { Mail } from "./models/Mail";
import { EmailAddress } from "./models/EmailAddress";
import { SendGridEmailService } from "./services/sendgrid/SendGridEmailService";
import sgMail from '@sendgrid/mail'

async function main () {
  try {
    // const nodeMailerTransporter = await NodemailerEmailService.createTestTransporter();
    // const mailer = new NodemailerEmailService(nodeMailerTransporter);
    const mailer = new SendGridEmailService('sdfdjhfkjsdhfksdhkfjshdkjf', sgMail)
    console.log("Started");

    const sourceAddressOrError = EmailAddress.create('test@gmail.com');
    const destinationAddressOrError = EmailAddress.create('testing@gmail.com');
    const sourceAddress = sourceAddressOrError.getValue();
    const destinationAddress = destinationAddressOrError.getValue();

    const mailOrError = Mail.create({ 
      sourceAddress,
      destinationAddress,
      messageTitle: 'Hello world!',
      messageBody: 'This is an email Im sending.'
    });

    const mail = mailOrError.getValue();

    const result = await mailer.sendMail(mail);
    console.log(result);

  } catch (err) {
    console.log(err);
  }
}

main();

