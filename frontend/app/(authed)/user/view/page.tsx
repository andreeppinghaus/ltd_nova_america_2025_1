import { Button } from "@/lib/components/button";
import { Card, CardBody, CardTitle } from "@/lib/components/card";
import { LabelledInput } from "@/lib/components/input";

export default function UserViewPage() {
  const data = {};
  const onSearchFormSend = async (form: FormData) => {
    "use server";
    
    // TODO: Implement search integration with backend
    void form;
  }
  
  return (
    <div className="w-full p-5 gap-3 flex flex-col items-center">
      <form action={onSearchFormSend} className="w-xl flex flex-col gap-4 items-center">
        <Card className="gap-5 bg-background">
          <CardTitle>Consultar Usuário</CardTitle>
          
          <CardBody className="gap-3">
            <LabelledInput placeholder="Identificação" type="text" name="id" id="id" />
            <Button className="max-w-xs" type="submit">
              Consultar
            </Button>
          </CardBody>
        </Card>
      </form>
      
      {data !== null && (
        <Card className="min-w-2xl h-lg bg-background">
          <CardTitle>Resultados</CardTitle>
          <div className="border-t-2 border-gray-400 w-full" />
          
          <CardBody className="gap-2 my-2">
            RESULTADOS AQUI
          </CardBody>
        </Card>
      )}
    </div>
  );
}
