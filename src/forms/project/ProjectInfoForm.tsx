"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@codegouvfr/react-dsfr/Button";
import { ProjectInfoFormData, ProjectInfoFormSchema } from "@/forms/project/ProjectInfoFormSchema";
import InputFormField from "@/components/InputFormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProjectAction } from "@/actions/project/createProjectAction";
import { notifications } from "@/services/notificaction";
import { useRouter } from "next/navigation";

export const ProjectInfoForm = () => {
  const router = useRouter();
  const form = useForm<ProjectInfoFormData>({
    resolver: zodResolver(ProjectInfoFormSchema),
    defaultValues: { nom: "", description: "" },
  });

  const onSubmit: SubmitHandler<ProjectInfoFormData> = async (data) => {
    const result = await createProjectAction(data);
    notifications(result.type, result.message);
    if (result.type === "success" && result.createdProject) {
      router.push(`/projets/${result.createdProject.id}`);
    }
  };

  return (
    <>
      <form id="create-project" onSubmit={form.handleSubmit(onSubmit)}>
        <InputFormField
          control={form.control}
          path="nom"
          label="Intitulé du projet"
          asterisk={true}
          hint="Il doit être court et précis. Le nom de la collectivite ou du programme n'est pas nécesaire."
        />
        <InputFormField
          control={form.control}
          path="description"
          label="Description"
          asterisk={true}
          type="textarea"
          hint="Précisez en quelques mots le contexte du projet, ses bénéficiaires et ses objectifs."
          rows={6}
        />
        <Button type="submit">Valider</Button>
      </form>
    </>
  );
};
