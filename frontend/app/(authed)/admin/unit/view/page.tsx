"use client";

import { Button } from "@/lib/components/button";
import { InputField } from "@/lib/components/input";
import { Unit } from "@/lib/schemas/unit";
import { Endpoint } from "@/lib/services/endpoint";
import { useMutation, useQuery } from "@tanstack/react-query";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FormEvent, useCallback } from "react";
import { twMerge } from "tailwind-merge";

const queryKey = ['units'];

export default function ViewUnitPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const { data: units, error, isFetched, isError, isLoading } = useQuery({
    queryKey,
    queryFn: () => {
      console.log(`[QUERY] Querying page with ${query}`);
      return [
        { id: query ?? 0, name: "TEST" }
      ] as Unit[];
      // TODO: Integration with backend
      // Endpoint.get("...")
    },
  })

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const onSearch = useCallback((e: FormEvent<HTMLFormElement>) => {
    const form = e.target as HTMLFormElement;
    const id = (form.elements[0] as HTMLInputElement).value;

    router.push(pathname + "?" + createQueryString("q", id));
  }, []);

  if (isError) console.error(error);

  return (
    <main className="w-full flex flex-col items-center gap-y-4 mr-2">
      <form onSubmit={onSearch} className="flex flex-col items-center gap-y-2">
        <h1 className="text-2xl my-2">Consultar Unidade</h1>

        <label htmlFor="id" className="w-2xl">
          <h1>ID:</h1>
          <InputField name="id" id="id" placeholder="-" />
        </label>

        <Button type="submit">
          Buscar
        </Button>
      </form>

      <div className="w-full bg-gray-300 text-black p-5 min-h-50">
        {isError && (
          <div>
            Houve um erro durante a chamada ao servidor.
            Por favor, tente novamente.
          </div>
        )}

        {isLoading && (
          <div>
            Carregando...
          </div>
        )}

        {(isFetched && units?.length === 0) && (
          <div>
            Nenhuma unidade com o id informado foram encontradas
          </div>
        )}

        {(isFetched && units!.length > 0) && (
          <ul>
            {units!.map(unit => (
              <li key={unit.id}>
                {unit.id} - {unit.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}
