"use client";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "@codegouvfr/react-dsfr/Button";
import { ProjectInfoFormData, ProjectInfoFormSchema } from "@/forms/project/ProjectInfoFormSchema";
import InputFormField from "@/components/InputFormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProjectAction } from "@/actions/project/createProjectAction";
import { notifications } from "@/services/notificaction";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/routes";
import MultipleSearchableSelect from "@/components/SearchableSelect/MultipleSearchableSelect";
import { SousThematique, Thematique } from "@prisma/client";
import { sousThematiquesInfo, thematiquesLabel } from "@/services/thematiques";
import { useEffect } from "react";
import MultipleSearchableSelectFormField from "@/components/SearchableSelect/MultipleSearchableSelectFormField";

export const ProjectInfoForm = () => {
  const router = useRouter();
  const form = useForm<ProjectInfoFormData>({
    resolver: zodResolver(ProjectInfoFormSchema),
    defaultValues: { nom: "", description: "", thematiques: [], sousThematiques: [] },
  });

  const selectedThematiques = form.watch("thematiques");

  const onSubmit: SubmitHandler<ProjectInfoFormData> = async (data) => {
    const result = await createProjectAction(data);

    notifications(result.type, result.message);
    if (result.type === "success" && result.createdProject) {
      router.push(ROUTES.FICHE_PROJET(result.createdProject.id));
    }
  };

  useEffect(() => {
    const existingSousThematiques = form.getValues("sousThematiques");
    form.setValue(
      // @ts-ignore
      "sousThematiques",
      existingSousThematiques.filter((sousThematique) =>
        sousThematiquesInfo[sousThematique].thematiques.some((thematique) => selectedThematiques.includes(thematique)),
      ),
    );
  }, [selectedThematiques]);

  return (
    <>
      <form id="create-project" onSubmit={form.handleSubmit(onSubmit)}>
        <InputFormField
          control={form.control}
          path="nom"
          label="Intitulé du projet"
          asterisk
          hint="Il doit être court et précis. Le nom de la collectivite ou du programme n'est pas nécesaire."
        />
        <InputFormField
          control={form.control}
          path="description"
          label="Description"
          asterisk
          type="textarea"
          hint="Précisez en quelques mots le contexte du projet, ses bénéficiaires et ses objectifs."
          rows={6}
        />
        <MultipleSearchableSelectFormField
          path="thematiques"
          control={form.control}
          asterisk
          label="Thématiques"
          options={Object.values(Thematique).map((thematique) => ({
            name: thematiquesLabel[thematique],
            value: thematique,
          }))}
        />
        <MultipleSearchableSelectFormField
          path="sousThematiques"
          control={form.control}
          asterisk
          label="Sous Thématiques"
          options={Object.values(SousThematique)
            .filter((sousThematique) =>
              sousThematiquesInfo[sousThematique].thematiques.some((thematique) =>
                selectedThematiques.includes(thematique),
              ),
            )
            .map((sousThematique) => ({
              name: sousThematiquesInfo[sousThematique].label,
              value: sousThematique,
            }))}
        />
        <Button type="submit">Valider</Button>
      </form>
    </>
  );
};
