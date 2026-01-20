export interface Photo {
  id: string;
  url: string;
  name: string;
  rotation: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  iconName: 'Pokeball' | 'Pencil' | 'Search';
  type?: 'webapp' | 'tool' | 'product';
}
