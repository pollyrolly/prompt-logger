// amplify/auth/resource.ts
import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
// highlight-start
   email: {
     verificationEmailSubject: 'Welcome! Verify your email!'
   },
// highlight-end
  }
});