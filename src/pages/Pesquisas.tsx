import Modal from "@/components/Modal";
import NavBarTest from "@/components/NavBarTest";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { ZodError, date, z } from "zod";

const pesquisaSchema = z.object({
  id: z.number().optional(),
  pergunta: z.string().min(3, "Deve conter no minimo 3 caracteres"),
  ordem: z.string().min(1, "Deve conter no minimo 1 caracteres"),
  tipo: z.string().min(1, "Deve conter no minimo 1 caracteres"),
  resposta: z.string().min(1, "Deve conter no minimo 1 caracteres"),
  obrigatorio: z.boolean(),
});

interface FormData {
  id: number;
  pergunta: string;
  ordem: string;
  tipo: string;
  resposta: string;
  obrigatorio: boolean;
}

export default function Pesquisas() {
  const initialValues: FormData = {
    id: Date.now(),
    pergunta: "",
    ordem: "",
    tipo: "",
    resposta: "",
    obrigatorio: false,
  };
  const [formData, setFormData] = useState<FormData>(initialValues);
  const [validateError, setValidateError] = useState<Record<string, string>>(
    {}
  );
  const [parsedPesquisas, setParsedPesquisas] = useState<FormData[]>([]);
  const [open, setOpen] = useState(false);
  const [obrigatorio, setObrigatorio] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
    try {
      const validatedData = pesquisaSchema.parse({
        ...formData,
        id: Date.now(),
      });

      const existPesquisa = JSON.parse(
        localStorage.getItem("pesquisas") || "[]"
      );
      const updatedPesquisa = [...existPesquisa, validatedData];

      localStorage.setItem("pesquisas", JSON.stringify(updatedPesquisa));
      setFormData(initialValues);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      id: name === "id" ? Date.now() : prevData.id,
    }));
    setValidateError((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleCheckBox = (event) => {
    const { name, checked } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  return (
    <>
      <section className="flex max-w-screen-xl text-sky-950 text-2xl pt-2 mb-5 justify-between pl-12">
        <NavBarTest />
        <section className="flex flex-col ml-4">
          <section className="justify-end flex">
            <button
              onClick={handleOpen}
              className="font-medium text-sm flex gap-1 text-white px-3 py-2 rounded-lg items-center bg-indigo-500"
            >
              <FaPlus className="font-bold" /> Criar Pesquisa
            </button>
          </section>
          <section className="rounded-lg w-full h-auto mt-3">
            <table>
              <thead>
                <tr className="text-lg border-y border-black">
                  <th className="py-2 px-4">Pesquisa</th>
                  <th className="py-2 px-4">Grupo PDV</th>
                  <th className="py-2 px-4">Grupo Colaborador</th>
                  <th className="py-2 px-4">Perguntas</th>
                  <th className="py-2 px-4">Configurar</th>
                  <th className="py-2 px-4">Enviar E-mail</th>
                  <th className="py-2 px-4">Duplicar</th>
                  <th className="py-2 px-4">Criar Modelo</th>
                  <th className="py-2 px-4">Relatórios</th>
                  <th className="py-2 px-4">Inativar</th>
                </tr>
              </thead>
            </table>
          </section>
        </section>
      </section>
      <Modal isOpen={open} onClose={handleClose} title={`Nova Perquisa`}>
        <form onSubmit={handleSubmit}>
          <section className="mb-2 gap-2 flex">
            <label htmlFor="pergunta">Pergunta</label>
            <input
              type="text"
              name="pergunta"
              value={formData.pergunta}
              onChange={handleChange}
              id="pergunta"
              className={
                validateError.pergunta
                  ? "border-red-500 border-2"
                  : " py-1 px-2 bg-gray-200 rounded-lg"
              }
            />
            {validateError.pergunta && (
              <span className="error.message">{validateError.pergunta}</span>
            )}
          </section>
          <section className="mb-2 gap-2 flex">
            <label htmlFor="ordem">Ordem</label>
            <select
              name="ordem"
              id="ordem"
              className=" py-1 px-7 bg-gray-200 rounded-lg"
              onChange={handleChange}
              value={formData.ordem}
            >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </section>
          <section className="mb-2 gap-2 flex">
            <label htmlFor="tipo">Tipo</label>
            <select
              name="tipo"
              id="tipo"
              className=" py-1 px-7 bg-gray-200 rounded-lg"
              value={formData.tipo}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="discursiva">Discursiva</option>
              <option value="dissertativa">Dissertativa</option>
            </select>
          </section>
          <section className="mb-2 gap-2 flex">
            <label htmlFor="resposta">Resposta</label>
            <select
              name="resposta"
              id="resposta"
              className=" py-1 px-7 bg-gray-200 rounded-lg"
              value={formData.resposta}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="texto">Texto</option>
              <option value="checkbox">Checkbox</option>
              <option value="selecao">Seleção</option>
            </select>
          </section>
          <section className="mb-2 gap-2 flex">
            <label htmlFor="obrigatorio">Obrigatório</label>
            <input
              type="checkbox"
              name="obrigatorio"
              id="obrigatorio"
              checked={formData.obrigatorio}
              onChange={handleCheckBox}
            />
          </section>

          <button
            type="submit"
            className="font-medium text-sm flex gap-1 text-white px-3 py-2 rounded-lg items-center bg-green-700"
          >
            Enviar
          </button>
        </form>
      </Modal>
    </>
  );
}
