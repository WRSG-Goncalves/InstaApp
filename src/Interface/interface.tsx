export interface FeedItemProp {
    id: number;
    nome: string;
    descricao: string;
    imgperfil: string;
    imgPublicacao: string;
    likeada: boolean;
    likers: number;
}

export  interface ListState {
    feed: FeedItemProp[];
  }

  export  interface FeedProps {
    data: FeedItemProp; 
  }  