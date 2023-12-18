import { Drawner } from "@/components/Drawner";
import NavBarTest from "@/components/NavBarTest";
import { useEffect, useState } from "react";
import { FaPerson, FaPlus } from "react-icons/fa6";
import { z, ZodError } from "zod";

const userSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("Insira um endereço de e-mail válido"),
  celular: z.string().refine((value) => /^\d{10}$/i.test(value), {
    message: "O número de celular deve ter 10 dígitos",
  }),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

interface FormData {
  id: number;
  name: string;
  email: string;
  password: string;
  celular: string;
}

export default function Colaboradores() {
  const initialValues: FormData = {
    id: 0,
    name: "",
    email: "",
    password: "",
    celular: "",
  };
  const [formData, setFormData] = useState<FormData>(initialValues);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [validateError, setValidateError] = useState<Record<string, string>>(
    {}
  );
  const [parsedColaboradores, setParsedColaboradores] = useState<FormData[]>(
    []
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Validando os dados do formulário
      const validatedData = userSchema.parse({ ...formData, id: Date.now() });
      console.log("Dados válidos:", validatedData);

      // Recupere a lista atual de colaboradores do localStorage
      const existingColaboradores = JSON.parse(
        localStorage.getItem("colaboradores") || "[]"
      );

      // Adicione o novo colaborador à lista
      const updatedColaboradores = [...existingColaboradores, validatedData];

      // Armazene a lista atualizada no localStorage
      localStorage.setItem(
        "colaboradores",
        JSON.stringify(updatedColaboradores)
      );

      setFormData(initialValues);
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Erro de validação:", error.errors);
        const errors: Record<string, string> = {};
        error.errors.forEach((validationError) => {
          // Corrigir a referência para 'validationError' em vez de 'validateError'
          errors[validationError.path[0]] = validationError.message;
        });

        setValidateError(errors);
      } else {
        console.error("Erro desconhecido:", error);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setValidateError((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleOpen = () => {
    setOpenDrawer(true);
  };

  const handleClose = () => {
    setOpenDrawer(false);
  };

  useEffect(() => {
    const storedColaboradores = localStorage.getItem("colaboradores");

    if (storedColaboradores) {
      const parsedColaboradores = JSON.parse(storedColaboradores);
      setParsedColaboradores(parsedColaboradores);
    }
  }, []);

  return (
    <>
      <section className="flex max-w-screen-xl text-sky-950 text-2xl pt-2 mb-5 justify-between pl-12">
        <NavBarTest />
        <section className="w-3/4 ml-10 mt-10 flex flex-col gap-3 relative">
          <section className="flex w-full justify-between">
            <h1>Lista de Colaboradores</h1>
            <button
              onClick={handleOpen}
              className="font-medium text-sm flex gap-1 text-white px-3 py-2 rounded-lg items-center bg-indigo-500"
            >
              {" "}
              <FaPlus className="font-bold" /> Add Colaborador
            </button>
          </section>
          {parsedColaboradores.map((colaborador) => (
            <section
              key={colaborador.id}
              className="flex justify-between px-1 items-center py-2 bg-gray-300 rounded-lg"
            >
              <FaPerson />
              <span className="text-start">{colaborador.name}</span>
              <span className="text-start">{colaborador.email}</span>
              <span className="text-start">{colaborador.celular}</span>
            </section>
          ))}
        </section>
      </section>

      {/* Form de cadastro */}

      <Drawner close={handleClose} open={openDrawer}>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              name="name"
              placeholder="Nome Completo"
              value={formData.name}
              onChange={handleChange}
              className={validateError.name ? "border-red-500 border-2" : ""}
            />
            {validateError.name && (
              <span className="error-message">{validateError.name}</span>
            )}
          </section>
          <section>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              name="email"
              placeholder="exemplo@exemplo"
              value={formData.email}
              onChange={handleChange}
              className={validateError.email ? "border-red-500 border-2" : ""}
            />
            {validateError.email && (
              <span className="error-message">{validateError.email}</span>
            )}
          </section>
          <section>
            <label htmlFor="celular">Celular:</label>
            <input
              type="text"
              name="celular"
              placeholder="00000000"
              value={formData.celular}
              onChange={handleChange}
              className={validateError.celular ? "border-red-500 border-2" : ""}
            />
            {validateError.celular && (
              <span className="error-message">{validateError.celular}</span>
            )}
          </section>
          <section>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              name="password"
              placeholder="****************"
              value={formData.password}
              onChange={handleChange}
              className={
                validateError.password ? "border-red-500 border-2" : ""
              }
            />
            {validateError.password && (
              <span className="error-message">{validateError.password}</span>
            )}
          </section>
          <button
            type="submit"
            className="font-medium text-sm flex gap-1 text-white px-3 py-2 rounded-lg items-center bg-indigo-500"
          >
            <FaPlus className="font-bold" /> Add Colaborador
          </button>
        </form>
      </Drawner>
    </>
  );
}
