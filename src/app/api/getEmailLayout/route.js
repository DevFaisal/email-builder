import connectToDatabase from "@/db/connection";
import layout from "@/models/layout";

export async function GET(request) {
  await connectToDatabase();
  const layouts = await layout.find();
  return new Response(
    JSON.stringify({ message: "Successfully retrieved", layouts }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
