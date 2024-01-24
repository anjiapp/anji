// app/api/auth/[auth0]/route.js
import { handleAuth } from '@auth0/nextjs-auth0';

export const GET = handleAuth();
//https://github.com/auth0/nextjs-auth0/blob/main/EXAMPLES.md#customize-handlers-behavior