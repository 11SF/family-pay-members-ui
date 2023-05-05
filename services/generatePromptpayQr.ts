import generatePayload from 'promptpay-qr'

export const generatePromptpayPayload: any = (mobileNumber: string, amount: number) => {
  return generatePayload(mobileNumber, { amount })
}