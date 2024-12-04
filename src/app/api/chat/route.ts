import { xai } from '@ai-sdk/xai';
import { streamText } from 'ai';

// Allow streaming responses up to 10 seconds
export const maxDuration = 10;

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = streamText({
        model: xai('grok-beta'),
        messages,
    });

    return result.toDataStreamResponse();
}