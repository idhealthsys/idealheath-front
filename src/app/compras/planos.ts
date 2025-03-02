type Planos = {
  name: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
}

export const planos: Planos[] = [
    {
      name: "Plano Essencial",
      subtitle: 'Ideal para equipes pequenas.',
      price: "R$ 99,00",
      description:
        "Ideal para começar. Tenha acesso a recursos básicos e comece a organizar seus dados.",
      features: [
        "Até 5 usuários",
        "Relatórios básicos",
        "Armazenamento limitado",
        "Suporte por email",
      ],
    },
    {
      name: "Plano Profissional",
      subtitle: 'Para equipes maiores.',
      price: "R$ 199,00",
      description:
        "Para equipes em crescimento. Recursos avançados e maior capacidade de armazenamento.",
      features: [
        "Até 20 usuários",
        "Relatórios avançados",
        "Armazenamento expandido",
        "Suporte prioritário",
        "Integrações API",
      ],
    },
    {
      name: "Plano Empresarial",
      subtitle: 'Gestão completa de dados.',
      price: "R$ 399,00",
      description:
        "A solução completa para grandes empresas. Recursos ilimitados e suporte personalizado.",
      features: [
        "Usuários ilimitados",
        "Relatórios personalizados",
        "Armazenamento ilimitado",
        "Suporte dedicado",
        "Treinamento personalizado",
        "Integrações avançadas",
      ],
    },
  ];