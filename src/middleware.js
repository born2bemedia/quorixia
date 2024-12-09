import createMiddleware from 'next-intl/middleware';
import { routing } from './navigation';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en|it)/:path*']
};