import { useState } from "react";
import ReactInputMask from "react-input-mask";

export const Formulario = () => {
    const [nome, setNome] = useState("");
    const [fone, setFone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fileUrl = "outros/HAUZ - BOOK MAKALOA - TESTE.pdf";
        
        const data = {
            nome,
            fone,
            email,
          };

    try {
        const response = await fetch("http://localhost:3000/makaloacadastros", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Cadastro realizado com sucesso!");
            setNome("");
            setFone("");
            setEmail("");
          } else {
            alert("Erro ao realizar o cadastro.");
          }
        } catch (error) {
          console.error("Erro:", error);
          alert("Erro ao conectar com o servidor.");
        }
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        id="nome"
                        type="text"
                        placeholder="Nome"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <ReactInputMask
                        mask="(99) 99999-9999" 
                        id="fone"
                        type="tel"
                        placeholder="(00)00000-0000"
                        required
                        value={fone}
                        onChange={(e) => setFone(e.target.value)}
                    />
                    <input
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Cadastre-se e baixe o book</button>
                </div>
            </form>
        </div>
    );
};
