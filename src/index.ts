import { init, exit } from "./myPackage";

class Block {
  constructor(private data: string) {}
  static hello() {
    return "hi";
  }
}

init({ url: "true", debug: true });
exit(1);
