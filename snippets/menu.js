/*
  Itens do menu do topo (sections/header.js); o rodapé (sections/footer.js) monta as colunas a partir deles.
  Itens do menu. `href`: link direto; `items`: abre um submenu com [rótulo, link].
  Item de submenu sem link (`[rótulo]`) aparece normal, mas ainda não leva a lugar nenhum.
*/
export const menu = [
  { label: 'Início', href: '/' },
  { label: 'Sobre nós', href: '#' }, // página ainda não existe
  { label: 'Nossas soluções', href: '/#solucoes' }, // por enquanto, a seção de soluções da home
  {
    label: 'Contato',
    // ainda sem links
    items: [
      ['Proposta comercial'],
      ['Credenciamento'],
      ['Cadastro médico'],
      ['Trabalhe conosco'],
      ['Fornecedores'],
      ['Ouvidoria'],
      ['Canal de denúncias'],
      ['Imprensa'],
    ],
  },
  {
    label: 'Já sou cliente',
    // ainda sem links
    items: [
      ['SOC'],
      ['MAESTRO'],
      ['Agenda digital'],
      ['BI - Dashboard'],
      ['Treinamento online'],
      ['Solicitação de proposta comercial'],
      ['Chat com pós-vendas'],
    ],
  },
];

// atalho para o submenu de um item, pelo rótulo
export const submenu = (label) => menu.find((m) => m.label === label).items;
