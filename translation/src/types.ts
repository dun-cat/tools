export type Source = {
  name: string;
  path: string;
}

export type Sources = Source[];

export type DSLData = { [key: string]: string[] };

export type Options = {
  sourceDir: string;
  targetFile: string;
}
