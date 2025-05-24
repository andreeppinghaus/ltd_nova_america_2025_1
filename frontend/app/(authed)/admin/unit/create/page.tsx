import { Button } from "@/lib/components/button";
import { InputField } from "@/lib/components/input";
import { twMerge } from "tailwind-merge";

export default function UnitCreatePage() {
  const onUnitCreate = async (form: FormData) => {
    "use server";

    void form;
  };

  return (
    <form action={onUnitCreate} className="flex flex-col items-center justify-center gap-y-4">
      <h1 className="text-2xl">Cadastrar Unidade</h1>

      <label htmlFor="id" className="flex flex-col items-start w-full max-w-xl">
        <h1 className="text-sm">ID:</h1>
        <InputField name="id" id="id" type="text" placeholder="-" />
      </label>

      <label htmlFor="name" className="flex flex-col items-start w-full max-w-xl">
        <h1 className="text-sm">Nome:</h1>
        <InputField name="name" id="name" type="text" placeholder="-" />
      </label>

      <Button type="submit">
        Cadastrar
      </Button>
    </form>
  )
}
