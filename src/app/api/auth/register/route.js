export async function POST(request) {
  const { email, password } = await request.json();
  return new Response(JSON.stringify({ success: true, email }), {
    status: 200,
  });
}
