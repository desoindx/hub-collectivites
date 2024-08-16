"use client";
import {SubmitHandler, useForm} from "react-hook-form";
import Button from "@codegouvfr/react-dsfr/Button";
import {ProjetInfoFormData, ProjetInfoFormSchema} from "@/forms/project/ProjetInfoFormSchema";
import InputFormField from "@/components/InputFormField";
import {zodResolver} from "@hookform/resolvers/zod";

export const ProjetInfoForm = () => {
  const form = useForm<ProjetInfoFormData>({
    resolver: zodResolver(ProjetInfoFormSchema),
    defaultValues: {nom: "", description: ""}
  });

  const onSubmit: SubmitHandler<ProjetInfoFormData> = async (data) => {
    console.log("Création d'un projet", data)
  };

  return (
    <>
      <form id="create-project" onSubmit={form.handleSubmit(onSubmit)}>
        <InputFormField control={form.control} path="nom" label="Intitulé du projet" asterisk={true}
                        hint="Il doit être court et précis. Le nom de la collectivite ou du programme n'est pas nécesaire."/>
        <InputFormField control={form.control} path="description" label="Description" asterisk={true} type="textarea"
                        hint="Précisez en quelques mots le contexte du projet, ses bénéficiaires et ses objectifs."
                        rows={6}/>
        <Button type="submit">
          Valider
        </Button>
      </form>
    </>
  );
};
