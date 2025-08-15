"use client";

import { useEffect, useState } from "react";

type props = {
  open?: boolean;
  onDismiss: () => void;
};

const Terms = ({ open, onDismiss }: props) => {
  const [show, setShow] = useState(open);

  useEffect(() => {
    if (open) {
      setShow(true);
    } else {
      // espera a animação de fade out terminar antes de desmontar
      const timeout = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    <>
      {show && (
        <div
          className={`bg-[rgba(0,0,0,0.5)] fixed h-screen w-screen top-0 left-0 py-6 px-2
          transition-opacity duration-300 ease-in-out z-[9999]
          ${open ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex justify-end items-end mb-0 md:mb-5">
            <button onClick={onDismiss}>
              <svg
                className="h-5 w-5"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="46"
                  height="46"
                  rx="23"
                  stroke="#F1EA3C"
                  stroke-width="2"
                />
                <rect
                  width="27.544"
                  height="2.96457"
                  rx="1.48228"
                  transform="matrix(-0.707107 0.707107 0.707107 0.707107 32.9764 13.5)"
                  fill="#F1EA3C"
                />
                <rect
                  x="15.5964"
                  y="13.5"
                  width="27.544"
                  height="2.96457"
                  rx="1.48228"
                  transform="rotate(45 15.5964 13.5)"
                  fill="#F1EA3C"
                />
              </svg>
            </button>
          </div>
          <div className="bg-white rounded-3xl p-5 pb-6 overflow-hidden mx-5 max-h-[90vh]">
            <h2 className="text-[#42489D] font-extrabold text-base md:text-[22px] mb-5">
              Termos de participação
            </h2>

            <div className="content text-[#3C3C3C] text-xs md:text-base overflow-y-scroll max-h-[600px]">
              <p className="mb-4 lg:mb-5">
                A participação na presente ação caracteriza, por si, a aceitação
                por parte dos consumidores participantes de todos os termos e
                condições estabelecidos neste termo. O participante declara que
                leu e concorda com os termos, comprometendo-se a obedecê-lo
                integralmente, previamente à postagem de quaisquer conteúdos
                destinados à participação na ação. E o participante autoriza a
                BB Seguros a enviar ofertas e comunicações referentes a produtos
                e serviços. O participante assume ainda, total responsabilidade
                pelos dados fornecidos na ação.
              </p>
              <p className="mb-4 lg:mb-5">
                O participante licencia, desde já, os direitos de uso de sua
                imagem, nome e som de voz, sem qualquer ônus para a BB Seguros,
                para uso exclusivo na ação, pelo período de 12 (doze) meses a
                contar da data de cadastro. A participação não traz qualquer
                obrigatoriedade de premiação por parte da BB Seguros. A BB
                Seguros se compromete a proteger os dados pessoais do
                participante, mantendo absoluta confidencialidade sobre tais
                informações. Ressalta-se que, ao participar da presente ação, o
                titular concorda, automaticamente, com o tratamento dos seus
                dados pessoais e com o que está disposto no presente nesse
                termo. Os dados serão compartilhados apenas com as empresas
                responsáveis pelo sistema do banco de dados com a finalidade
                exclusiva de executar e operacionalizar a presente ação.
              </p>
              <p className="mb-4 lg:mb-5">
                A BB Seguros exige que todas as empresas responsáveis pela
                execução e operacionalização desta promoção utilizem referidos
                dados pessoais em conformidade com este regulamento e com a Lei
                Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).
                Internamente, os dados dos participantes serão acessados somente
                por colaboradores autorizados, respeitando os princípios
                inerentes ao tratamento de dados pessoais previstos na Lei Geral
                de Proteção de Dados Pessoais, sempre com o objetivo de execução
                e operacionalização desta ação, além do compromisso de
                confidencialidade e preservação da privacidade, de acordo com
                este termo.
                <br /> Os dados pessoais coletados para esta ação ficarão
                armazenados para fins operacionais e obedecerão a padrões
                rígidos de confidencialidade e segurança. Nenhum documento,
                informação e/ou dado pessoal será divulgado e/ou compartilhado
                em nenhuma hipótese, salvo os casos acima previstos e/ou
                mediante ordem judicial ou por determinação regulatória ou
                legal. Ao término da ação, para fins de cumprimento legal e/ou
                defesa em eventual processo administrativo e/ou judicial,
                manterá, obrigatoriamente, em sua base de dados, os dados
                pessoais: (i) dos participantes contemplados: pelo prazo de 5
                (cinco) anos, ou até que haja o cancelamento, de forma expressa,
                das autorizações de manutenção dos dados, considerando o fato
                que ocorrer primeiro.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Terms;
