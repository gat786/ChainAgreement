export const generateAgreement = (data) => {
  const agreementText = `
Initiator - ${data?.initiator}

Acceptor - ${data?.acceptor}

Title - ${data?.title}

Agreement text -

${data?.markdown}
  `
  return agreementText;
}