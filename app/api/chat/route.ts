import { NextResponse } from 'next/server';

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  if (realIP) {
    return realIP;
  }

  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  return 'unkown';
}

function checkRateLimit(clientIP: string): {
  allowed: boolean;
  remaining: number;
} {
  const now = Date.now();
  const clientData = rateLimitStore.get(clientIP);

  if (!clientData || now > clientData.resetTime) {
    rateLimitStore.set(clientIP, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });

    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
  }

  if(clientData.count>=RATE_LIMIT_MAX_REQUESTS){
    return {allowed:false, remaining:0};
  }

  clientData.count += 1;
  rateLimitStore.set(clientIP, clientData);

  return{
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - clientData.count,
  }
 
}


async function sendToTelegram(data:{
    name:string;
    email:string;
    phone:string;
    message:string;
}) : Promise<boolean>{
    const telegramToken=process.env.TELEGRAM_BOT_TOKEN;
    if(!telegramToken){
        console.error("Telegram bot token not configured");
        return false;
    }

    

}



export async function POST(request: Request) {}
