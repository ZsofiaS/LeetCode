// 929. Unique Email Addresses
// https://leetcode.com/problems/unique-email-addresses/

// 1. iterate through emails
// 2. split the email address at @ character, inspect the first part, save last part 
// 3. if there is a + in local name, split it at + character, inspect the first part
// 4. if there is a ., remove it
// 5. join the two parts & return the changed email address
// 6. count how many different email addresses we have
// 7. iterate through the array again
// + refactor

let numUniqueEmails = function(emails) {
    let convertedEmails = emails.map(email => {
        return convertEmail(email);
    })
    let uniqueEmails = [...new Set(convertedEmails)];
    return uniqueEmails.length;
};

const convertEmail = (email) => {
    
    let [localName, domainName] = email.split('@');
    if (localName.includes('+')) {
        localName = localName.split('+')[0];
    }
    if (localName.includes('.')) {
        localName = localName.split('.').join('');
    }
    return `${localName}@${domainName}`;
}