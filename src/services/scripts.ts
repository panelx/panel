const { exec } = require("child_process");

export async function call(name: string): Promise<string> {
  return new Promise((res, rej) => exec(name, (_: string, stdout: string, __: string) => {
    res(stdout);
  }));
}