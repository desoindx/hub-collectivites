import { getProjectById, updateProject } from "@/repository/projects";
import { getProjectInServiceById } from "@/services/services";
import { NextRequest, NextResponse } from "next/server";
import { UpdateProjectSchema } from "@/apiValidationSchema/updateProjectSchema";

export async function GET(req: NextRequest, context: { params: { id: string } }) {
  const project = await getProjectById(context.params.id);
  if (project) {
    const services = await getProjectInServiceById(project);
    return NextResponse.json({ ...project, services });
  }

  return NextResponse.json("Not found", { status: 404 });
}

export async function PUT(req: NextRequest, context: { params: { id: string } }) {
  const body = await req.json();

  const project = await getProjectById(context.params.id);
  if (!project) {
    return NextResponse.json("Not found", { status: 404 });
  }

  const parsedRequests = UpdateProjectSchema.safeParse(body);
  if (!parsedRequests.success) {
    return NextResponse.json(
      {
        error: { message: "Invalid request", errors: parsedRequests.error.errors },
      },
      { status: 400 },
    );
  }

  const updatedProject = await updateProject(project.id, parsedRequests.data);
  return NextResponse.json(updatedProject);
}
