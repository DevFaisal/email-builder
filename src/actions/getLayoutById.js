"use server";

import connectToDatabase from "@/db/connection";
import layout from "@/models/layout";

export default async function getLayoutById({ id }) {
  try {
    await connectToDatabase();
    const result = await layout.findById(id);
    if (!result) {
      return {
        success: false,
        data: "Not found",
      };
    }
    return {
      success: true,
      data: JSON.stringify(result),
    };
  } catch (error) {
    return {
      success: false,
      data: "Something went wrong",
    };
  }
}
