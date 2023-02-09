export interface todo {
  id?: number;
  content?: string;
  complete?: boolean;
  category?: string;
  tags?: string[];
  read: (id?: number) => void;
  create: (content?: string, category?: string, tags?: string[]) => void;
  update: (
    complete: boolean,
    content: string,
    category: string,
    tags: string[]
  ) => void;
  delete: (id?: number) => void;
}

const index: todo = {
  id: 0,
  content: "",
  complete: false,
  category: "",
  tags: [],
  read: (id) => {},
  create: (content, category, tags) => {},
  update: (complete, content, category, tags) => {},
  delete: (id) => {},
};
