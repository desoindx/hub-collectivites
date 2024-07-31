import { getProjectById } from "@/repository/projects";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const project = await getProjectById(context.params.id);
  if (project) {
    return NextResponse.json(project);
  }

  return NextResponse.json("Not found", { status: 404 });
}
