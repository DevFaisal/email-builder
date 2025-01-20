import connectToDatabase from "@/db/connection";
import templateSchema from "@/models/template";

export async function POST(request) {
  try {
    // Parse the request body as JSON
    const body = await request.json();

    await connectToDatabase();
    const savedTemp = await templateSchema.create({
      title: body.data.title,
      html: body.data.html,
    });
    console.log(savedTemp);
    // Return a response
    return new Response(JSON.stringify({ message: "Request received", body }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error parsing request body:", error);
    return new Response(JSON.stringify({ error: "Invalid request body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
