import { getProjectById } from "@/repository/projects";
import { getProjectInServiceById } from "@/services/services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const project = await getProjectById(context.params.id);
  if (project) {
    const services = await getProjectInServiceById(project.id);
    return NextResponse.json({ ...project, services });
  }

  return NextResponse.json("Not found", { status: 404 });
}
