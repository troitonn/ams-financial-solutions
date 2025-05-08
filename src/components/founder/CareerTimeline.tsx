import React from 'react';
interface TimelineItemProps {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  logo?: string;
  isLast?: boolean;
}
const TimelineItem: React.FC<TimelineItemProps> = ({
  company,
  role,
  period,
  location,
  description,
  logo,
  isLast = false
}) => {
  return <div className="relative pl-8 pb-12">
      {/* Timeline line */}
      {!isLast && <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-ams-gold/80 to-ams-gold/20"></div>}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 transform -translate-x-1/2 w-6 h-6 rounded-full bg-ams-darkGray border-2 border-ams-gold"></div>
      
      {/* Content */}
      <div className="glass-card p-6 hover:border-ams-gold/50 transition-all duration-300">
        <div className="flex flex-col md:flex-row justify-between mb-2">
          <h3 className="text-xl font-bold text-white">{role}</h3>
          <span className="text-ams-gold">{period}</span>
        </div>
        <p className="text-gray-300 font-medium mb-1">{company}</p>
        <p className="text-gray-400 italic mb-4">{location}</p>
        
        {description.length > 0 && <div className="space-y-2">
            {description.map((item, index) => <p key={index} className="text-gray-300 text-sm">{item}</p>)}
          </div>}
      </div>
    </div>;
};
const CareerTimeline: React.FC = () => {
  const career = [{
    company: "A.M.S Negocios e Intermediacao Ltda",
    role: "Sócio proprietário",
    period: "Jan 2023 - Presente · 2 yrs 5 mos",
    location: "São Paulo, Brasil · On-site",
    description: ["Trajetória profissional, desenvolvida em instituições financeiras nacionais com experiência nas áreas Corporate, Middle Market.", "Vivência análise e intermediação de negócios, operações de crédito e risco, e gerenciamento de transações financeiras convencionais e estruturadas.", "Habilidade na condução de negociações e no desenvolvimento de relacionamento com empresas, Bancos fundos de Investimentos, Assets", "Focado em resultados e nas necessidades do cliente, com visão de relacionamento de longo prazo.", "Domínio de produtos bancários relacionados aos mercados de capitais, doméstico.", "Experiência na originação, estruturação e distribuição de serviços/produtos bancários/financeiros incluindo capital de giro, securitização de recebíveis, entre outros.", "Geramos 50MM em operações estruturadas em 2024, cases de Sucesso, empresa ramo Agro e Alimentícios"]
  }, {
    company: "Prudent Group",
    role: "Gerente Comercial Middle e Corporate",
    period: "Aug 2019 - Jan 2023 · 3 yrs 6 mos",
    location: "São Paulo, Brasil",
    description: ["Prospecção de Clientes empresas, seguimentos: Middle, Corporate, Large Corp.", "Operações de Crédito estruturados, rentabilização e gerenciamento de Carteira", "Aprovação ramo agro 200MM com grandes Players!"]
  }, {
    company: "BRR Crédito Digital",
    role: "Gerente de negócios",
    period: "Nov 2016 - Jun 2019 · 2 yrs 8 mos",
    location: "São Paulo e Região, Brasil",
    description: ["Atuação na prospecção e gerenciamento de carteiras de clientes de pessoa jurídica de Middle Market.", "Experiência na área comercial oriundos de bancos, factoring ou de empresas financeiras, Atuando no segmento de pessoa jurídica.", "Experiência na administração de carteira de recebíveis (duplicatas) de clientes de Middle Market."]
  }, {
    company: "SRM Asset Administração de Recursos e Finanças",
    role: "Gerente de negócios",
    period: "Jan 2016 - Nov 2016 · 11 mos",
    location: "São Paulo e Região, Brasil",
    description: ["Abertura de contas Pessoa Jurídica.", "Manutenção carteira de clientes.", "Aumento de receita, através do aumento de ativos e expansão da carteira.", "Atuação Nível Brasil.", "Faturamento Acima 30MM"]
  }, {
    company: "ViaInvest Serviços Financeiros",
    role: "Gerente de negócios",
    period: "Aug 2015 - Jan 2016 · 6 mos",
    location: "São Paulo e Região, Brasil",
    description: ["Abertura de contas Pessoa Jurídica.", "Manutenção carteira de clientes.", "Aumento de receita, através do aumento de ativos e expansão da carteira.", "Atuação Capital, Grande São Paulo e Interior."]
  }, {
    company: "Grupo ContinentalBanco",
    role: "Gerente Comercial PJ",
    period: "Set 2014 - Aug 2015 · 1 ano",
    location: "São Paulo e Região, Brasil",
    description: ["Atuação na prospecção e gerenciamento de carteiras de clientes de pessoa jurídica de Middle Market.", "Experiência na área comercial oriundos de bancos, factoring ou de empresas financeiras, Atuando no segmento de pessoa jurídica.", "Experiência na administração de carteira de recebíveis (duplicatas) de clientes de Middle Market."]
  }, {
    company: "SRM Asset",
    role: "Gerente júnior",
    period: "Jun 2013 - Set 2014 · 1 ano 4 meses",
    location: "São Paulo e Região, Brasil",
    description: ["Atuando como Gerente Junior, com empresas medias e de pequeno porte nivel brasil, desconto de duplicatas, Capital Giro."]
  }, {
    company: "Trendbank S A Banco De Fomento",
    role: "Operações",
    period: "Aug 2011 - Jul 2013 · 2 anos",
    location: "São Paulo, Brasil",
    description: ["Checagem de títulos adquiridos pela empresa nas operações junto aos clientes através da Serasa fazendo analise do capital social tempo de fundação da empresa e relacionamento com o mercado.", "Também fazemos contato com os donos dos títulos para confirmar a procedência dos títulos como a entrega da mercadoria ou serviço prestado.", "Acompanhamento da liquidação dos títulos junto ao banco."]
  }, {
    company: "ATP Tecnologia e Produtos S.A.",
    role: "Gerente de back office",
    period: "Jun 2005 - Jun 2010 · 5 anos 1 mês",
    location: "São Paulo, Brasil",
    description: ["Formalização de contratos do crédito Consignado e Veículos, para Banco Schahin, analise documental para identificação de fraude.", "Acompanhamento de pendências e cobranças junto às promotoras.", "Solicitação e remessa de contratos para atendimento a auditorias, ofícios, ações jurídicas e fraudes.", "Atendimento direto aos clientes;", "Conhecimento teórico e prático de toda documentação e tramite no processo de financiamento."],
    isLast: true
  }];
  return <div className="pt-8 pb-4 py-0">
      <h3 className="text-2xl font-bold mb-8 text-center gradient-gold">Trajetória Profissional</h3>
      <div className="relative">
        {career.map((item, index) => <TimelineItem key={index} company={item.company} role={item.role} period={item.period} location={item.location} description={item.description} isLast={index === career.length - 1} />)}
      </div>
    </div>;
};
export default CareerTimeline;