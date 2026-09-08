import React from 'react'
import { profitPage as source } from './contentSource.jsx'

// O conteúdo-base é a página Descubra Seu Lucro 01. Esta adaptação apenas
// organiza os mesmos dados para o layout da página 02.
export const profitPage = {
  ...source,
  nav: [['#diagnostico', 'O problema'], ['#ferramentas', 'A ferramenta'], ['#bonus', 'O que você recebe'], ['#depoimentos', 'Depoimentos'], ['#oferta', 'Oferta'], ['#faq', 'Dúvidas']],
  navCta: source.cta,
  hero: {
    eyebrow: source.eyebrow, headline: source.headline, subheadline: source.subheadline,
    cta: source.cta, secondaryCta: 'Conhecer o método', secondaryHref: '#ferramentas',
    promises: source.heroPromises, trust: source.trust,
    videoEmbedUrl: 'https://player.scaleup.com.br/embed/7b99dac06c456098fee41fc3f2d40f6362860cf2?aspectRatio=16:9&responsive=1&controls=1&fullscreen=1',
    videoTitle: source.videoTitle,
  },
  problems: { eyebrow: 'Diagnóstico', title: source.problemsTitle, text: 'Quando os números ficam misturados, o saldo da conta parece resposta — mas não mostra o resultado real do negócio.', items: [['target', ...source.problems[0].slice(1)], ['chart', ...source.problems[1].slice(1)], ['down', ...source.problems[2].slice(1)], ['alert', ...source.problems[3].slice(1)]], stats: source.stats, alert: source.alert },
  tools: {
    eyebrow: source.solutionKicker, title: source.solutionTitle, text: source.solutionText,
    items: [
      { icon: 'chart', name: 'DRE completo', text: source.receives[0][2], metric: 'Resultado mensal claro', preview: 'dre' },
      { icon: 'target', name: 'Margem visível', text: source.receives[1][2], metric: 'Indicadores em um painel', preview: 'margin' },
      { icon: 'shield', name: 'Pró-labore seguro', text: source.highlightText, metric: 'Decisão com segurança', preview: 'prolabore' },
    ],
    dialog: { title: 'Do saldo em conta à decisão com clareza', messages: [['client', 'No fim do mês', 'Entrou dinheiro, mas quanto realmente sobrou?'], ['owner', 'Sem o método', 'A conta tem saldo… então acho que deu lucro.'], ['sheet', 'A ferramenta', 'Receitas, custos, despesas, margem e lucro líquido organizados em um só lugar.'], ['owner', 'Com o método', 'Agora sei o lucro real e quanto posso retirar com segurança.']], note: 'Você preenche vendas e gastos; a ferramenta transforma isso em visão para decidir melhor.' },
  },
  flow: { eyebrow: 'Do número à decisão', title: source.stepsTitle, text: 'Um caminho simples para sair do achismo sem depender de conhecimentos de contabilidade.', steps: source.steps.map(({ number, title, text }) => [number, title, text]), benefits: ['Custos fixos, variáveis e ocultos separados', 'Lucro líquido e margem calculados automaticamente', 'Visão mensal e anual do negócio', 'Retirada baseada no resultado, não no chute'] },
  board: { eyebrow: 'Visão financeira', title: 'O painel que traduz movimento em resultado', text: 'Em vez de olhar apenas o saldo, você enxerga o que entrou, o que saiu e o que realmente ficou.', columns: ['Indicador', 'Valor do mês', 'Leitura', 'Status'], rows: [['Receitas', 'Vendas registradas', 'Tudo o que entrou no período', 'profit'], ['Custos', 'Compras e operação', 'O que foi necessário para vender', 'even'], ['Despesas', 'Fixas e variáveis', 'O que mantém a empresa funcionando', 'even'], ['Lucro líquido', 'Resultado após os pagamentos', 'Base para decidir e crescer', 'profit'], ['Pró-labore', 'Retirada planejada', 'Sem sufocar o caixa', 'profit']], legend: [['profit', 'Sob controle'], ['even', 'Para acompanhar'], ['loss', 'Ponto de atenção']], note: 'Exemplo ilustrativo. Na ferramenta, os dados e os resultados são os da sua empresa.' },
  where: { eyebrow: 'Uma ferramenta para a rotina real', title: 'Clareza para acompanhar o negócio sem complicação', text: 'Organize a informação essencial e consulte os indicadores que ajudam a decidir melhor.', items: [['desktop', 'Visão mensal', 'Acompanhe receitas, custos, despesas e resultado.'], ['chart', 'Dashboard anual', source.receives[3][2]], ['target', 'Margem calculada', source.receives[1][2]], ['shield', 'Pró-labore seguro', source.receives[4][2]], ['phone', 'Consulta prática', 'Tenha os números organizados quando precisar decidir.'], ['play', 'Método aplicado', 'Use o passo a passo para preencher e interpretar.']] },
  transformations: { eyebrow: 'O que muda na prática', title: 'Clareza para decidir e crescer', items: source.transformations },
  compare: { eyebrow: 'Comparativo', title: 'A diferença entre acompanhar o saldo e entender o negócio', without: { title: 'Do jeito que está hoje', items: ['Saldo em conta confundido com lucro', 'CPF e CNPJ misturados', 'Retirada feita sem critério', 'Decisões importantes sem dados confiáveis'] }, with: { title: 'Com o Descubra Seu Lucro', items: ['Receitas, custos e despesas organizados', 'Lucro líquido e margem visíveis', 'Pró-labore definido com segurança', 'Visão mensal e anual para decidir melhor'] } },
  proof: { eyebrow: 'Quem já aplicou', title: 'Empresários decidindo com números claros', ...source.socialProof, videos: source.testimonials, quotes: [] },
  authority: { eyebrow: 'Quem está por trás', ...source.authority, name: 'Gesieudo Nicácio', role: 'Empresário há mais de 15 anos e especialista em gestão estratégica. Ajuda donos de negócio a organizarem os números e tomarem decisões que geram lucro de verdade.', credentials: source.mentorCredentials, whatsappLabel: 'Falar com a equipe no WhatsApp' },
  bonus: { eyebrow: 'O que você recebe', title: source.detailsTitle, tabs: [{ icon: 'chart', label: 'Método', name: source.detailsGroups[0][0], headline: 'Entenda faturamento, lucro e margem sem confusão.', text: 'Um caminho direto para separar os números que importam e acompanhar o resultado do seu negócio.', benefits: source.detailsGroups[0][1] }, { icon: 'calculator', label: 'Ferramenta', name: source.detailsGroups[1][0], headline: 'Tenha o DRE e os indicadores em um só lugar.', text: 'A ferramenta organiza as informações para revelar o lucro líquido e a margem do negócio.', benefits: source.detailsGroups[1][1] }, { icon: 'desktop', label: 'Visão', name: source.detailsGroups[2][0], headline: 'Veja o mês, o ano e os próximos passos com clareza.', text: 'Use os dados organizados para acompanhar a evolução e decidir com mais segurança.', benefits: source.detailsGroups[2][1] }] },
  offer: { eyebrow: 'Oferta especial', title: 'Tenha clareza para decidir melhor', text: 'Você recebe o método, a ferramenta financeira e acompanhamento para implementar.', cardTitle: source.title, cardItems: source.offerItems, actionKicker: 'Acesso completo', actionTitle: source.installment, actionText: `ou ${source.price} ${source.priceNote}, com pagamento único e acesso vitalício.`, cta: 'Quero acessar o método', guarantee: { title: 'Garantia de 7 dias', text: 'Teste o produto por sete dias. Se não fizer sentido para o seu negócio, solicite o reembolso dentro desse período.' } },
  receive: { eyebrow: 'Como você recebe', title: 'Do pagamento à primeira decisão com clareza', steps: [['01', 'Compra segura', 'Você preenche seus dados e finaliza no ambiente de pagamento.'], ['02', 'Acesso imediato', 'O acesso chega no seu e-mail após a confirmação.'], ['03', 'Preencha vendas e gastos', 'Organize as informações essenciais do negócio.'], ['04', 'Decida com dados', 'Veja o lucro real e defina o pró-labore com segurança.']] },
  faq: { eyebrow: 'Ficou com dúvida?', title: 'Perguntas frequentes', items: source.faq },
  finalCta: { title: 'Pare de fechar o mês sem saber o que realmente sobrou', text: 'Organize vendas e gastos, enxergue o lucro real e defina uma retirada sustentável para sua empresa.', cta: source.cta, note: 'Garantia de 7 dias · acesso imediato · pagamento único' },
  footer: { tagline: 'Gestão · Lucro · Crescimento', linksTitle: 'Links rápidos', contactTitle: 'Atendimento', whatsappLabel: 'WhatsApp da equipe' },
}
