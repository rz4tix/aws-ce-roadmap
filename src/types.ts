export interface Task {
  name: string;
  description: string;
  tags: string[];
  hours: number;
  freeTier: boolean;
}

export interface Week {
  id: string;
  title: string;
  focus: string;
  tasks: Task[];
  miniProject: string;
  resources: string[];
}

export interface Phase {
  id: string;
  title: string;
  weeks: Week[];
}

export interface Curriculum {
  phases: Phase[];
}
