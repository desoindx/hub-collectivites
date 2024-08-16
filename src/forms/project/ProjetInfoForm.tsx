"use client";
import {SubmitHandler, useForm} from "react-hook-form";
import Button from "@codegouvfr/react-dsfr/Button";
import {ProjetInfoFormData, ProjetInfoFormSchema} from "@/forms/project/ProjetInfoFormSchema";
import InputFormField from "@/components/InputFormField";
import {zodResolver} from "@hookform/resolvers/zod";

export const ProjetInfoForm = () => {
  const form = useForm<ProjetInfoFormData>({
    resolver: zodResolver(ProjetInfoFormSchema),
  });

  const onSubmit: SubmitHandler<ProjetInfoFormData> = async (data) => {
    console.log("Création d'un projet", data)
  };

  return (
    <>
      <form id="user-info" onSubmit={form.handleSubmit(onSubmit)}>
        <InputFormField control={form.control} path="nom" label="Nom du projet" asterisk={true}/>
        <InputFormField control={form.control} path="description" label="Description" asterisk={true} type="textarea"/>
        <Button type="submit">
          Valider
        </Button>
      </form>
    </>
  );
};
