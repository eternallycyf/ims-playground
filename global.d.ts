declare module '*.worker' {
  const WorkerFactory: new () => Worker;
  export default WorkerFactory;
}

declare module '*.ejs?raw' {
  const content: string;
  export default content;
}

declare module '*.json?raw' {
  const content: string;
  export default content;
}
