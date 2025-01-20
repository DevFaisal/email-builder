"use server";

import connectToDatabase from "@/db/connection";
import template from "@/models/template";

export default async function getSavedTemplates() {
  await connectToDatabase();
  const savedTemp = await template.find();
  return {
    success: true,
    data: JSON.stringify(savedTemp),
  };
  //   console.log(savedTemp);
}
