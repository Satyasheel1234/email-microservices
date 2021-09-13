
import { Mail } from '../src/models/Mail'
import { EmailAddress } from '../src/models/EmailAddress';
import { Result } from '../src/common/Result';

let emailAddress: EmailAddress;
let emailAddressOrError: Result<EmailAddress>;

describe ('#EmailAddress', () => {

  beforeEach(() => {
    emailAddress = null;
    emailAddressOrError = null;
  })

  test('Can create an email address', () => {
    emailAddressOrError = EmailAddress.create('test@gmail.com');
    expect(emailAddressOrError.isSuccess).toBeTruthy();
    emailAddress = emailAddressOrError.getValue();
    expect(emailAddress.value).toBe('test@gmail.com');
  });

  test('Should fail to create an invalid email address', () => {
    emailAddressOrError = EmailAddress.create('test');
    expect(emailAddressOrError.isSuccess).toBeFalsy();
  });

})

