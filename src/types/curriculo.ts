export type Experiencia={empresa:string;cargo:string;inicio:string;fim:string;descricao:string};
export type Formacao={instituicao:string;curso:string;inicio:string;fim:string};
export type Curriculo={id:string;nome:string;cargo:string;email:string;cpf:string;telefone:string;nascimento:string;cidade:string;resumo:string;foto:string;experiencias:Experiencia[];formacoes:Formacao[]};

