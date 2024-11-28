export async function GET() {
    return Response.json({ 
        message: 'fetch random api',
        data: Math.random()
    });
}
